import { Button } from "@/components/ui/button";
import {
  Fan,
  ChefHat,
  Factory,
  PipetteIcon,
  Droplets,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Fan,
    title: "HVAC Systems & AHUs",
    desc: "Complete heating, ventilation, and air conditioning solutions including Air Handling Units for commercial and industrial spaces.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Ventilation",
    desc: "Specialized exhaust and fresh air systems for commercial kitchens, restaurants, and food processing facilities.",
  },
  {
    icon: Factory,
    title: "Industrial Fans & Blowers",
    desc: "High-performance axial and centrifugal fans, blowers, and air movement equipment for demanding industrial environments.",
  },
  {
    icon: PipetteIcon,
    title: "Ducting & Air Distribution",
    desc: "Custom-fabricated GI, SS, and PU ducting systems with precision-engineered air distribution solutions.",
  },
  {
    icon: Droplets,
    title: "Dehumidification Solutions",
    desc: "Advanced moisture control and dehumidification systems for pharmaceutical, food storage, and data center applications.",
  },
  {
    icon: Wrench,
    title: "Retrofit & Custom Projects",
    desc: "Upgrading existing HVAC infrastructure and designing bespoke ventilation solutions tailored to unique requirements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          Our Solutions
        </span>
        <h2 className="section-title mt-2">Comprehensive Air Control Services</h2>
        <p className="section-subtitle">
          From design and engineering to installation and maintenance, we deliver
          end-to-end HVAC and ventilation solutions.
        </p>
      </div>

      <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {s.desc}
            </p>
            <Button
              variant="link"
              className="p-0 h-auto text-primary font-medium text-sm"
            >
              Know More →
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
