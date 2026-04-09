import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed/20 rounded-full blur-[80px] -ml-24 -mb-24"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-8">
              <span className="innovation-pulse"></span>
              <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">About Hash Code</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
              Engineering the <span className="text-primary italic">future</span> of business.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Hash Code Technologies is a premium software product development and technology services firm. We partner with visionary leaders to build scalable, secure, and innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-6">Our Mission</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
                To bridge the gap between complex business challenges and elegant technological solutions. We believe in engineering excellence, transparent communication, and delivering measurable ROI for every client.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Whether you're a Fortune 500 enterprise modernizing legacy systems or a high-growth startup launching an MVP, our dedicated teams provide the architectural maturity and velocity you need to succeed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                <div className="font-headline text-4xl font-extrabold text-primary mb-2">10+</div>
                <div className="text-on-surface-variant font-label text-sm font-bold uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                <div className="font-headline text-4xl font-extrabold text-tertiary mb-2">150+</div>
                <div className="text-on-surface-variant font-label text-sm font-bold uppercase tracking-wider">Engineers</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                <div className="font-headline text-4xl font-extrabold text-secondary mb-2">20+</div>
                <div className="text-on-surface-variant font-label text-sm font-bold uppercase tracking-wider">Countries Served</div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl text-center border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                <div className="font-headline text-4xl font-extrabold text-primary mb-2">95%</div>
                <div className="text-on-surface-variant font-label text-sm font-bold uppercase tracking-wider">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="hero-gradient rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary-fixed to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="font-headline font-extrabold text-4xl lg:text-5xl mb-8 tracking-tight">Ready to build something great?</h2>
              <p className="text-on-primary-container text-xl leading-relaxed mb-10">Join the innovative companies that trust Hash Code Technologies.</p>
              <Link to="/contact">
                <button className="bg-tertiary text-on-tertiary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">Talk to our Leadership Team</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
