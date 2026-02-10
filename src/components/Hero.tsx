import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial HVAC systems" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow px-4 md:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-foreground/90">
              30+ Years of Trusted Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Engineering Excellence in{" "}
            <span className="text-highlight">Air Control</span> Solutions
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:0.15s] opacity-0">
            Delivering premium HVAC, ventilation & air quality solutions for
            commercial and industrial spaces across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.3s] opacity-0">
            <a href="#contact">
              <Button size="lg" className="bg-highlight text-navy font-semibold hover:bg-highlight/90 text-base px-8">
                Get a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="tel:9880013779">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8">
                <Phone className="mr-2 w-4 h-4" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
