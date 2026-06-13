"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Trophy,
  Zap,
  Image as ImageIcon,
  CalendarDays,
  Users,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";

const gallery = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
];

const events = [
  {
    title: "Football Match Coverage",
    description:
      "Dynamic action shots, player emotions, crowd energy, and match storytelling.",
    icon: Trophy,
  },
  {
    title: "Cricket Tournament",
    description:
      "Professional sports coverage with focus on action, expressions, and key moments.",
    icon: CalendarDays,
  },
  {
    title: "Athlete Portraits",
    description:
      "Bold portraits for players, teams, clubs, and personal sports branding.",
    icon: Users,
  },
];

const services = [
  {
    title: "Match Day Coverage",
    description:
      "Full event photography for sports matches, tournaments, and competitions.",
  },
  {
    title: "Team & Player Photoshoots",
    description:
      "Professional portraits, promotional photos, and social media content for athletes.",
  },
  {
    title: "Editorial Sports Content",
    description:
      "Cinematic images suitable for news, posters, announcements, and digital campaigns.",
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden px-5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photo-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/75 to-orange-950/50" />
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center">
          <Link
            href="/"
            className="mb-10 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/10"
          >
            ← Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm text-orange-100 backdrop-blur-xl">
              <Camera size={16} />
              Sports Photography Portfolio
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Capturing speed, emotion, and unforgettable sporting moments
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              I create cinematic sports visuals that highlight intensity,
              movement, passion, and the story behind every game.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Photography Style"
            title="Cinematic sports images with emotion and impact."
            description="My photography focuses on energy, timing, and storytelling. From athlete expressions to dramatic action moments, I aim to capture images that feel alive."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Zap,
                title: "Fast Action",
                text: "Sharp timing for powerful sports moments.",
              },
              {
                icon: ImageIcon,
                title: "Visual Story",
                text: "Images that communicate emotion and atmosphere.",
              },
              {
                icon: Sparkles,
                title: "Cinematic Feel",
                text: "Strong contrast, light, mood, and composition.",
              },
              {
                icon: Camera,
                title: "Professional Coverage",
                text: "Reliable coverage for matches and events.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual collection of sports moments."
            description="Use this section to showcase your best sports images from matches, tournaments, athlete portraits, and behind-the-scenes moments."
            align="center"
          />

          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div
                  className={`bg-cover bg-center transition duration-700 hover:scale-105 ${
                    index % 3 === 0
                      ? "h-[420px]"
                      : index % 2 === 0
                      ? "h-[340px]"
                      : "h-[280px]"
                  }`}
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Coverage"
            title="Sports events and stories I can cover."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((event) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {event.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Photography services for athletes, clubs, and events."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 backdrop-blur-xl"
              >
                <span className="text-sm font-bold text-orange-300">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        accent="orange"
        title="Need sports photography coverage?"
        description="Let’s capture your match, tournament, athlete profile, or sports campaign with bold cinematic visuals."
      />
    </main>
  );
}