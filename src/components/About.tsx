import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const highlights = [
  "Over three decades of HVAC & ventilation expertise",
  "Serving commercial, industrial & institutional sectors",
  "End-to-end solutions from design to maintenance",
  "Trusted by 1000+ satisfied clients nationwide",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="section-title mt-2">
                Pioneering Air Control Solutions Since 1990
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reliance Air Control is a Bengaluru-based HVAC and ventilation
                engineering company with over 30 years of hands-on experience.
                We specialize in designing, manufacturing, and installing
                comprehensive air control systems for commercial kitchens,
                industrial facilities, hospitals, IT parks, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of experienced engineers combines deep technical
                knowledge with a commitment to quality, ensuring every project
                meets the highest standards of performance, energy efficiency,
                and regulatory compliance.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Read More About Us
              </Button>
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
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground text-sm italic">
                  "Committed to delivering world-class air control solutions with
                  integrity and precision."
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
