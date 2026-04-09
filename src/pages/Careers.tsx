import { Link } from "react-router-dom";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Full Stack Engineer (React/Node)",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Engineering"
    },
    {
      title: "Cloud Solutions Architect (AWS)",
      location: "New York, NY",
      type: "Full-time",
      department: "Architecture"
    },
    {
      title: "AI/ML Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Data Science"
    },
    {
      title: "Product Manager",
      location: "London, UK",
      type: "Full-time",
      department: "Product"
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
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-8">
              <span className="innovation-pulse"></span>
              <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">Careers</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
              Join <span className="text-primary italic">Hash Code</span>.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Build career-defining products. We're looking for passionate engineers, architects, and product thinkers to join our global team.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline font-bold text-3xl text-on-surface mb-10">Open Positions</h2>
            
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg hover:border-primary/30 transition-all group">
                  <div>
                    <div className="text-xs font-label font-bold text-primary uppercase tracking-wider mb-2">
                      {job.department}
                    </div>
                    <h3 className="font-headline font-bold text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">work</span> {job.type}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <button className="bg-surface-container-high text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap">
                      Apply Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
