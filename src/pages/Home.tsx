import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/30 rounded-full blur-[120px] -mr-96 -mt-96"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tertiary-fixed/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-8">
              <span className="innovation-pulse"></span>
              <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">Global Engineering Partner</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.1] text-on-surface mb-8 tracking-tight">
              Engineering digital products that <span className="text-primary italic">scale</span> businesses globally.
            </h1>
            <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              High-precision product development for enterprise leaders and hyper-growth startups. We don't just build software; we architect the core of your digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                  Book Free Consultation
                </button>
              </Link>
              <Link to="/case-studies">
                <button className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all border border-outline-variant/10">
                  Explore Case Studies
                </button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl glass-panel p-2">
              <img alt="Modern Software Engineering Office" className="rounded-xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcIhGxx_XUp-jfmJVwFIJfHQhq7Uvd5jU4pVpwmQgxFi0KvCM9KF5U4imR9Mzqvb5wCnCCKODX5WbM2wVjDRNeEImZun6pOMTphQdzvhFXr8l3qNbJc_Kn6Ho1ajEtUOv_Br0nNzyCACr-l8p7qe8sb3tJlbsFvNWmvfSegBoVnBMTnZGA0Yeq2fDUwxvSgg3Xmfx8xjTAfsxt8dbzXfFEEJ4tKLzF8jDo4a4Gs58ZVRoXtnOEqQZsioxV_Ke-PbisXMlNqfJrP4o"/>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/10 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-tertiary text-3xl">terminal</span>
                <span className="font-headline font-bold text-2xl text-on-surface">500+</span>
              </div>
              <p className="text-xs font-label font-bold uppercase tracking-wider text-outline">Production Shipments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Banner */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center font-label font-bold text-xs tracking-[0.2em] text-outline mb-12 uppercase">Empowering Leaders at Global Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-extrabold text-on-surface/80">NEXUS</span>
            <span className="text-2xl font-extrabold text-on-surface/80">LUMINA</span>
            <span className="text-2xl font-extrabold text-on-surface/80">VERTEX</span>
            <span className="text-2xl font-extrabold text-on-surface/80">QUANTUM</span>
            <span className="text-2xl font-extrabold text-on-surface/80">VELOCITY</span>
          </div>
        </div>
      </section>

      {/* Service Ecosystem */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5">
              <h2 className="font-headline font-bold text-4xl lg:text-5xl text-on-surface mb-6 tracking-tight">Comprehensive Product Ecosystems</h2>
              <div className="w-20 h-1.5 bg-tertiary-fixed-dim rounded-full mb-8"></div>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-xl text-on-surface-variant leading-relaxed">We provide specialized engineering units that integrate seamlessly with your vision, focusing on high-load architectures and intelligent data systems.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">developer_mode</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">Software Product Development</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Full-cycle application engineering using React, Node, Python, and Go for enterprise resilience.</p>
              <Link to="/services" className="text-primary font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">AI & Machine Learning</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Integrating generative AI and predictive modeling to automate complex business logic.</p>
              <Link to="/services" className="text-tertiary font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">cloud_done</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">Cloud & DevOps</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">AWS/Azure infrastructure optimization with zero-downtime CI/CD pipelines.</p>
              <Link to="/services" className="text-secondary font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
            {/* Card 4 */}
            <div className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary-container/20 flex items-center justify-center text-on-primary-fixed-variant mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4">Data Engineering</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Designing high-performance data lakes and real-time processing pipelines.</p>
              <Link to="/services" className="text-on-primary-fixed-variant font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-label font-bold tracking-[0.2em] text-primary mb-4 block uppercase">Our Methodology</span>
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">The Engineering Lifecycle</h2>
            <p className="text-on-surface-variant">A deterministic approach to software excellence, moving from abstract ideas to global-scale deployment.</p>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Line decoration */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block -translate-y-12"></div>
            <div className="relative z-10 bg-surface-container-low pr-4 w-full md:w-1/4">
              <div className="w-12 h-12 bg-primary text-on-primary rounded-lg flex items-center justify-center font-headline font-bold text-xl mb-6 shadow-lg">01</div>
              <h4 className="font-headline font-bold text-lg mb-2">Discovery</h4>
              <p className="text-sm text-on-surface-variant">Defining business objectives, user personas, and technical feasibility.</p>
            </div>
            <div className="relative z-10 bg-surface-container-low px-4 w-full md:w-1/4">
              <div className="w-12 h-12 bg-primary text-on-primary rounded-lg flex items-center justify-center font-headline font-bold text-xl mb-6 shadow-lg">02</div>
              <h4 className="font-headline font-bold text-lg mb-2">Architecture</h4>
              <p className="text-sm text-on-surface-variant">Designing scalable systems, microservices, and database schemas.</p>
            </div>
            <div className="relative z-10 bg-surface-container-low px-4 w-full md:w-1/4">
              <div className="w-12 h-12 bg-primary text-on-primary rounded-lg flex items-center justify-center font-headline font-bold text-xl mb-6 shadow-lg">03</div>
              <h4 className="font-headline font-bold text-lg mb-2">MVP Launch</h4>
              <p className="text-sm text-on-surface-variant">Agile development cycles to ship the core product version fast.</p>
            </div>
            <div className="relative z-10 bg-surface-container-low pl-4 w-full md:w-1/4">
              <div className="w-12 h-12 bg-tertiary text-on-tertiary rounded-lg flex items-center justify-center font-headline font-bold text-xl mb-6 shadow-lg">04</div>
              <h4 className="font-headline font-bold text-lg mb-2">Global Scale</h4>
              <p className="text-sm text-on-surface-variant">Continuous monitoring, load optimization, and feature expansion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Case Studies</h2>
              <p className="text-on-surface-variant max-w-xl">Proven results for the world's most demanding enterprises.</p>
            </div>
            <Link to="/case-studies" className="text-primary font-bold hover:underline underline-offset-4">View All Success Stories</Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Case Study 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <div className="aspect-video overflow-hidden">
                <img alt="Fintech Platform Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7NrsNXTdaeNpA10y0bRGbBUEqXPwlE7QrOS5CvkTvS0r0bQPaY4V3Xlh2Jz985hWgW4HYh6yoEs-J_gFxERWX9UtNrGybP6DPHUbe1Uyp7oEl6sTFH65g99T3txDHiIZJu79neWNth9qcK1IpbcWRDIy1PrSd-k9AFa5sZ0zOQLJHTjS1JEXyq6M2n5m2jMRJ2wbP5nBv6VbZ608fDsFalRGEWPocU0qbQtKv0Z0cpWeJAMOZMIdTs89Mf0_AyV_BvzIs--VFVTM"/>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase">Fintech</span>
                  <span className="text-outline text-xs font-medium">Enterprise Banking Solution</span>
                </div>
                <h3 className="font-headline font-bold text-3xl mb-4">NEXUS Financial Infrastructure</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Modernizing legacy core banking systems for a Tier-1 financial institution, handling 50k+ transactions per second with zero latency.</p>
                <div className="flex items-center gap-12 border-t border-outline-variant/10 pt-8">
                  <div>
                    <div className="text-3xl font-headline font-extrabold text-primary">50%</div>
                    <div className="text-xs font-label font-bold text-outline uppercase tracking-wider">Latency Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-headline font-extrabold text-primary">99.99%</div>
                    <div className="text-xs font-label font-bold text-outline uppercase tracking-wider">Uptime Reliability</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Case Study 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-surface-container-low border border-outline-variant/10">
              <div className="aspect-video overflow-hidden">
                <img alt="AI Logistics Visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWtXwvdHb1JBUrd7fbRscBttQ3wp6B-diM8DyEAxvMytp7hIHYDDVuUrtVTQLLoaYqUEm9kjYROLX8OYfrCJGIdWKJkQ2KXAKfOYCQQoItqCAa7Wldbvi_NAhQD9s_nvPL0xZWIgrROnYMsYlxeMAX5P76TEN_qsGUYctKQQfAvDRS2CQuE73YrgM7nTparxWBBdnYwRIdnPeH5mcxZ9KOoiHdDg7-ElNjJDGsW91DB2-pdm1ymV2jNsOMWe43xpWs1iXQDwf6e9I"/>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs font-bold rounded-full uppercase">AI & Logistics</span>
                  <span className="text-outline text-xs font-medium">Smart Supply Chain</span>
                </div>
                <h3 className="font-headline font-bold text-3xl mb-4">LUMINA Predictive Routing</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Implementing a custom AI engine for global supply chain optimization, reducing carbon footprint and delivery times.</p>
                <div className="flex items-center gap-12 border-t border-outline-variant/10 pt-8">
                  <div>
                    <div className="text-3xl font-headline font-extrabold text-tertiary">30%</div>
                    <div className="text-xs font-label font-bold text-outline uppercase tracking-wider">Fuel Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-headline font-extrabold text-tertiary">14 Days</div>
                    <div className="text-xs font-label font-bold text-outline uppercase tracking-wider">Dev to Production</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-surface-container-low relative">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <span className="material-symbols-outlined text-6xl text-primary/20 mb-8">format_quote</span>
          <blockquote className="font-headline font-bold text-3xl lg:text-4xl leading-tight text-on-surface mb-10 italic">
            "Hash Code didn't just write code; they transformed how we think about our entire product stack. Their architectural decisions saved us months of rework during our Series B scale-up."
          </blockquote>
          <div className="flex flex-col items-center">
            <img alt="CTO Portrait" className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzleLR8dcHWcqMwDEADT9vokCiXDUlYYjW2AuBirMyDPbAjlqlm3k5TdkT3n4DfyL-Ns4tD7hGGFMjNqA8NSHX7aWocZa4o2Ym07g4Db8T10R0eJzXw4h7iorlssKxmTKEJ8LicJbLJvyV1pabskRLXzYKAaYPXN45FBkgTrcrus9wsl_B5_YBlznBrRN5IIO0MDFRHK-6jM2MTODRc34r2h18EzsEPkISL4I0xgKEtu2u_UvoPDB4KU8jsUviyX31r825PVCk2jE"/>
            <p className="font-bold text-on-surface">David Chen</p>
            <p className="text-on-surface-variant text-sm font-medium">CTO, Vertex Global Systems</p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Engagement Models</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Flexible partnership frameworks designed to align with your organization's unique operational needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-4xl">groups</span>
              </div>
              <h4 className="font-headline font-extrabold text-xl mb-4">Dedicated Team</h4>
              <p className="text-sm text-on-surface-variant mb-8">A specialized squad of engineers, designers, and PMs focused exclusively on your roadmap.</p>
              <ul className="space-y-3 text-left w-full text-sm mb-10">
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> 100% Resource Allocation</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Direct Slack/Jira Integration</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Long-term Scalability</li>
              </ul>
              <button className="mt-auto w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">Select Model</button>
            </div>
            <div className="p-10 rounded-3xl bg-primary text-on-primary shadow-2xl scale-105 z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-on-primary/10 flex items-center justify-center text-on-primary mb-8">
                <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
              </div>
              <h4 className="font-headline font-extrabold text-xl mb-4 text-white">Project-Based</h4>
              <p className="text-sm text-on-primary/80 mb-8">Fixed-scope engineering for specific milestones or new product launches.</p>
              <ul className="space-y-3 text-left w-full text-sm mb-10">
                <li className="flex items-center gap-2 text-on-primary/90"><span className="material-symbols-outlined text-sm">check_circle</span> Guaranteed Timelines</li>
                <li className="flex items-center gap-2 text-on-primary/90"><span className="material-symbols-outlined text-sm">check_circle</span> Budget Predictability</li>
                <li className="flex items-center gap-2 text-on-primary/90"><span className="material-symbols-outlined text-sm">check_circle</span> Managed MVP Execution</li>
              </ul>
              <button className="mt-auto w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all">Get Quote</button>
            </div>
            <div className="p-10 rounded-3xl bg-surface border border-outline-variant/10 hover:border-primary/30 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-4xl">person_add</span>
              </div>
              <h4 className="font-headline font-extrabold text-xl mb-4">Staff Augmentation</h4>
              <p className="text-sm text-on-surface-variant mb-8">Inject specialized talent (AI expert, DevOps lead) into your existing development unit.</p>
              <ul className="space-y-3 text-left w-full text-sm mb-10">
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Vetted Talent in 48 Hours</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Specialized Expertise</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Month-to-month Flexibility</li>
              </ul>
              <button className="mt-auto w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">Request Talent</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="hero-gradient rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary-fixed to-transparent"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="font-headline font-extrabold text-5xl mb-8 tracking-tight">Launch Your MVP Fast. Scale to Millions Faster.</h2>
                <p className="text-on-primary-container text-xl leading-relaxed mb-10">Don't let technical debt slow your growth. Partner with an engineering firm that understands the business of technology.</p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact">
                    <button className="bg-tertiary text-on-tertiary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">Talk to CTO</button>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQG0oJxNSwEE1f-RdY3-cb398ILDKrTwLrnIwAdWkNrSzIwLPIka070RwNh83RwRW4-53ItKSMLTswlBDWKX9t5EF0piVgAWtJzYXWVqmf0rFOso4LFA-E_WZ61wBuxJdDzlZa3NuAefIrTVrk8yb6W-MoOqgfxLhM8aW3AWd7i6ArAJm2iuKuDgKRhNpJZIBs8dCZu80n1FCrb_bsaxmeiYgSuGKiqrooHJttgvfdrlBjfrdxGGcBnLYjqlvNFNC9jy8Pd3WFZNU"/>
                      <img className="w-10 h-10 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOIoi4C7dPX6im0zYUikYesw6xHtRBwtVgWl2V6vJ2bA27lftJe7AXfcQRGoF0YXQLJFsOTGIBXHu0kbaRjInsA3NDJ2nALZ6l1DiGqYwTPZXobkNh0Iph1sVx52rMQ49sepb20pNCs5VdX9l2kcb9NxFhnYL_X4LeTLvd-KUGQ_cUrFEmdxWWJfbFuYCty5mZ5KTF4OoWPGRZVfcUqTG9PUg8gFGG8VZC2IIBsFsCcP4tWaMwsATFrC2WAFMnbtfjF02ZKrskg_o"/>
                      <img className="w-10 h-10 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjjwsjIiHo5VW8F1j2XC_OEjRGzcMtxU39mPK-ypr-XjIj1QaxSfBOk1W1WqW5Ohv6CauIkFhnBVmLWYTXbVyiQILGapwZWGrlqfcovzZX4nId2nDHAkq991ng9qTW_KGI1xydVp-BaUWm6k3qHq462wEcZpGGAYegOfUsZZQimldhCX_0vW3pPGpJ9cIMNqASgngClw_E03EobLiLyWDf0rsW3KVBVxfV3C8xRPaiN_aMMcs5KCB4Zp9jPIacbAzaAN62mGCjdLY"/>
                    </div>
                    <span className="text-sm font-medium text-white/80">Joined by 200+ founders this month</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-end">
                <div className="w-full max-w-sm glass-panel bg-white/10 p-8 rounded-3xl border border-white/20">
                  <h4 className="text-white font-bold text-xl mb-6">Expert Consultation</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="material-symbols-outlined text-tertiary-fixed">schedule</span>
                      <span>30-minute discovery call</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="material-symbols-outlined text-tertiary-fixed">architecture</span>
                      <span>Architecture whiteboarding</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="material-symbols-outlined text-tertiary-fixed">payments</span>
                      <span>Project timeline & cost estimate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
