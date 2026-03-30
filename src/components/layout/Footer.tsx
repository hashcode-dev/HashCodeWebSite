import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 md:py-24 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Hash Code
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              We engineer digital products that scale businesses globally. Premium software development and technology consulting for enterprises and ambitious startups.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/software-development" className="hover:text-blue-400 transition-colors">Software Engineering</Link></li>
              <li><Link to="/services/cloud-devops" className="hover:text-blue-400 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services/ai-ml" className="hover:text-blue-400 transition-colors">AI / ML Solutions</Link></li>
              <li><Link to="/services/data-engineering" className="hover:text-blue-400 transition-colors">Data Engineering</Link></li>
              <li><Link to="/services/legacy-modernization" className="hover:text-blue-400 transition-colors">Legacy Modernization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Insights & Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Ready to scale?</h4>
            <p className="text-slate-400 mb-6 text-sm">
              Talk to our architects about your next big project.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group">
              Book Discovery Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Hash Code Technologies & Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
