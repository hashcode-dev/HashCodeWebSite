import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest font-body text-sm leading-relaxed">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 max-w-7xl mx-auto px-8 py-20">
        <div className="col-span-2">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-headline mb-6">
            Hash Code <span className="text-primary italic">Technologies</span>
          </div>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8 max-w-xs">
            Precision engineering for global enterprise. Delivering resilient software architectures that power tomorrow's world.
          </p>
          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer border border-outline-variant/10">
              <span className="material-symbols-outlined text-sm">language</span>
            </span>
            <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer border border-outline-variant/10">
              <span className="material-symbols-outlined text-sm">share</span>
            </span>
            <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer border border-outline-variant/10">
              <span className="material-symbols-outlined text-sm">mail</span>
            </span>
          </div>
        </div>

        <div>
          <h5 className="font-label font-bold text-on-surface text-xs mb-6 uppercase tracking-widest">Solutions</h5>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Software Development</Link></li>
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Enterprise Apps</Link></li>
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">SaaS Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label font-bold text-on-surface text-xs mb-6 uppercase tracking-widest">Tech</h5>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">AI & ML</Link></li>
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Cloud Systems</Link></li>
            <li><Link to="/services" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Data Engineering</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label font-bold text-on-surface text-xs mb-6 uppercase tracking-widest">Company</h5>
          <ul className="space-y-4">
            <li><Link to="/case-studies" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Success Stories</Link></li>
            <li><Link to="/about" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Our Mission</Link></li>
            <li><Link to="/careers" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label font-bold text-on-surface text-xs mb-6 uppercase tracking-widest">Legal</h5>
          <ul className="space-y-4">
            <li><Link to="/privacy" className="text-on-surface-variant text-sm hover:text-primary transition-colors font-medium">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-12">
        <p className="text-on-surface-variant/60 text-xs text-center border-t border-outline-variant/10 pt-8 font-medium">
          © {new Date().getFullYear()} Hash Code Technologies. Precision Engineering for Global Enterprise.
        </p>
      </div>
    </footer>
  );
}
