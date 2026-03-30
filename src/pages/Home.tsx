import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, Cpu, Globe, LineChart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Trusted by Startups & Fortune 500s
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We engineer digital products that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">scale globally.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium software development and technology consulting. We transform complex enterprise challenges into elegant, high-performance solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="xl" variant="premium" asChild className="w-full sm:w-auto">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild className="w-full sm:w-auto bg-white">
                <Link to="/case-studies">Explore Case Studies</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">250+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Products Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Uptime Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$2B+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Client Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Enterprise Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">End-to-end engineering excellence.</h2>
            <p className="text-lg text-slate-600">
              From ideation to global scale, we provide the architecture, engineering, and operational maturity required to build category-defining software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="h-8 w-8 text-blue-600" />,
                title: "Software Product Engineering",
                desc: "Full-cycle custom software development using modern stacks. React, Node.js, Python, and Go.",
              },
              {
                icon: <Globe className="h-8 w-8 text-indigo-600" />,
                title: "Enterprise Application Dev",
                desc: "Scalable, secure, and compliant systems designed for complex organizational workflows.",
              },
              {
                icon: <Cpu className="h-8 w-8 text-purple-600" />,
                title: "AI & Machine Learning",
                desc: "Integrate predictive models, LLMs, and computer vision into your core business processes.",
              },
              {
                icon: <LineChart className="h-8 w-8 text-emerald-600" />,
                title: "Data Engineering",
                desc: "Robust data pipelines, warehouses, and real-time analytics infrastructure.",
              },
              {
                icon: <Shield className="h-8 w-8 text-red-600" />,
                title: "Cloud & DevOps",
                desc: "AWS, Azure, and GCP architecture. CI/CD automation, containerization, and infrastructure as code.",
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-600" />,
                title: "Legacy Modernization",
                desc: "Transform monolithic legacy systems into agile, cloud-native microservices.",
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="mb-6 p-3 bg-slate-50 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Enterprise Technology Stack</h2>
            <p className="text-lg text-slate-600">
              We build with modern, scalable, and secure technologies trusted by the world's leading organizations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock logos for tech stack */}
            {["React", "Node.js", "Python", "Go", "AWS", "Azure", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center font-bold text-slate-400">
                  {tech[0]}
                </div>
                <span className="text-sm font-medium text-slate-500">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Engineering Lifecycle & Delivery</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our battle-tested delivery methodology ensures transparency, predictability, and rapid time-to-market without compromising on quality.
              </p>
              <div className="space-y-6">
                {[
                  { title: "1. Discovery & Architecture", desc: "We align business goals with technical feasibility, creating a robust blueprint." },
                  { title: "2. Agile Sprints", desc: "Iterative development with continuous integration and delivery (CI/CD)." },
                  { title: "3. QA Automation", desc: "Rigorous automated testing for security, performance, and reliability." },
                  { title: "4. Scale & Optimize", desc: "Cloud deployment, monitoring, and continuous performance tuning." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Engagement Models</h3>
              <div className="space-y-4">
                <div className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors cursor-pointer">
                  <h4 className="font-bold text-slate-900 mb-2">Dedicated Teams</h4>
                  <p className="text-sm text-slate-600">Scale your engineering capacity with our pre-vetted senior developers.</p>
                </div>
                <div className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors cursor-pointer">
                  <h4 className="font-bold text-slate-900 mb-2">Project-Based Delivery</h4>
                  <p className="text-sm text-slate-600">End-to-end product development with fixed scope and timeline.</p>
                </div>
                <div className="p-6 border border-slate-200 rounded-2xl hover:border-blue-500 transition-colors cursor-pointer">
                  <h4 className="font-bold text-slate-900 mb-2">Technology Consulting</h4>
                  <p className="text-sm text-slate-600">Architecture reviews, cloud migration strategy, and technical audits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Support / CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-luminosity" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Ready to accelerate your digital transformation?
              </h2>
              <div className="space-y-6">
                {[
                  "Can you build and scale my SaaS platform?",
                  "How fast can we launch an MVP?",
                  "Can you modernize our legacy Java applications?",
                  "Do you provide dedicated engineering teams?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                    <p className="text-lg text-slate-300">Yes. <span className="text-white font-medium">{q}</span></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Talk to our CTO</h3>
              <p className="text-slate-400 mb-8">
                Get a free architecture review and project estimation within 48 hours. No commitment required.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  <input type="text" placeholder="Last Name" className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <input type="email" placeholder="Work Email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                <Button size="lg" variant="premium" className="w-full">
                  Request Architecture Review
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
