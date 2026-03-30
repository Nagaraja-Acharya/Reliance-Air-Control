import AnimateOnScroll from "@/components/AnimateOnScroll";

const clients = Array.from({ length: 50 }, (_, i) => ({
  name: `Client ${i + 1}`,
  logo: `/assets/Customers Logo's/Client Logo-${String(i + 1).padStart(2, "0")}.jpg`,
}));

const ClientLogos = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <AnimateOnScroll>
        <div className="container-narrow text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted By</span>
          <h2 className="section-title mt-2">Our Valued Clients</h2>
          <p className="section-subtitle">
            Proud to serve leading organizations across industries
          </p>
        </div>
      </AnimateOnScroll>

      <div className="relative">
        <div className="flex animate-scroll-left">
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-4 bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto max-w-[180px] object-contain"
              />
            </div>
          ))}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 bg-card rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
