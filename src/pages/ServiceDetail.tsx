import { useParams, Link } from "react-router-dom";

export default function ServiceDetail() {
  const { slug } = useParams();

  // In a real app, fetch data based on slug from CMS.
  // Mock data for demonstration.
  const service = {
    title: "Software Product Development",
    subtitle: "From concept to market-leading product.",
    description: "We engineer scalable, secure, and high-performance software products tailored to your business goals. Our agile methodology ensures rapid time-to-market while maintaining enterprise-grade quality.",
    benefits: [
      "Accelerated Time-to-Market",
      "Scalable Microservices Architecture",
      "Enterprise-Grade Security",
      "Seamless Third-Party Integrations"
    ],
    process: [
      { title: "Discovery & Architecture", desc: "Defining requirements, tech stack, and system design." },
      { title: "Agile Development", desc: "Iterative sprints with continuous delivery and feedback." },
      { title: "QA & Testing", desc: "Automated and manual testing for flawless performance." },
      { title: "Deployment & Scaling", desc: "Cloud deployment, monitoring, and continuous optimization." }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed/20 rounded-full blur-[80px] -ml-24 -mb-24"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container transition-colors mb-8">
              <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span> Back to Services
            </Link>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
              {service.subtitle}
            </p>
            <Link to="/contact">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg shadow-primary/20">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-headline font-bold text-3xl text-on-surface mb-6">Overview</h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                {service.description}
              </p>

              <h2 className="font-headline font-bold text-3xl text-on-surface mb-8 mt-16">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-high text-primary flex items-center justify-center font-headline font-bold text-xl shrink-0 border border-outline-variant/10">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-xl text-on-surface mb-2">{step.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-headline font-bold text-3xl text-on-surface mb-8 mt-16">Architecture & Delivery</h2>
              <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-3xl mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-3xl text-primary">dns</span>
                  <h3 className="font-headline font-bold text-xl text-on-surface">Cloud-Native Architecture</h3>
                </div>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  We design systems for high availability, fault tolerance, and horizontal scalability. Our typical enterprise architecture includes:
                </p>
                <ul className="space-y-4 text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> API Gateway & Microservices
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Event-Driven Messaging (Kafka/RabbitMQ)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Distributed Caching (Redis)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span> Automated CI/CD Pipelines
                  </li>
                </ul>
              </div>

              <h2 className="font-headline font-bold text-3xl text-on-surface mb-8 mt-16">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is your typical delivery timeline?", a: "For an MVP, we typically deliver within 8-12 weeks. Enterprise transformations are phased over 6-18 months with continuous value delivery." },
                  { q: "How do you handle security and compliance?", a: "We integrate security at every stage (DevSecOps). We comply with SOC2, GDPR, HIPAA, and ISO 27001 standards." },
                  { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive SLA-backed support, monitoring, and continuous optimization services." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 border border-outline-variant/10 bg-surface-container-lowest rounded-2xl">
                    <h4 className="font-headline font-bold text-on-surface mb-2">{faq.q}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 sticky top-32">
                <h3 className="font-headline font-bold text-xl text-on-surface mb-6">Business Outcomes</h3>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-xl">check_circle</span>
                      <span className="text-on-surface-variant font-medium leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-outline-variant/10">
                  <h4 className="font-headline font-bold text-on-surface mb-4">Tech Stack Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "AWS", "Docker"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-surface-container-high border border-outline-variant/10 text-on-surface-variant text-sm font-bold rounded-full">
                        {tech}
                      </span>
                    ))}
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
