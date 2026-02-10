import AnimateOnScroll from "@/components/AnimateOnScroll";

const clients = [
  { name: "A2B Veg Restaurant", logo: "/assets/clients/a2b-veg-restaurant-logo.jpeg" },
  { name: "Anand Sweets & Savouries", logo: "/assets/clients/anand-sweets-savouries-logo.jpeg" },
  { name: "Ananyas Nana Nani Homes", logo: "/assets/clients/ananyas-nana-nani-homes-logo.jpeg" },
  { name: "Biriyani Zone", logo: "/assets/clients/biriyani-zone-logo.jpeg" },
  { name: "Biryani Zest", logo: "/assets/clients/biryani-zest-logo.jpeg" },
  { name: "Cockraco", logo: "/assets/clients/cockraco-logo (2).jpeg" },
  { name: "Fresh Catch Seafood Restaurant", logo: "/assets/clients/fresh-catch-seafood-restaurant-logo.jpeg" },
  { name: "Hari Bhavanam", logo: "/assets/clients/hari-bhavanam-logo.jpeg" },
  { name: "Hotel Nellai Saravana Bhava", logo: "/assets/clients/hotel-nellai-saravana-bhava-logo.jpeg" },
  { name: "MTR", logo: "/assets/clients/mtr-logo.jpeg" },
  { name: "Nithya Amirtham", logo: "/assets/clients/nithya-amirtham.jpeg" },
  { name: "Shree Anandhaas", logo: "/assets/clients/shree-anandhaas-logo.jpeg" },
  { name: "Sree Annapoorna Gowrishankar", logo: "/assets/clients/sree-annapoorna-gowrishankar-logo.jpeg" },
  { name: "Sree Annapoorna Kitchen Equipment", logo: "/assets/clients/sree-annapoorna-kitchen-equipment-logo.jpeg" },
];

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
        <div className="flex animate-scroll">
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
