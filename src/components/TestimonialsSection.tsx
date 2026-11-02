import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, companiesCount } from "@/data/siteData";
import FadeUp from "@/components/FadeUp";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-light-section text-innovation-black">
      <div className="container mx-auto px-4">
        <FadeUp className="text-center mb-16">
          <h2
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            O que nossos{" "}
            <span className="bg-primary px-3 rounded-lg inline-block">clientes dizem</span>
          </h2>
          <p className="text-lg text-innovation-black/70 max-w-3xl mx-auto">
            Histórias de sucesso de empresas que confiaram na Innovation para
            crescer.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full bg-white border border-innovation-black/10 rounded-3xl p-8 flex flex-col">
                    <Quote className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                    <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} estrelas`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-innovation-black fill-primary"
                        />
                      ))}
                    </div>
                    <blockquote className="text-innovation-black/80 leading-relaxed mb-6 flex-1">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-innovation-black flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <span className="text-primary font-bold text-sm">
                          {getInitials(testimonial.name)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-innovation-black">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-innovation-black/60">
                          {testimonial.role} • {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious
                className="static translate-y-0 w-12 h-12 bg-primary text-innovation-black border-none hover:bg-primary/90"
                aria-label="Depoimento anterior"
              />
              <CarouselNext
                className="static translate-y-0 w-12 h-12 bg-primary text-innovation-black border-none hover:bg-primary/90"
                aria-label="Próximo depoimento"
              />
            </div>
          </Carousel>
        </FadeUp>

        <FadeUp delay={0.3} className="text-center mt-14">
          <div className="inline-flex items-center bg-innovation-black rounded-full py-4 px-8">
            <span className="text-primary font-medium">
              Mais de {companiesCount} empresas confiam na Innovation
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default TestimonialsSection;
