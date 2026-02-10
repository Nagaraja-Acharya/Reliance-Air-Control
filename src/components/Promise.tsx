import { Award, Headphones, IndianRupee, Clock, Settings } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const promises = [
  { icon: Award, title: "Experienced Engineers", desc: "Skilled team with decades of HVAC expertise" },
  { icon: Headphones, title: "Quick After-Sales Support", desc: "Responsive service and maintenance assistance" },
  { icon: IndianRupee, title: "Cost-Effective Solutions", desc: "Optimized designs that maximize your ROI" },
  { icon: Clock, title: "On-Time Delivery", desc: "Projects completed within committed timelines" },
  { icon: Settings, title: "Customized Designs", desc: "Tailor-made solutions for unique requirements" },
];

const Promise = () => {
  return (
    <section id="why-us" className="section-padding bg-navy">
      <AnimateOnScroll>
        <div className="container-narrow text-center mb-12">
          <span className="text-highlight font-semibold text-sm uppercase tracking-wider">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-navy-foreground mb-4 mt-2">
            Why Clients Trust Reliance Air Control
          </h2>
          <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">
            We combine technical prowess with unwavering commitment to quality and
            customer satisfaction.
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
              <h3 className="font-heading font-semibold text-navy-foreground text-sm mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-navy-foreground/60">{p.desc}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Promise;
