import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Please provide more details"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary-fixed/20 rounded-full blur-[80px] -ml-24 -mb-24"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-8">
                <span className="innovation-pulse"></span>
                <span className="text-xs font-label font-bold tracking-widest text-on-primary-fixed-variant uppercase">Get in Touch</span>
              </div>
              <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 tracking-tight">
                Let's build something <span className="text-primary italic">extraordinary</span>.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
                Whether you need a full product team, an architecture review, or staff augmentation, our experts are ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-container-high text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-1">Email Us</h3>
                    <p className="text-on-surface-variant">hello@hashcode.dev</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-container-high text-tertiary rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-1">Call Us</h3>
                    <p className="text-on-surface-variant">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-surface-container-high text-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl text-on-surface mb-1">Headquarters</h3>
                    <p className="text-on-surface-variant">100 Innovation Drive<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-xl border border-outline-variant/10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h2 className="font-headline font-bold text-3xl text-on-surface mb-4">Request Received</h2>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">
                    Thank you for reaching out. One of our solution architects will contact you within 24 hours.
                  </p>
                  <button 
                    className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all border border-outline-variant/10"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-headline font-bold text-3xl text-on-surface mb-8">Request a Consultation</h2>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-label font-bold text-on-surface-variant">First Name</label>
                        <input 
                          {...register("firstName")}
                          type="text" 
                          className={`w-full bg-surface-container-low border ${errors.firstName ? 'border-error' : 'border-outline-variant/30'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`} 
                        />
                        {errors.firstName && <p className="text-error text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-label font-bold text-on-surface-variant">Last Name</label>
                        <input 
                          {...register("lastName")}
                          type="text" 
                          className={`w-full bg-surface-container-low border ${errors.lastName ? 'border-error' : 'border-outline-variant/30'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`} 
                        />
                        {errors.lastName && <p className="text-error text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-label font-bold text-on-surface-variant">Work Email</label>
                      <input 
                        {...register("email")}
                        type="email" 
                        className={`w-full bg-surface-container-low border ${errors.email ? 'border-error' : 'border-outline-variant/30'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`} 
                      />
                      {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-label font-bold text-on-surface-variant">Company</label>
                      <input 
                        {...register("company")}
                        type="text" 
                        className={`w-full bg-surface-container-low border ${errors.company ? 'border-error' : 'border-outline-variant/30'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`} 
                      />
                      {errors.company && <p className="text-error text-xs mt-1">{errors.company.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-label font-bold text-on-surface-variant">How can we help?</label>
                      <textarea 
                        {...register("message")}
                        rows={4} 
                        className={`w-full bg-surface-container-low border ${errors.message ? 'border-error' : 'border-outline-variant/30'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                      ></textarea>
                      {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <button 
                      type="submit"
                      className="w-full hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                    <p className="text-xs text-center text-outline mt-4">
                      By submitting this form, you agree to our Privacy Policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
