"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    toast.success("Subscribed successfully!", {
      description: "You're now on the list for weekly product & tech insights.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-white relative z-1 border-t border-slate-800/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/Screenshot_from-2025-11-17_00-56-19-removebg-preview.png"
                alt="Venus Logo"
                width={160}
                height={45}
                quality={100}
                unoptimized
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback in case of filename typo
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-2xl font-bold tracking-tight text-white block mt-1">
                Venus<span className="text-blue-500">.</span>
              </span>
            </Link>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Ready to build something extraordinary?
            </h3>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Specialized in scalable full-stack applications, intelligent automation, and micro-interaction craft.
            </p>

            <div className="pt-2">
              <Button
                asChild
                className="rounded-xl px-7 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <a
                  href="tel:+254742630973"
                  className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors"
                >
                  +254 742 630 973
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a
                  href="mailto:hamisigad77@gmail.com"
                  className="text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors break-all"
                >
                  hamisigad77@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm font-medium text-slate-200">
                  Nairobi, Kasarani, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Stay in the Loop
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to receive occasional updates on full-stack architecture, AI engineering, and design craft.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border-slate-700/80 text-white placeholder:text-slate-500 rounded-xl"
                />
                <Button
                  type="submit"
                  className="rounded-xl px-5 bg-blue-600 hover:bg-blue-700 text-white font-medium shrink-0"
                >
                  Join
                </Button>
              </div>
              <p className="text-[11px] text-slate-500">
                No spam ever. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <ul className="flex flex-wrap items-center gap-6">
            <li>
              <Link href="/#about" className="hover:text-slate-200 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-slate-200 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-slate-200 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-slate-200 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Venus Project. Handcrafted with precision by Daysman Gad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
