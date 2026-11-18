"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Calendar, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Full-Stack Development",
    date: "",
    time: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Consultation Request Sent!", {
        description: `We'll confirm your ${formData.service} discussion via email soon.`,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "Full-Stack Development",
        date: "",
        time: "",
      });
    }, 600);
  };

  return (
    <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 transition-colors duration-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <Badge variant="secondary" className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
              Book a Call
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Schedule a Technical Consultation
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Have an architecture, full-stack, or AI automation project? Book an introductory strategy session to map out requirements and project roadmaps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    First Name *
                  </label>
                  <Input
                    required
                    placeholder="Alex"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Last Name *
                  </label>
                  <Input
                    required
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Consulting Area
                  </label>
                  <select
                    className="flex h-11 w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-2 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Full-Stack Development">Full-Stack Web App</option>
                    <option value="AI Agents & Automation">AI Agents & Workflows</option>
                    <option value="UI/UX Engineering">UI/UX & Design Systems</option>
                    <option value="API & System Architecture">API & Database Design</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Preferred Time
                  </label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20"
              >
                {submitting ? "Booking..." : (
                  <span className="inline-flex items-center gap-2">
                    Request Appointment
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div className="md:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800">
              <Image
                src="/images/contact-page/contact.jpg"
                alt="Consultation and team collaboration"
                width={700}
                height={500}
                quality={90}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
