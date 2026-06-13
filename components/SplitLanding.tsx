"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Camera, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SplitLanding() {
  const router = useRouter();
  const [activeSide, setActiveSide] = useState<"developer" | "photography" | null>(
    null
  );
  const [leaving, setLeaving] = useState(false);

  const handleNavigate = (path: string) => {
    setLeaving(true);

    setTimeout(() => {
      router.push(path);
    }, 650);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -50, 70, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-10 top-20 h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[120px]"
        />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col md:flex-row">
        {/* Developer Side */}
        <motion.div
          onMouseEnter={() => setActiveSide("developer")}
          onMouseLeave={() => setActiveSide(null)}
          onClick={() => handleNavigate("/developer")}
          animate={{
            flex:
              activeSide === "developer"
                ? 1.2
                : activeSide === "photography"
                ? 0.8
                : 1,
            filter:
              activeSide === "photography"
                ? "brightness(0.45) blur(2px)"
                : "brightness(1)",
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden md:min-h-screen"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('/dev-workspace.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/45 to-cyan-950/60" />

          <div className="relative z-10 max-w-xl px-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
            >
              <Code2 size={16} />
              Software Developer
            </motion.div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Build.
              <br />
              Design.
              <br />
              Ship.
            </h2>

            <motion.p
              animate={{
                opacity: activeSide === "developer" ? 1 : 0,
                y: activeSide === "developer" ? 0 : 18,
              }}
              transition={{ duration: 0.35 }}
              className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base"
            >
              I craft clean, scalable, and thoughtful digital products using
              modern web technologies.
            </motion.p>

            <motion.div
              animate={{
                opacity: activeSide === "developer" ? 1 : 0,
                y: activeSide === "developer" ? 0 : 15,
              }}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200"
            >
              Explore Developer Portfolio <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </motion.div>

        {/* Photography Side */}
        <motion.div
          onMouseEnter={() => setActiveSide("photography")}
          onMouseLeave={() => setActiveSide(null)}
          onClick={() => handleNavigate("/photography")}
          animate={{
            flex:
              activeSide === "photography"
                ? 1.2
                : activeSide === "developer"
                ? 0.8
                : 1,
            filter:
              activeSide === "developer"
                ? "brightness(0.45) blur(2px)"
                : "brightness(1)",
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex min-h-[50vh] cursor-pointer items-center justify-center overflow-hidden md:min-h-screen"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: "url('/sports-photo.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/80 via-black/45 to-orange-950/60" />

          <div className="relative z-10 max-w-xl px-8 text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
            >
              <Camera size={16} />
              Sports Photographer
            </motion.div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Focus.
              <br />
              Capture.
              <br />
              Impact.
            </h2>

            <motion.p
              animate={{
                opacity: activeSide === "photography" ? 1 : 0,
                y: activeSide === "photography" ? 0 : 18,
              }}
              transition={{ duration: 0.35 }}
              className="ml-auto mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base"
            >
              I capture the speed, emotion, and energy of sports through bold
              cinematic visuals.
            </motion.p>

            <motion.div
              animate={{
                opacity: activeSide === "photography" ? 1 : 0,
                y: activeSide === "photography" ? 0 : 15,
              }}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-orange-200"
            >
              Explore Photography Portfolio <ArrowUpRight size={16} />
            </motion.div>
          </div>
        </motion.div>

        {/* Center identity */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="relative flex flex-col items-center">
            <div className="h-28 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

            <div className="my-5 rounded-full border border-white/20 bg-black/40 px-7 py-5 text-center shadow-2xl backdrop-blur-2xl">
              <h1 className="whitespace-nowrap text-xl font-black tracking-tight">
                Your Name
              </h1>
              <p className="mt-1 whitespace-nowrap text-xs uppercase tracking-[0.35em] text-white/55">
                Software Developer & Sports Photographer
              </p>
            </div>

            <div className="h-28 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          </div>
        </div>

        {/* Mobile center title */}
        <div className="absolute left-1/2 top-1/2 z-30 block w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-black/50 px-6 py-5 text-center backdrop-blur-xl md:hidden">
          <h1 className="text-2xl font-black">Your Name</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
            Software Developer & Sports Photographer
          </p>
        </div>
      </section>

      <AnimatePresence>
        {leaving && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 origin-bottom bg-white"
          />
        )}
      </AnimatePresence>
    </main>
  );
}