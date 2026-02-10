import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Fan, ChefHat, Factory, PipetteIcon, Droplets, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Fan,
    title: "HVAC Systems & AHUs",
    desc: "Complete heating, ventilation, and air conditioning solutions including Air Handling Units for commercial and industrial spaces.",
    features: [
      "Custom AHU design & manufacturing",
      "Central air conditioning systems",
      "Variable Refrigerant Flow (VRF) systems",
      "Energy-efficient HVAC solutions",
    ],
  },
  {
    icon: ChefHat,
    title: "Kitchen Ventilation",
    desc: "Specialized exhaust and fresh air systems for commercial kitchens, restaurants, and food processing facilities.",
    features: [
      "Commercial kitchen exhaust hoods",
      "Grease filtration systems",
      "Make-up air units",
      "Fire suppression integration",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Fans & Blowers",
    desc: "High-performance axial and centrifugal fans, blowers, and air movement equipment for demanding industrial environments.",
    features: [
      "Centrifugal & axial fans",
      "High-temperature blowers",
      "Explosion-proof fans",
      "Custom fan engineering",
    ],
  },
  {
    icon: PipetteIcon,
    title: "Ducting & Air Distribution",
    desc: "Custom-fabricated GI, SS, and PU ducting systems with precision-engineered air distribution solutions.",
    features: [
      "GI, SS & PU duct fabrication",
      "Insulated ductwork",
      "Flexible ducting solutions",
      "Air distribution grilles & diffusers",
    ],
  },
  {
    icon: Droplets,
    title: "Dehumidification Solutions",
    desc: "Advanced moisture control and dehumidification systems for pharmaceutical, food storage, and data center applications.",
    features: [
      "Industrial dehumidifiers",
      "Desiccant dehumidification",
      "Humidity control systems",
      "Condensation prevention",
    ],
  },
  {
    icon: Wrench,
    title: "Retrofit & Custom Projects",
    desc: "Upgrading existing HVAC infrastructure and designing bespoke ventilation solutions tailored to unique requirements.",
    features: [
      "HVAC system upgrades",
      "Energy efficiency retrofits",
      "Custom ventilation design",
      "System optimization",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive HVAC and ventilation solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <AnimateOnScroll key={s.title} delay={idx * 100}>
                <div className="group bg-card rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <s.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="link" className="p-0 h-auto text-primary font-medium">
                      Get a Quote <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <AnimateOnScroll>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and design the perfect air control solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-highlight text-navy font-semibold hover:bg-highlight/90">
                Contact Our Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </Layout>
  );
};

export default ServicesPage;
