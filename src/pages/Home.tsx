import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyVentilation from "@/components/WhyVentilation";
import ClientLogos from "@/components/ClientLogos";
import Promise from "@/components/Promise";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fan, ChefHat, Factory, PipetteIcon, Droplets, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Fan, title: "HVAC Systems & AHUs", desc: "Complete heating, ventilation, and air conditioning solutions." },
  { icon: ChefHat, title: "Kitchen Ventilation", desc: "Specialized exhaust systems for commercial kitchens." },
  { icon: Factory, title: "Industrial Fans & Blowers", desc: "High-performance air movement equipment." },
  { icon: PipetteIcon, title: "Ducting & Air Distribution", desc: "Custom-fabricated ducting systems." },
  { icon: Droplets, title: "Dehumidification Solutions", desc: "Advanced moisture control systems." },
  { icon: Wrench, title: "Retrofit & Custom Projects", desc: "Upgrading existing HVAC infrastructure." },
];

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <WhyVentilation />
      
      {/* Services Overview */}
      <section className="section-padding bg-background">
        <AnimateOnScroll>
          <div className="container-narrow text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            <h2 className="section-title mt-2">Comprehensive Air Control Services</h2>
            <p className="section-subtitle">
              From design and engineering to installation and maintenance, we deliver end-to-end HVAC and ventilation solutions.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <AnimateOnScroll key={s.title} delay={idx * 100}>
              <div className="group bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll delay={600}>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      <Promise />
      <ClientLogos />
      
      {/* CTA Section */}
      <section className="section-padding bg-background">
        <AnimateOnScroll>
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Ready to Improve Your Air Quality?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team today for a consultation and discover how we can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-highlight text-navy font-semibold hover:bg-highlight/90">
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:9880013779">
                <Button size="lg" variant="outline">Call Us: 9880013779</Button>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </Layout>
  );
};

export default Home;
