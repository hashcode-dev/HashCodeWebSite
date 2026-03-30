import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Briefcase } from "lucide-react";

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
    <div className="pt-24 pb-20">
      <section className="bg-slate-950 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Hash Code.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build career-defining products. We're looking for passionate engineers, architects, and product thinkers to join our global team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Open Positions</h2>
            
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-300 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {job.department}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
                      <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
