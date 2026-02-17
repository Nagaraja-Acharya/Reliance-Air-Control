import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/Reliance Air Control_Logo.png" alt="Reliance Air Control" className="h-12 w-auto" />
              <div className="leading-tight">
                <span className="font-heading font-bold text-base text-navy-foreground">Reliance Air Control</span>
                <span className="block text-xs text-navy-foreground/60">HVAC & Ventilation Experts</span>
              </div>
            </div>
            <p className="text-sm text-navy-foreground/60 leading-relaxed">
              A trusted name in HVAC & ventilation engineering, delivering
              excellence across commercial and industrial sectors since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Why Us", href: "/why-us" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-highlight transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60">
              {[
                "HVAC Systems & AHUs",
                "Kitchen Ventilation",
                "Industrial Fans",
                "Ducting Solutions",
                "Dehumidification",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-highlight" />
                G/F – 9/10, 14th E Cross, Agrahara Dasarahalli, Bengaluru – 560079
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-highlight" />
                <a href="tel:9880013779" className="hover:text-highlight transition-colors">9880013779</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-highlight" />
                <a href="mailto:relianceaircontrol@gmail.com" className="hover:text-highlight transition-colors text-xs">
                  relianceaircontrol@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-navy-foreground/10 py-4 px-4">
        <p className="text-center text-xs text-navy-foreground/40">
          © {new Date().getFullYear()} Reliance Air Control. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
