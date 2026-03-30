import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const customersWithLogos = Array.from({ length: 50 }, (_, i) => ({
  name: `Client ${i + 1}`,
  logo: `/assets/Customers Logo's/Client Logo-${String(i + 1).padStart(2, "0")}.jpg`,
}));

const Customers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy/90">
        <div className="container-narrow text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Our Valued Customers
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Trusted by leading businesses across South India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { value: "1000+", label: "Happy Clients" },
                { value: "5", label: "States Served" },
                { value: "30+", label: "Cities Covered" },
                { value: "10K+", label: "Projects Delivered" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-card rounded-lg p-6 border border-border">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Customer Logos Marquee */}
          <AnimateOnScroll>
            <div className="space-y-6 overflow-hidden">
              {/* Row 1 - scrolls left */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-left gap-6">
                  {[...customersWithLogos.slice(0, 13), ...customersWithLogos.slice(0, 13)].map((customer, i) => (
                    <div key={`row1-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - scrolls right */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-right gap-6">
                  {[...customersWithLogos.slice(13, 26), ...customersWithLogos.slice(13, 26)].map((customer, i) => (
                    <div key={`row2-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 - scrolls left */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-left gap-6">
                  {[...customersWithLogos.slice(26, 38), ...customersWithLogos.slice(26, 38)].map((customer, i) => (
                    <div key={`row3-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 4 - scrolls right */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-right gap-6">
                  {[...customersWithLogos.slice(38), ...customersWithLogos.slice(38)].map((customer, i) => (
                    <div key={`row4-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy/90">
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Join Our Growing Family
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the same quality and reliability that our customers trust. Let's discuss your HVAC needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-highlight text-navy font-semibold px-8 py-3 rounded-lg hover:bg-highlight/90 transition-colors"
            >
              Get in Touch
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </Layout>
  );
};

export default Customers;
