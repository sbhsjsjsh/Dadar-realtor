'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle,
  Users,
  Quote
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

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Top Bar Contract */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Dadar Realtor
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Dadar East Plots</Link>
          <Link href="#services" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Services</Link>
          <Link href="#how-it-works" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">How It Works</Link>
          <Link href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Contact</Link>
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
                  Open Land in Dadar East, Mumbai
                </h1>
                <p className="mb-8 text-xl font-medium text-slate-700">
                  Verified Plots for Residential, Commercial & Investment
                </p>
                <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                  Own a Prime Piece of Mumbai&apos;s Most Connected Location. We help investors, developers and families buy legally verified plots in the heart of Mumbai.
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
                  src="/src/assets/images/mumbai_skyline_hero_1793217321478.jpg"
                  alt="Mumbai Skyline"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">100% Verified Titles</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Welcome to Your Trusted Partner for Land in Dadar East
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Dadar East is one of Mumbai&apos;s rarest and most valuable micro-markets. Open plots here hardly come up, and when they do, they sell fast. We specialise in connecting serious buyers with clear-title open land in Dadar East and nearby central Mumbai locations.
              </p>
              <p>
                Whether you want to build, invest or hold land for the long term, our team guides you with honest advice and fully verified options.
              </p>
            </div>
          </div>
        </section>

        {/* Why Buy Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Buy Open Land in Dadar East?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <MapPin className="h-8 w-8 text-blue-600" />,
                  title: "Central Location",
                  desc: "Meeting point of Mumbai's Western and Central lines. Quick access to South Mumbai, BKC, and Worli."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
                  title: "Strong Appreciation",
                  desc: "Scarce supply and constant demand keep land values rising year after year in central Mumbai."
                },
                {
                  icon: <Building2 className="h-8 w-8 text-amber-600" />,
                  title: "Development Options",
                  desc: "Build residential towers, commercial offices, or showrooms (subject to zoning)."
                },
                {
                  icon: <Users className="h-8 w-8 text-indigo-600" />,
                  title: "High Demand",
                  desc: "Strong residential and commercial market ensures your asset stays in high demand at all times."
                }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Open Land Sales", desc: "Verified open plots for residential, commercial and mixed-use development." },
                { title: "Investment Advisory", desc: "Guidance on plot selection, pricing and appreciation potential." },
                { title: "Developer Support", desc: "Land options for redevelopment and new projects in central Mumbai." },
                { title: "Legal Verification", desc: "Title checks, NOC verification and complete paperwork support." },
                { title: "Site Visits", desc: "Free guided site visits and professional negotiation help." }
              ].map((service, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl border border-slate-100 p-8 transition-all hover:border-blue-100 hover:bg-blue-50/30">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Locations */}
        <section className="bg-slate-900 py-20 text-white lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Featured Locations We Cover
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="flex items-center gap-3 rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="font-medium">Open Land in Dadar East</span>
              </Link>
              {[
                "Plots in Dadar West",
                "Land in Wadala and Parel",
                "Land in Matunga and Sion",
                "Central Mumbai Commercial Land"
              ].map((loc, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="font-medium">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Why Choose Us?
            </h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                {[
                  { title: "Legally Verified Plots", desc: "Clear title and documentation checked before listing." },
                  { title: "Transparent Pricing", desc: "No hidden charges, no surprises." },
                  { title: "Local Market Expertise", desc: "Deep knowledge of Dadar and central Mumbai land values." },
                  { title: "End-to-End Support", desc: "From first enquiry to registration and possession." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
                <Image 
                  src="/src/assets/images/hero_dadar_land_1793217109560.jpg"
                  alt="Verified Plot"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-5">
              {[
                { step: "01", title: "Requirement", desc: "Budget and size." },
                { step: "02", title: "Options", desc: "Verified shortlist." },
                { step: "03", title: "Site Visit", desc: "Expert guidance." },
                { step: "04", title: "Due Diligence", desc: "Doc verification." },
                { step: "05", title: "Possession", desc: "Secure closing." }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
                    {step.step}
                  </div>
                  <h4 className="mb-2 font-bold">{step.title}</h4>
                  <p className="text-xs text-slate-500">{step.desc}</p>
                  {idx < 4 && <div className="absolute top-8 left-1/2 hidden w-full border-t border-dashed border-slate-200 md:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { 
                  text: "Finding open land in Dadar East felt impossible until we spoke to this team. Clean documents, clear pricing and a smooth process.",
                  author: "Investor"
                },
                { 
                  text: "Professional, honest and quick. They helped us shortlist the right plot for our project.",
                  author: "Developer"
                }
              ].map((t, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-50 p-10">
                  <Quote className="mb-6 h-8 w-8 text-blue-600/20" />
                  <p className="mb-8 text-lg italic text-slate-700 leading-relaxed">&quot;{t.text}&quot;</p>
                  <div className="font-bold text-slate-900">— Client, {t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-20 lg:py-32">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <FAQItem 
                question="Is open land available in Dadar East, Mumbai?"
                answer="Yes, but availability is extremely limited. We maintain a database of verified listings that rarely hit the open market. Contact us for current availability."
              />
              <FAQItem 
                question="Is Dadar East a good location for land investment?"
                answer="Yes. Its central location, excellent connectivity, and constant demand make it one of Mumbai's strongest areas for long-term capital appreciation."
              />
              <FAQItem 
                question="Are your land documents legally verified?"
                answer="Yes. Every plot listed on our portal undergoes thorough title and document verification before it is presented to clients."
              />
              <FAQItem 
                question="Can I book a site visit?"
                answer="Absolutely. You can call or WhatsApp us on +91-9004810239 to schedule a free guided site visit with one of our experts."
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
                    Secure Your Open Land in Dadar East Today
                  </h2>
                  <p className="mb-12 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                    Prime plots don&apos;t stay available for long. Talk to our expert now and take the first step toward owning land in the heart of Mumbai.
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

      <footer className="bg-slate-50 border-t border-slate-100 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-2 text-xl font-bold tracking-tight text-slate-900">
                Dadar Realtor
              </div>
              <p className="text-sm text-slate-500">Expert guidance for prime land in central Mumbai.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/open-land-for-sale-in-dadar-east-mumbai" className="hover:text-slate-900">Open Land Dadar East</Link>
              <Link href="#" className="hover:text-slate-900">About Us</Link>
              <Link href="#services" className="hover:text-slate-900">Services</Link>
              <Link href="#contact" className="hover:text-slate-900">Contact Us</Link>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-8 text-center">
            <p className="text-xs text-slate-400 mb-4">
              Keywords: open land in dadar east, land for sale in dadar east, plots in dadar east mumbai, commercial land dadar east, residential plot dadar east, mumbai central land for sale
            </p>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Dadar Realtor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
