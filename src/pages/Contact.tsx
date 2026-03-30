import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
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
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's build something extraordinary.</h1>
              <p className="text-lg text-slate-600 mb-12">
                Whether you need a full product team, an architecture review, or staff augmentation, our experts are ready to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">hello@hashcode.dev</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Headquarters</h3>
                    <p className="text-slate-600">100 Innovation Drive<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received</h2>
                  <p className="text-slate-600 mb-8">
                    Thank you for reaching out. One of our solution architects will contact you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h2>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <input 
                          {...register("firstName")}
                          type="text" 
                          className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <input 
                          {...register("lastName")}
                          type="text" 
                          className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Work Email</label>
                      <input 
                        {...register("email")}
                        type="email" 
                        className={`w-full border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Company</label>
                      <input 
                        {...register("company")}
                        type="text" 
                        className={`w-full border ${errors.company ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`} 
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">How can we help?</label>
                      <textarea 
                        {...register("message")}
                        rows={4} 
                        className={`w-full border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <Button size="xl" variant="premium" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                    <p className="text-xs text-center text-slate-500 mt-4">
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
