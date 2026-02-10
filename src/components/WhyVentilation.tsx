import { Wind, Leaf, ShieldCheck, Thermometer } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const reasons = [
  {
    icon: Wind,
    title: "Clean & Fresh Air",
    desc: "Proper ventilation removes pollutants, allergens, and odours, creating healthier indoor environments for occupants.",
  },
  {
    icon: Leaf,
    title: "Energy Efficiency",
    desc: "Well-designed HVAC systems reduce energy consumption by up to 40%, significantly lowering operational costs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    desc: "Meet stringent building codes and fire-safety regulations with properly engineered air control systems.",
  },
  {
    icon: Thermometer,
    title: "Optimal Comfort",
    desc: "Maintain ideal temperature and humidity levels for maximum productivity and comfort in any environment.",
  },
];

const WhyVentilation = () => {
  return (
    <section className="section-padding bg-secondary">
      <AnimateOnScroll>
        <div className="container-narrow text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
          <h2 className="section-title mt-2">Why Proper Air Control Is Essential</h2>
          <p className="section-subtitle">
            Indoor air quality directly impacts health, productivity, and safety.
            Here's why investing in professional ventilation solutions matters.
          </p>
        </div>
      </AnimateOnScroll>
      <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, idx) => (
          <AnimateOnScroll key={r.title} delay={idx * 100}>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default WhyVentilation;
