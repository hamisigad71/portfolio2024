"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast.error("Please fill in your email and project details.");
      return;
    }

    setIsSubmitting(true);
    // Simulate snappy submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. Daysman will reply within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        message: "",
        agreed: false,
      });
    }, 600);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden" id="contact">
      {/* Background radial gradient */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Proof */}
          <div
            className="md:col-span-6 space-y-8"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div>
              <Badge variant="glass" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300 border-blue-500/30 mb-4">
                Get in Touch
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Let’s discuss your project and take it to the next level.
              </h2>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    Phone & WhatsApp
                  </span>
                  <a
                    href="tel:+254742630973"
                    className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    +254 742 630 973
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    Email Address
                  </span>
                  <a
                    href="mailto:hamisigad77@gmail.com"
                    className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition-colors"
                  >
                    hamisigad77@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/80 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                    Location
                  </span>
                  <p className="text-base sm:text-lg font-medium text-white">
                    Nairobi, Kasarani, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
                Payment & Integration Options
              </p>
              <div className="flex items-center flex-wrap gap-8 opacity-80 grayscale hover:grayscale-0 transition-[filter]">
                <Image
                  src="/images/contact/google-pay.png"
                  alt="Google Pay"
                  width={90}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
                <Image
                  src="/images/contact/stripe.png"
                  alt="Stripe"
                  width={60}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
                <Image
                  src="/images/contact/wise.png"
                  alt="Wise"
                  width={70}
                  height={24}
                  className="h-4 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <Card className="p-8 sm:p-10 rounded-3xl bg-slate-950/90 border-slate-800 backdrop-blur-2xl shadow-2xl text-white">
              <h3 className="text-2xl font-bold text-white mb-2">
                Start a conversation
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Fill in your project brief and I’ll get back to you with timelines and architectural ideas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">First Name</label>
                    <Input
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-slate-900/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Last Name</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-slate-900/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Email Address *</label>
                  <Input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-900/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Location / Country</label>
                  <Input
                    placeholder="United States, Kenya, UK, etc."
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="bg-slate-900/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Project Details *</label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell me about what you're building, budget, and desired launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-900/90 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-600/25 transition-transform"
                >
                  {isSubmitting ? (
                    "Sending Inquiry..."
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
