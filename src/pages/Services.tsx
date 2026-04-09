import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "software-development",
      icon: "developer_mode",
      color: "primary",
      title: "Software Product Development",
      desc: "End-to-end product engineering from MVP to enterprise scale. We build robust, scalable, and maintainable software.",
      tags: ["React", "Node.js", "Python", "Go"]
    },
    {
      id: "enterprise-apps",
      icon: "layers",
      color: "tertiary",
      title: "Enterprise Application Development",
      desc: "Custom enterprise solutions designed to streamline operations, enhance productivity, and integrate with existing systems.",
      tags: ["Java Spring", ".NET", "Microservices"]
    },
    {
      id: "cloud-devops",
      icon: "cloud_done",
      color: "secondary",
      title: "Cloud & DevOps",
      desc: "Cloud migration, architecture optimization, and CI/CD automation to ensure high availability and rapid deployment.",
      tags: ["AWS", "Azure", "Kubernetes", "Terraform"]
    },
    {
      id: "ai-ml",
      icon: "psychology",
      color: "primary",
      title: "AI / ML Solutions",
      desc: "Leverage artificial intelligence to automate processes, gain predictive insights, and build intelligent features.",
      tags: ["LLMs", "Computer Vision", "TensorFlow"]
    },
    {
      id: "data-engineering",
      icon: "database",
      color: "tertiary",
      title: "Data Engineering & Analytics",
      desc: "Build scalable data pipelines, warehouses, and visualization dashboards to turn raw data into actionable intelligence.",
      tags: ["Snowflake", "dbt", "Kafka", "PowerBI"]
    },
    {
      id: "cybersecurity",
      icon: "security",
      color: "secondary",
      title: "Cybersecurity Services",
      desc: "Comprehensive security audits, penetration testing, and DevSecOps implementation to protect your digital assets.",
      tags: ["Compliance", "Pen Testing", "Zero Trust"]
    },
    {
      id: "mobile-dev",
      icon: "smartphone",
      color: "primary",
      title: "Web & Mobile Development",
      desc: "High-performance, cross-platform mobile applications and responsive web platforms that users love.",
      tags: ["React Native", "Flutter", "Next.js"]
    },
    {
      id: "staff-augmentation",
      icon: "group_add",
      color: "tertiary",
      title: "IT Staff Augmentation",
      desc: "Scale your engineering capacity rapidly with our pre-vetted, senior-level developers and architects.",
      tags: ["Dedicated Teams", "Agile", "Tech Leads"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed/20 rounded-full blur-[80px] -ml-24 -mb-24"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-8">
              <span className="innovation-pulse"></span>
              <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">Our Capabilities</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
              Comprehensive <span className="text-primary italic">technology</span> solutions.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Designed to accelerate growth, optimize operations, and build competitive advantage for enterprise leaders and hyper-growth startups.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const colorClasses = {
                primary: "bg-primary/10 text-primary",
                tertiary: "bg-tertiary/10 text-tertiary",
                secondary: "bg-secondary/10 text-secondary"
              }[service.color as "primary" | "tertiary" | "secondary"];

              const linkColor = {
                primary: "text-primary",
                tertiary: "text-tertiary",
                secondary: "text-secondary"
              }[service.color as "primary" | "tertiary" | "secondary"];

              return (
                <div 
                  key={service.id}
                  className="group p-10 rounded-3xl bg-surface-container-lowest border border-outline-variant/10 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colorClasses} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-wider rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/services/${service.id}`} 
                    className={`${linkColor} font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto`}
                  >
                    Explore Service <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process/Methodology Teaser */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="hero-gradient rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tertiary-fixed to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="font-headline font-extrabold text-4xl lg:text-5xl mb-8 tracking-tight">Ready to transform your ideas into reality?</h2>
              <p className="text-on-primary-container text-xl leading-relaxed mb-10">Our engineering teams are ready to tackle your most complex challenges.</p>
              <Link to="/contact">
                <button className="bg-tertiary text-on-tertiary px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">Start a Project</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
