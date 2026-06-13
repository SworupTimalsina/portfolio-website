import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

type ContactCTAProps = {
  title?: string;
  description?: string;
  accent?: "cyan" | "orange";
};

export default function ContactCTA({
  title = "Let’s create something memorable.",
  description = "Whether it is a digital product or a sports event coverage, I would love to collaborate.",
  accent = "cyan",
}: ContactCTAProps) {
  const color =
    accent === "orange"
      ? "from-orange-500/20 via-white/[0.04] to-yellow-500/10"
      : "from-cyan-500/20 via-white/[0.04] to-blue-500/10";

  return (
    <section className="px-5 py-20">
      <div
        className={`mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${color} p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-12`}
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
              <Mail size={16} />
              Available for work
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              {description}
            </p>
          </div>

          <Link
            href="mailto:yourmail@example.com"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition hover:scale-105"
          >
            Contact Me
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}