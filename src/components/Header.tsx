import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-card/95 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-sm py-1.5 px-4 hidden md:block">
        <div className="container-narrow flex justify-between items-center">
          <span>Engineering Excellence in HVAC & Ventilation Since 1990</span>
          <a href="tel:9880013779" className="flex items-center gap-1.5 hover:text-highlight transition-colors">
            <Phone className="w-3.5 h-3.5" />
            9880013779
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-narrow flex items-center justify-between py-3 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">R</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-base text-foreground">
              Reliance
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Air Control
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="bg-highlight text-navy font-semibold hover:bg-highlight/90">
              Quick Enquiry
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 border-b border-border hover:text-primary transition-colors ${
                  location.pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:9880013779" className="flex items-center gap-2 text-primary font-medium text-sm py-2">
              <Phone className="w-4 h-4" /> 9880013779
            </a>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-highlight text-navy font-semibold hover:bg-highlight/90">
                Quick Enquiry
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
