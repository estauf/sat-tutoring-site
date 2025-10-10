"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Clock, GraduationCap, Star, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import "./globals.css";

const CALENDLY_LINK = "https://calendly.com/estauffer-college";
const CONTACT_EMAIL = "estauffer@college.harvard.edu";

export default function SATLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5"/>
            <span className="font-semibold tracking-tight">SAT English Tutoring</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#approach" className="hover:text-slate-900 text-slate-600">Approach</a>
            <a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </nav>
          <Button asChild className="rounded-2xl">
            <a href={CALENDLY_LINK} target="_blank" rel="noreferrer">Free 30‑min Intro</a>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge className="rounded-full">Harvard Student Tutor</Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Affordable 1‑on‑1 SAT Reading & Writing Tutoring — $20/hr
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            I improved my SAT from <span className="font-semibold">1260</span> to <span className="font-semibold">1540</span>
            (770 Reading/Writing, 770 Math). I now coach students with the exact
            strategies that moved my score — clear, practical, and stress‑free.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild className="rounded-2xl">
              <a href={CALENDLY_LINK} target="_blank" rel="noreferrer">Book Free Intro</a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="rounded-2xl">
              <a href="#pricing">See Pricing</a>
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4"/> No contracts • Cancel anytime • Online via Zoom
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard icon={<CheckCircle className="h-5 w-5"/>} title="Personalized plan" desc="Quick diagnostic → focused weekly drills"/>
          <FeatureCard icon={<BookOpen className="h-5 w-5"/>} title="Evidence‑based" desc="Official exams & targeted passage strategies"/>
          <FeatureCard icon={<Clock className="h-5 w-5"/>} title="Flexible hours" desc="Evenings & weekends available"/>
          <FeatureCard icon={<GraduationCap className="h-5 w-5"/>} title="Student‑friendly" desc="$20/hr to keep prep accessible"/>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          <Stat label="Avg. section gain in 4–6 weeks" value="+60–100" suffix="pts"/>
          <Stat label="Reading/Writing focus" value="770" suffix="/800"/>
          <Stat label="Satisfaction" value="100%" suffix="happy parents"/>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-6xl px-4 py-10">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">How it works</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <Step num={1} title="Free intro (30 min)" desc="We review a short diagnostic, set a target, and map your plan."/>
            <Step num={2} title="Weekly 1‑on‑1 (60 min)" desc="We drill your exact weak spots: grammar patterns, paired evidence, transitions, rhetoric."/>
            <Step num={3} title="Simple homework" desc="Light, targeted exercises. Progress sheet after every session."/>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Star className="h-5 w-5"/> What students & parents say</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Quote text="Went from 620 → 700 in Reading in a month. Clear strategies, no fluff." author="Student, Class of 2026"/>
          <Quote text="Affordable and effective — my son finally ‘gets’ paired evidence questions." author="Parent, Class of 2025"/>
          <Quote text="The checklists are gold. Grammar errors make sense now." author="Student, Class of 2025"/>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Simple, affordable pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard
            title="Single Session"
            price="$20"
            subtitle="per 60‑min lesson"
            bullets={["Personalized plan","Homework & notes","Progress tracker"]}
            cta="Book a lesson"
            link={CALENDLY_LINK}
          />
          <PriceCard
            featured
            title="Starter Pack"
            price="$90"
            subtitle="5 lessons (save $10)"
            bullets={["Goal‑based curriculum","Weekly progress updates","Parent check‑in"]}
            cta="Start now"
            link={CALENDLY_LINK}
          />
          <PriceCard
            title="Intensive"
            price="$170"
            subtitle="10 lessons (save $30)"
            bullets={["Section‑specific mastery","Timed drills & reviews","Test‑week plan"]}
            cta="Reserve spot"
            link={CALENDLY_LINK}
          />
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Faq q="Do you teach Math too?" a="I can advise on study plans for Math, but my 1‑on‑1 focus (and best results) are in Reading & Writing."/>
          <Faq q="What materials do you use?" a="Official SAT practice tests + my strategy checklists and targeted drills."/>
          <Faq q="Is there a contract?" a="No. Pay per lesson or buy a pack to save. Cancel anytime."/>
          <Faq q="How do we meet?" a="Zoom with shared screen, Google Docs for notes, and a simple progress tracker after each lesson."/>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2"><MessageSquare className="h-5 w-5"/> Have questions?</h3>
              <p className="text-slate-600 mt-1">Email me at <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — or book a free intro call.</p>
            </div>
            <Button size="lg" asChild className="rounded-2xl">
              <a href={CALENDLY_LINK} target="_blank" rel="noreferrer">Book Free Intro</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-slate-200 py-8 mt-6">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name — SAT Reading & Writing Tutor.</p>
          <div className="flex gap-4">
            <a href={CALENDLY_LINK} className="hover:underline">Book</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2 flex-row items-center gap-2">
        {icon}
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{desc}</CardContent>
    </Card>
  );
}

function Stat({ label, value, suffix }) {
  return (
    <Card className="rounded-2xl text-center shadow-sm">
      <CardHeader className="pb-1">
        <CardTitle className="text-3xl font-extrabold tracking-tight">
          {value}{suffix ? <span className="text-base font-medium text-slate-500 ml-1">{suffix}</span> : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{label}</CardContent>
    </Card>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">{num}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-slate-600 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function PriceCard({ title, price, subtitle, bullets, cta, link, featured = false }) {
  return (
    <Card className={`rounded-2xl shadow-sm ${featured ? "ring-2 ring-slate-900" : ""}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          {featured && <Badge className="rounded-full">Best value</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-extrabold">{price}<span className="text-base font-medium text-slate-500">/hr</span></div>
        <div className="text-slate-600 mt-1">{subtitle}</div>
        <ul className="mt-4 space-y-2 text-sm">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5"/>{b}</li>
          ))}
        </ul>
        <Button asChild className="w-full mt-5 rounded-2xl">
          <a href={link} target="_blank" rel="noreferrer">{cta}</a>
        </Button>
      </CardContent>
    </Card>
  );
}

function Quote({ text, author }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="pt-6">
        <p className="text-slate-800 italic">“{text}”</p>
        <p className="mt-3 text-sm text-slate-500">— {author}</p>
      </CardContent>
    </Card>
  );
}

function Faq({ q, a }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <div className="font-semibold">{q}</div>
      <div className="text-slate-600 text-sm mt-1">{a}</div>
    </div>
  );
}

