import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-950 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Engineering the future of business.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Hash Code Technologies is a premium software product development and technology services firm. We partner with visionary leaders to build scalable, secure, and innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To bridge the gap between complex business challenges and elegant technological solutions. We believe in engineering excellence, transparent communication, and delivering measurable ROI for every client.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're a Fortune 500 enterprise modernizing legacy systems or a high-growth startup launching an MVP, our dedicated teams provide the architectural maturity and velocity you need to succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-slate-600 font-medium">Engineers</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600 font-medium">Countries Served</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-slate-600 font-medium">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to build something great?</h2>
          <Button size="xl" variant="premium" asChild>
            <Link to="/contact">Talk to our Leadership Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
