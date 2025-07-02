
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-innovation-black z-50 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none">
        <div className="text-center">
          <img 
            src="/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png" 
            alt="Agência Innovation" 
            className="w-32 h-32 mx-auto mb-4"
          />
          <div className="text-innovation-yellow text-2xl font-bold font-poppins">
            Agência Innovation
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-innovation-black z-50 flex items-center justify-center transition-opacity duration-500">
      <div className="text-center animate-pulse-slow">
        <img 
          src="/lovable-uploads/970e164c-a7ec-484d-ad21-3d7252fd1cda.png" 
          alt="Agência Innovation" 
          className="w-32 h-32 mx-auto mb-4 animate-fade-in-up"
        />
        <div className="text-innovation-yellow text-2xl font-bold font-poppins animate-fade-in-up">
          Agência Innovation
        </div>
        <div className="text-white/70 text-sm mt-2 animate-fade-in-up">
          Carregando experiência...
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
