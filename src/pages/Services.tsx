import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Database, Shield, Smartphone, Cpu, Layers, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "software-development",
      icon: <Code2 className="h-10 w-10 text-blue-600" />,
      title: "Software Product Development",
      desc: "End-to-end product engineering from MVP to enterprise scale. We build robust, scalable, and maintainable software.",
      tags: ["React", "Node.js", "Python", "Go"]
    },
    {
      id: "enterprise-apps",
      icon: <Layers className="h-10 w-10 text-indigo-600" />,
      title: "Enterprise Application Development",
      desc: "Custom enterprise solutions designed to streamline operations, enhance productivity, and integrate with existing systems.",
      tags: ["Java Spring", ".NET", "Microservices"]
    },
    {
      id: "cloud-devops",
      icon: <Cloud className="h-10 w-10 text-sky-600" />,
      title: "Cloud & DevOps",
      desc: "Cloud migration, architecture optimization, and CI/CD automation to ensure high availability and rapid deployment.",
      tags: ["AWS", "Azure", "Kubernetes", "Terraform"]
    },
    {
      id: "ai-ml",
      icon: <Cpu className="h-10 w-10 text-purple-600" />,
      title: "AI / ML Solutions",
      desc: "Leverage artificial intelligence to automate processes, gain predictive insights, and build intelligent features.",
      tags: ["LLMs", "Computer Vision", "TensorFlow"]
    },
    {
      id: "data-engineering",
      icon: <Database className="h-10 w-10 text-emerald-600" />,
      title: "Data Engineering & Analytics",
      desc: "Build scalable data pipelines, warehouses, and visualization dashboards to turn raw data into actionable intelligence.",
      tags: ["Snowflake", "dbt", "Kafka", "PowerBI"]
    },
    {
      id: "cybersecurity",
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "Cybersecurity Services",
      desc: "Comprehensive security audits, penetration testing, and DevSecOps implementation to protect your digital assets.",
      tags: ["Compliance", "Pen Testing", "Zero Trust"]
    },
    {
      id: "mobile-dev",
      icon: <Smartphone className="h-10 w-10 text-pink-600" />,
      title: "Web & Mobile Development",
      desc: "High-performance, cross-platform mobile applications and responsive web platforms that users love.",
      tags: ["React Native", "Flutter", "Next.js"]
    },
    {
      id: "staff-augmentation",
      icon: <Users className="h-10 w-10 text-amber-600" />,
      title: "IT Staff Augmentation",
      desc: "Scale your engineering capacity rapidly with our pre-vetted, senior-level developers and architects.",
      tags: ["Dedicated Teams", "Agile", "Tech Leads"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-950 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Comprehensive technology solutions designed to accelerate growth, optimize operations, and build competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.id}`} 
                  className="inline-flex items-center font-semibold text-blue-600 group-hover:text-blue-700"
                >
                  Explore Service <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
