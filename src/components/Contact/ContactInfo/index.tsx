import React from "react";
import Link from "next/link";
import { Mail, Briefcase, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 transition-colors duration-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 flex items-start gap-6 card-hover-effect">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                General Inquiries & Projects
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Have an active roadmap, architecture requirement, or question? Send a message and I'll respond within 24 hours.
              </p>
              <a
                href="mailto:hamisigad77@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2"
              >
                hamisigad77@gmail.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>

          <Card className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 flex items-start gap-6 card-hover-effect">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contract & Advisory Roles
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Available for fractional engineering leadership, AI agent system integration, and design engineering contracts.
              </p>
              <a
                href="tel:+254742630973"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-2"
              >
                +254 742 630 973
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
