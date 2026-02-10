import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Wind, Leaf, ShieldCheck, Thermometer, Award, Headphones, IndianRupee, Clock, Settings, CheckCircle } from "lucide-react";

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

const promises = [
  { icon: Award, title: "Experienced Engineers", desc: "Skilled team with decades of HVAC expertise" },
  { icon: Headphones, title: "Quick After-Sales Support", desc: "Responsive service and maintenance assistance" },
  { icon: IndianRupee, title: "Cost-Effective Solutions", desc: "Optimized designs that maximize your ROI" },
  { icon: Clock, title: "On-Time Delivery", desc: "Projects completed within committed timelines" },
  { icon: Settings, title: "Customized Designs", desc: "Tailor-made solutions for unique requirements" },
];

const qualityStandards = [
  "ISO-certified manufacturing processes",
  "Rigorous quality control at every stage",
  "Compliance with national & international standards",
  "Use of premium-grade materials",
  "Comprehensive testing before deployment",
  "Detailed documentation & handover",
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Why Choose Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Understanding the importance of proper air control and why we're your best partner
          </p>
        </div>
      </section>

      {/* Why Proper Air Control Matters */}
      <section className="section-padding bg-background">
        <AnimateOnScroll>
          <div className="container-narrow text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
            <h2 className="section-title mt-2">Why Proper Air Control Is Essential</h2>
            <p className="section-subtitle">
              Indoor air quality directly impacts health, productivity, and safety. Here's why investing in professional ventilation solutions matters.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => (
            <AnimateOnScroll key={r.title} delay={idx * 100}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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

      {/* Health & Safety Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Health Benefits</span>
                <h2 className="section-title mt-2">Clean Air Means Better Health</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Poor indoor air quality can lead to respiratory issues, allergies, and reduced cognitive function. Our ventilation systems ensure continuous fresh air circulation, removing harmful contaminants and maintaining optimal oxygen levels.
                </p>
                <ul className="space-y-3">
                  {[
                    "Reduces airborne disease transmission",
                    "Eliminates harmful VOCs and pollutants",
                    "Controls humidity to prevent mold growth",
                    "Improves employee productivity and well-being",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Energy Savings Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Energy Reduction</span>
                      <span className="text-sm font-bold text-primary">Up to 40%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "40%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Operational Cost Savings</span>
                      <span className="text-sm font-bold text-primary">30-35%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "35%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Carbon Footprint Reduction</span>
                      <span className="text-sm font-bold text-primary">25-30%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "30%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="section-padding bg-navy">
        <AnimateOnScroll>
          <div className="container-narrow text-center mb-12">
            <span className="text-highlight font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy-foreground mb-4 mt-2">
              Why Clients Trust Reliance Air Control
            </h2>
            <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">
              We combine technical prowess with unwavering commitment to quality and customer satisfaction.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {promises.map((p, idx) => (
            <AnimateOnScroll key={p.title} delay={idx * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 transition-colors duration-300">
                  <p.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-navy-foreground text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-navy-foreground/60">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Engineering Approach & Quality */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quality Standards</span>
              <h2 className="section-title mt-2">Our Engineering Approach</h2>
              <p className="section-subtitle">
                Every project follows our rigorous quality assurance process
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard, idx) => (
              <AnimateOnScroll key={standard} delay={idx * 100}>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">{standard}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
