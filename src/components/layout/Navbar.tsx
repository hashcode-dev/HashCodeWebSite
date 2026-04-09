import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Company", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-sm h-20 border-b border-outline-variant/10"
          : "bg-transparent h-24"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface font-headline">
            Hash Code <span className="text-primary italic">Technologies</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 font-label font-bold tracking-wider uppercase text-xs">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact">
            <button className="px-5 py-2.5 text-sm font-bold text-on-surface hover:text-primary transition-all rounded-lg">
              Contact Us
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-primary text-on-primary px-6 py-2.5 text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all">
              Book Consultation
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface fixed top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto border-t border-outline-variant/10">
          <div className="flex flex-col px-8 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl font-headline font-bold text-on-surface"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-4 text-lg font-bold text-on-surface border border-outline-variant/20 rounded-xl hover:bg-surface-container-low transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-primary text-on-primary py-4 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container hover:text-on-primary-container transition-all">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
