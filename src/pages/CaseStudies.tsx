import { Link } from "react-router-dom";

export default function CaseStudies() {
  const cases = [
    {
      id: "fintech-platform",
      client: "Global FinTech Corp",
      title: "Scaling a Payment Gateway to 10M+ Daily Transactions",
      category: "Enterprise Application",
      metrics: [
        { label: "Latency Reduction", value: "40%", icon: "schedule" },
        { label: "Cost Optimization", value: "$2M/yr", icon: "payments" },
        { label: "Uptime", value: "99.99%", icon: "trending_up" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "healthcare-ai",
      client: "HealthTech Innovators",
      title: "AI-Powered Diagnostic Assistant for Radiologists",
      category: "AI / ML Solutions",
      metrics: [
        { label: "Accuracy", value: "94%", icon: "trending_up" },
        { label: "Time Saved", value: "3hrs/day", icon: "schedule" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "ecommerce-migration",
      client: "Retail Giant",
      title: "Legacy to Microservices: Zero-Downtime Migration",
      category: "Legacy Modernization",
      metrics: [
        { label: "Page Load", value: "-60%", icon: "schedule" },
        { label: "Conversion", value: "+22%", icon: "trending_up" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
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
              <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">Success Stories</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
              Proven <span className="text-primary italic">Results</span>.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Discover how we've helped enterprises and ambitious startups solve complex engineering challenges and achieve measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16">
            {cases.map((study, idx) => (
              <div 
                key={study.id}
                className="grid lg:grid-cols-2 gap-12 items-center group"
              >
                <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-xs font-label font-bold text-primary uppercase tracking-wider mb-3">
                    {study.category}
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-lg text-on-surface-variant font-medium mb-8">Client: {study.client}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 text-outline text-xs font-label font-bold uppercase tracking-wider mb-1">
                          <span className="material-symbols-outlined text-sm">{metric.icon}</span> {metric.label}
                        </div>
                        <div className="font-headline text-3xl font-extrabold text-on-surface">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/case-studies/${study.id}`} 
                    className="inline-flex items-center font-bold text-primary hover:text-primary-container transition-colors"
                  >
                    Read Full Case Study <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </div>
                
                <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} overflow-hidden rounded-3xl shadow-xl border border-outline-variant/10`}>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
