import { tracking } from "@/data/siteData";

const CONSENT_KEY = "innovation_cookie_consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const getConsent = (): boolean =>
  localStorage.getItem(CONSENT_KEY) === "accepted";

export const setConsent = (accepted: boolean) => {
  localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "declined");
  if (accepted) loadTrackers();
};

let trackersLoaded = false;

export const loadTrackers = () => {
  if (trackersLoaded || !getConsent()) return;
  trackersLoaded = true;

  // Google Analytics 4
  if (tracking.gaId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${tracking.gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", tracking.gaId);
  }

  // Meta Pixel (somente se houver ID configurado)
  if (tracking.metaPixelId) {
    const n = (window.fbq = window.fbq || function (...args: unknown[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((n as any).queue = (n as any).queue || []).push(args);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (n as any).loaded = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (n as any).version = "2.0";
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
    window.fbq("init", tracking.metaPixelId);
    window.fbq("track", "PageView");
  }
};

export const trackEvent = (
  eventName: string,
  params: Record<string, string> = {}
) => {
  if (!getConsent()) return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
};

// Captura de UTMs da URL
export const getUtmParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || null,
    utm_medium: params.get("utm_medium") || null,
    utm_campaign: params.get("utm_campaign") || null,
  };
};
