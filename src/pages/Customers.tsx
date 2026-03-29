import Layout from "@/components/Layout";
import AnimateOnScroll from "@/components/AnimateOnScroll";


const customersWithLogos = [
  { name: "A2B", logo: "/assets/Customers Logo's/A2B-Logo-PDF-1.webp" },
  { name: "Ananya's Nana Nani Homes", logo: "/assets/clients/ananyas-nana-nani-homes-logo.jpeg" },
  { name: "Ashirvad Grand", logo: "/assets/Customers Logo's/Ashirvad Grand.webp" },
  { name: "Basaveshwara Khanavali", logo: "/assets/Customers Logo's/Basaveshwara Khanavali.webp" },
  { name: "Big Mishra Pedha", logo: "/assets/Customers Logo's/Big Mishra Pedha.webp" },
  { name: "Biriyani Zest", logo: "/assets/Customers Logo's/Biriyani Zest.webp" },
  { name: "Biriyani Zone", logo: "/assets/Customers Logo's/Biriyani Zone.webp" },
  { name: "Cockraco", logo: "/assets/clients/cockraco-logo (2).jpeg" },
  { name: "Colortone", logo: "/assets/Customers Logo's/Colortone.webp" },
  { name: "Dakshin Cafe", logo: "/assets/Customers Logo's/Dakshin Cafe.webp" },
  { name: "Fresh Catch Seafood Restaurant", logo: "/assets/clients/fresh-catch-seafood-restaurant-logo.jpeg" },
  { name: "Hari Bhavanam", logo: "/assets/clients/hari-bhavanam-logo.jpeg" },
  { name: "Hotel Bekal Palace", logo: "/assets/Customers Logo's/Hotel Bekal Palace.webp" },
  { name: "Hotel Canton", logo: "/assets/Customers Logo's/Hotel Canton.webp" },
  { name: "Hotel Hoysala", logo: "/assets/Customers Logo's/Hotel Hoysala.webp" },
  { name: "Hotel Nellai Saravana Bhavan", logo: "/assets/clients/hotel-nellai-saravana-bhava-logo.jpeg" },
  { name: "Hotel Sipayi", logo: "/assets/Customers Logo's/Hotel Sipayi.webp" },
  { name: "Kakal Kai Ruchi", logo: "/assets/Customers Logo's/Kakal Kai Ruchi.webp" },
  { name: "Kamudhenu Veg", logo: "/assets/Customers Logo's/Kamudhenu Veg.webp" },
  { name: "Kimane Golf Village Pvt Ltd", logo: "/assets/Customers Logo's/Kimane Golf Village Pvt Ltd.webp" },
  { name: "Kings Club", logo: "/assets/Customers Logo's/Kings Club.webp" },
  { name: "Konark Vegetarian", logo: "/assets/Customers Logo's/Konark Vegetarian.webp" },
  { name: "Krishna Cafe", logo: "/assets/Customers Logo's/Krishna Cafe.webp" },
  { name: "Krishna Kutera", logo: "/assets/Customers Logo's/Krishna Kutera.webp" },
  { name: "Madhuram Cafe", logo: "/assets/Customers Logo's/Madhuram Cafe.webp" },
  { name: "MTR", logo: "/assets/clients/mtr-logo.jpeg" },
  { name: "Nachiyar Cafe", logo: "/assets/Customers Logo's/Nachiyar Cafe.webp" },
  { name: "Nithya Amirtham", logo: "/assets/clients/nithya-amirtham.jpeg" },
  { name: "Nutty Fruity", logo: "/assets/Customers Logo's/Nutty Fruity.webp" },
  { name: "Park View Restaurant", logo: "/assets/Customers Logo's/Park View Restaurant.webp" },
  { name: "Rajathadri Royal Inn", logo: "/assets/Customers Logo's/Rajathadri Royal Inn.webp" },
  { name: "Royal Aatithya", logo: "/assets/Customers Logo's/Royal Aatithya.webp" },
  { name: "Sampada Group", logo: "/assets/Customers Logo's/Sampada Group.webp" },
  { name: "Sangam Sweets", logo: "/assets/Customers Logo's/Sangam Sweets.webp" },
  { name: "Shree Anandhaas", logo: "/assets/clients/shree-anandhaas-logo.jpeg" },
  { name: "Shree Muthahalli Veg", logo: "/assets/Customers Logo's/Shree Muthahalli Veg.webp" },
  { name: "Shiva Industries", logo: "/assets/Customers Logo's/Shiva Industries.webp" },
  { name: "Skanda Cafe", logo: "/assets/Customers Logo's/Skanda Cafe.webp" },
  { name: "Sree Annapoorna Gowrishankar", logo: "/assets/clients/sree-annapoorna-gowrishankar-logo.jpeg" },
  { name: "Train Theme Restaurant", logo: "/assets/Customers Logo's/Train Theme Restaurant.webp" },
  { name: "Udupi Aradhya", logo: "/assets/Customers Logo's/Udupi Aradhya.webp" },
  { name: "Uni Fresh Foods", logo: "/assets/Customers Logo's/Uni Fresh Foods.webp" },
  { name: "Vidyarthi Bhavan", logo: "/assets/Customers Logo's/vidyarthi_bhavan.webp" },
];

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
                  {[...customersWithLogos.slice(0, 11), ...customersWithLogos.slice(0, 11)].map((customer, i) => (
                    <div key={`row1-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - scrolls right */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-right gap-6">
                  {[...customersWithLogos.slice(11, 22), ...customersWithLogos.slice(11, 22)].map((customer, i) => (
                    <div key={`row2-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 - scrolls left */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-left gap-6">
                  {[...customersWithLogos.slice(22, 33), ...customersWithLogos.slice(22, 33)].map((customer, i) => (
                    <div key={`row3-${i}`} className="flex-shrink-0 w-40 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <img src={customer.logo} alt={customer.name} className="h-16 w-full object-contain" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 4 - scrolls right */}
              <div className="relative flex overflow-hidden">
                <div className="flex animate-scroll-right gap-6">
                  {[...customersWithLogos.slice(33), ...customersWithLogos.slice(33)].map((customer, i) => (
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
