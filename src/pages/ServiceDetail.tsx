import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Server, Code, Workflow, Zap } from "lucide-react";

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
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Link to="/services" className="text-blue-400 font-medium mb-6 inline-block hover:text-blue-300">
              &larr; Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {service.subtitle}
            </p>
            <Button size="xl" variant="premium" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                {service.description}
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-16">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-16">Architecture & Delivery</h2>
              <div className="bg-slate-950 p-8 rounded-3xl text-white mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Server className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">Cloud-Native Architecture</h3>
                </div>
                <p className="text-slate-400 mb-6">
                  We design systems for high availability, fault tolerance, and horizontal scalability. Our typical enterprise architecture includes:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> API Gateway & Microservices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Event-Driven Messaging (Kafka/RabbitMQ)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Distributed Caching (Redis)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Automated CI/CD Pipelines</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-8 mt-16">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is your typical delivery timeline?", a: "For an MVP, we typically deliver within 8-12 weeks. Enterprise transformations are phased over 6-18 months with continuous value delivery." },
                  { q: "How do you handle security and compliance?", a: "We integrate security at every stage (DevSecOps). We comply with SOC2, GDPR, HIPAA, and ISO 27001 standards." },
                  { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive SLA-backed support, monitoring, and continuous optimization services." }
                ].map((faq, i) => (
                  <div key={i} className="p-6 border border-slate-200 rounded-2xl">
                    <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 sticky top-32">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Business Outcomes</h3>
                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Tech Stack Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "PostgreSQL", "AWS", "Docker"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full">
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
