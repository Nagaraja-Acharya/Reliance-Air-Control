import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { CheckCircle, Target, Eye, Award, Users, Lightbulb } from "lucide-react";

const highlights = [
  "Over three decades of HVAC & ventilation expertise",
  "Serving commercial, industrial & institutional sectors",
  "End-to-end solutions from design to maintenance",
  "Trusted by 1000+ satisfied clients nationwide",
];

const values = [
  { icon: Award, title: "Quality First", desc: "Uncompromising standards in every project we deliver" },
  { icon: Users, title: "Customer Focus", desc: "Building lasting relationships through exceptional service" },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing cutting-edge technology and best practices" },
];

const AboutUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            About Reliance Air Control
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Pioneering air control solutions with engineering excellence since 1990
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="section-title mt-2">Pioneering Air Control Solutions Since 1990</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Reliance Air Control is a Bengaluru-based HVAC and ventilation engineering company with over 30 years of hands-on experience. We specialize in designing, manufacturing, and installing comprehensive air control systems for commercial kitchens, industrial facilities, hospitals, IT parks, and more.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team of experienced engineers combines deep technical knowledge with a commitment to quality, ensuring every project meets the highest standards of performance, energy efficiency, and regulatory compliance.
                </p>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "30+", label: "Years Experience" },
                    { value: "1000+", label: "Happy Clients" },
                    { value: "10K+", label: "Projects Completed" },
                    { value: "500+", label: "Active Installations" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-muted-foreground text-sm italic">
                    "Committed to delivering world-class air control solutions with integrity and precision."
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most trusted partner in air control engineering, setting industry benchmarks for quality, innovation, and customer satisfaction while contributing to healthier, more sustainable built environments.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional HVAC and ventilation solutions through engineering excellence, continuous innovation, and unwavering commitment to quality—ensuring optimal air quality, energy efficiency, and comfort for every client.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Engineering Expertise */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expertise</span>
              <h2 className="section-title mt-2">Engineering Excellence</h2>
              <p className="section-subtitle">
                Our team brings decades of specialized knowledge across multiple domains
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HVAC System Design & Engineering",
              "Computational Fluid Dynamics (CFD)",
              "Energy Efficiency Optimization",
              "Industrial Ventilation Systems",
              "Clean Room Technology",
              "Fire & Smoke Control Systems",
            ].map((expertise, idx) => (
              <AnimateOnScroll key={expertise} delay={idx * 100}>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">{expertise}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 mt-2">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every decision and shape our relationships with clients and partners
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <AnimateOnScroll key={v.title} delay={idx * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
