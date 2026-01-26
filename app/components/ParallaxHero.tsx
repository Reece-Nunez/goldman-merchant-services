"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface ParallaxHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  badge?: string;
  children?: ReactNode;
  minHeight?: string;
  showScrollIndicator?: boolean;
  backgroundImage?: string;
}

export default function ParallaxHero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  children,
  minHeight = "100vh",
  showScrollIndicator = true,
  backgroundImage,
}: ParallaxHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight }}
    >
      {/* Animated Background Layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 -top-[20%] h-[140%]"
      >
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Background Image (if provided) */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-slate-900/50" />
          </>
        )}

        {/* Subtle Ambient Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[10%] right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-amber-500/15 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-tr from-amber-600/10 to-transparent blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-8 pt-32 pb-20"
        data-min-height={minHeight}
      >
        <div className="max-w-4xl mx-auto" style={{ minHeight: minHeight === "100vh" ? "calc(100vh - 13rem)" : "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium tracking-wide">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-amber-400 font-medium mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCTA && (
                <Link href={primaryCTA.href} className="btn-primary">
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary">
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}

          {/* Custom Children */}
          {children}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-amber-400"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

// Simplified Hero for inner pages
export function PageHero({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)"/>
        </svg>
      </div>

      {/* Accent Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl text-white mb-6"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
