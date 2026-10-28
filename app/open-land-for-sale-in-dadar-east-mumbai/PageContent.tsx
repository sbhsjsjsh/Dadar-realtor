'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Train, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  MessageCircle,
  Users
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-500" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-slate-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function DadarLandPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Top Bar Contract */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Dadar Realtor
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-invest" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Why Invest</Link>
          <Link href="#features" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Features</Link>
          <Link href="#location" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Location</Link>
          <Link href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">FAQs</Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="tel:+919004810239" 
            className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all active:scale-95"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xs:inline">Call Now</span>
          </a>
          <a 
            href="https://wa.me/919004810239" 
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xs:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <MapPin className="h-4 w-4" />
                  <span>Dadar East, Mumbai</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl text-wrap-balance">
                  Open Land for Sale in Dadar East, Mumbai
                </h1>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Prime Plots for Residential & Commercial Development. Rare, high-demand, and a smart asset in Mumbai&apos;s most connected location.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a 
                    href="tel:+919004810239"
                    className="flex items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    Call: +91-9004810239
                  </a>
                  <a 
                    href="https://wa.me/919004810239"
                    className="flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-square"
              >
                <Image 
                  src="/src/assets/images/hero_dadar_land_1793217109560.jpg"
                  alt="Open land plot in Dadar East Mumbai"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified Clear Title</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span className="text-sm font-medium">High Appreciation</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Invest Section */}
        <section id="why-invest" className="py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Invest in Open Land in Dadar East?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Train className="h-8 w-8 text-blue-600" />,
                  title: "Unmatched Connectivity",
                  desc: "The only station where Western and Central lines meet. Easy access to South Mumbai, Suburbs, and Navi Mumbai via rail, road, and metro."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
                  title: "Rising Land Value",
                  desc: "Infrastructure upgrades around Dadar, Wadala, and Parel continue to push prices upward. Early buyers benefit the most."
                },
                {
                  icon: <Building2 className="h-8 w-8 text-amber-600" />,
                  title: "High Demand",
                  desc: "Steady demand from offices, retail, and residents ensures strong rental potential and easy resale value."
                }
              ].map((item, idx) => (
                <div key={idx} className="group rounded-2xl border border-slate-100 p-8 text-left transition-all hover:border-slate-200 hover:shadow-lg">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="bg-slate-900 py-20 text-white lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Key Features of Our Open Land
              </h2>
              <p className="text-slate-400">
                Strategic plots selected for growth and security.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {[
                  {
                    title: "Clear Title & Legal Verification",
                    desc: "Complete document verification including title, ownership, NOCs, and approvals to protect your investment."
                  },
                  {
                    title: "Prime Location with Road Access",
                    desc: "Plots located on well-connected roads with easy access to major arterial routes and public transport."
                  },
                  {
                    title: "Suitable for Multiple Uses",
                    desc: "Ideal for residential buildings, commercial offices, showrooms, or mixed-use developments."
                  },
                  {
                    title: "Flexible Plot Sizes",
                    desc: "Options available for individual buyers, developers, and investors depending on budget and project."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{feature.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <ShieldCheck className="h-64 w-64 text-white" />
                </div>
                <div className="relative z-10 p-12">
                  <h3 className="mb-8 text-2xl font-bold italic text-blue-400">&quot;Land is a scarce, non-depreciating asset. Buildings age, but land in Dadar East only grows.&quot;</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-sm text-slate-400">Legal Verification</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">Prime</div>
                      <div className="text-sm text-slate-400">Central Location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantages */}
        <section id="location" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Location Advantages of Dadar East
              </h2>
              <p className="text-slate-600">The heart of Mumbai connectivity.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Train className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Transport Network</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Dadar Railway Station (Western & Central)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Dadar TT & Major Bus Routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>Eastern Freeway & Atal Setu (MTHL)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Nearby Landmarks</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Shivaji Park & Chaityabhoomi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Leading Schools & Colleges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    <span>Major Hospitals & Malls</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">Business Districts</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Quick access to BKC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Lower Parel & Worli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>Nariman Point Connectivity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Buy */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Who Should Buy Open Land in Dadar East?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Developers", icon: <Building2 />, desc: "Build residential towers or commercial spaces." },
                { title: "Investors", icon: <TrendingUp />, desc: "Strong asset for long-term appreciation." },
                { title: "Business Owners", icon: <ShieldCheck />, desc: "Set up your own office or showroom." },
                { title: "Families", icon: <Users />, desc: "Build a legacy asset in Mumbai's heart." }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                  <div className="mb-4 text-blue-600">{item.icon}</div>
                  <h4 className="mb-2 font-bold">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <FAQItem 
                question="Is open land available for sale in Dadar East, Mumbai?"
                answer="Yes, but availability is limited due to high demand and the central location. We maintain a curated list of verified, clear-title plots. Contact us for current listings."
              />
              <FAQItem 
                question="What is the price of open land in Dadar East?"
                answer="Prices depend on the plot size, exact location, road width, and development potential (FSI/Zoning). Please call or message us for the latest market rates and specific plot prices."
              />
              <FAQItem 
                question="Is Dadar East good for land investment?"
                answer="Absolutely. Its position as a central transit hub, coupled with ongoing infrastructure projects like Metro and MTHL connectivity, ensures constant demand and strong long-term appreciation."
              />
              <FAQItem 
                question="Can I build a residential or commercial project on this land?"
                answer="Yes, depending on the plot's zoning and municipal approvals. Our team verifies the permitted use and FSI potential before we list any plot."
              />
              <FAQItem 
                question="Are the land documents legally clear?"
                answer="We only list plots that have undergone thorough legal due diligence. Clear titles and verified ownership are prerequisites for all our listings."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">
              <div className="flex flex-col items-center justify-center p-12 lg:p-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-6xl text-wrap-balance">
                    Get the Best Open Land Deals in Dadar East Today
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Good plots sell quickly. Speak to our expert today and secure a prime asset in the heart of Mumbai.
                  </p>
                  <div className="flex flex-col gap-6 sm:flex-row justify-center items-center">
                    <a 
                      href="tel:+919004810239" 
                      className="flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-white px-10 py-5 text-xl font-bold text-slate-900 hover:bg-slate-100 transition-all active:scale-95"
                    >
                      <Phone className="h-6 w-6" />
                      Call: +91-9004810239
                    </a>
                    <a 
                      href="https://wa.me/919004810239" 
                      className="flex w-full sm:w-auto items-center justify-center gap-4 rounded-full bg-emerald-600 px-10 py-5 text-xl font-bold text-white hover:bg-emerald-700 transition-all active:scale-95"
                    >
                      <MessageCircle className="h-6 w-6" />
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                Dadar Realtor
              </div>
              <p className="text-sm text-slate-500">Expert real estate guidance for Dadar and Central Mumbai.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="#" className="hover:text-slate-900">About Us</Link>
              <Link href="#" className="hover:text-slate-900">Contact</Link>
            </div>
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Dadar Realtor. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
