import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      id: "fintech-platform",
      client: "Global FinTech Corp",
      title: "Scaling a Payment Gateway to 10M+ Daily Transactions",
      category: "Enterprise Application",
      metrics: [
        { label: "Latency Reduction", value: "40%", icon: <Clock className="w-4 h-4" /> },
        { label: "Cost Optimization", value: "$2M/yr", icon: <DollarSign className="w-4 h-4" /> },
        { label: "Uptime", value: "99.99%", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "healthcare-ai",
      client: "HealthTech Innovators",
      title: "AI-Powered Diagnostic Assistant for Radiologists",
      category: "AI / ML Solutions",
      metrics: [
        { label: "Accuracy", value: "94%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Time Saved", value: "3hrs/day", icon: <Clock className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "ecommerce-migration",
      client: "Retail Giant",
      title: "Legacy to Microservices: Zero-Downtime Migration",
      category: "Legacy Modernization",
      metrics: [
        { label: "Page Load", value: "-60%", icon: <Clock className="w-4 h-4" /> },
        { label: "Conversion", value: "+22%", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Proven Results.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover how we've helped enterprises and ambitious startups solve complex engineering challenges and achieve measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16">
            {cases.map((study, idx) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center group"
              >
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">
                    {study.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-lg text-slate-500 font-medium mb-8">Client: {study.client}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-1">
                          {metric.icon} {metric.label}
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.id}`} 
                    className="inline-flex items-center font-semibold text-slate-900 hover:text-blue-600"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                
                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} overflow-hidden rounded-3xl shadow-lg`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
