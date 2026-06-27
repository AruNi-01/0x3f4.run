"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type ActivityMode = "sleep" | "eat" | "work" | "play";

export function getLocalTime(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const hour = parts.find((part) => part.type === "hour")?.value ?? "0";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";
  const dayPeriod = (parts.find((part) => part.type === "dayPeriod")?.value ?? "AM").toUpperCase();

  return `${hour}:${minute}${dayPeriod}`;
}

export function getLocalHour(date: Date, timeZone: string) {
  return Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hourCycle: "h23",
    }).format(date)
  );
}

export function getActivityMode(hour: number): ActivityMode {
  if (hour >= 0 && hour < 8) {
    return "sleep";
  }

  if ((hour >= 12 && hour < 13) || (hour >= 18 && hour < 19)) {
    return "eat";
  }

  if ((hour >= 10 && hour < 12) || (hour >= 13 && hour < 18) || (hour >= 19 && hour < 21)) {
    return "work";
  }

  return "play";
}

function SleepScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 dark:from-[#050816] dark:via-[#120f2d] dark:to-[#04060f]">
      <motion.span
        className="absolute left-5 top-4 text-2xl"
        animate={{ opacity: [0.5, 1, 0.5], rotate: [-10, 6, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🌙
      </motion.span>
      <motion.span
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-6xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        😴
      </motion.span>
      <motion.span
        className="absolute left-7 bottom-10 text-xl text-amber-200/80 dark:text-amber-100/80"
        animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.35, 0.85, 0.35] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute left-14 bottom-6 text-sm text-violet-200/70 dark:text-violet-100/70"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      >
        ✧
      </motion.span>
      <motion.span
        className="absolute right-8 top-7 text-lg font-semibold text-indigo-200/90 dark:text-indigo-100/90"
        animate={{ y: [0, -16], opacity: [0, 1, 0] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut" }}
      >
        Z
      </motion.span>
      <motion.span
        className="absolute right-12 top-12 text-xl font-semibold text-indigo-200/90 dark:text-indigo-100/90"
        animate={{ y: [0, -18], opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.45 }}
      >
        z
      </motion.span>
      <motion.span
        className="absolute right-16 top-[4.4rem] text-2xl font-semibold text-indigo-200/90 dark:text-indigo-100/90"
        animate={{ y: [0, -20], opacity: [0, 1, 0] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
      >
        z
      </motion.span>
    </div>
  );
}

function EatScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-amber-50 via-orange-100 to-rose-100 dark:from-stone-950 dark:via-orange-950 dark:to-rose-950">
      <motion.span
        className="absolute left-[58%] top-10 -translate-x-1/2 text-6xl"
        animate={{ y: [0, -5, 0], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        🍜
      </motion.span>
      <motion.span
        className="absolute left-8 top-8 text-3xl"
        animate={{ y: [0, -4, 0], rotate: [0, -6, 4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        🥟
      </motion.span>
      <motion.span
        className="absolute left-12 bottom-5 text-2xl text-orange-500/80 dark:text-orange-200/80"
        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.35, 0.95, 0.35] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        ✦
      </motion.span>
      <motion.div
        className="absolute left-8 bottom-10 flex gap-2"
        animate={{ opacity: [0.35, 0.85, 0.35], y: [0, -2, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-orange-300/90 dark:bg-orange-200/80" />
        <span className="h-2 w-2 rounded-full bg-amber-300/90 dark:bg-amber-200/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-rose-300/90 dark:bg-rose-200/80" />
      </motion.div>
      <motion.span
        className="absolute left-[58%] top-3 -translate-x-[1.55rem] text-xl text-orange-500 dark:text-orange-300"
        animate={{ y: [0, -10], opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        〰
      </motion.span>
      <motion.span
        className="absolute left-[58%] top-1 -translate-x-[0.2rem] text-xl text-orange-500 dark:text-orange-300"
        animate={{ y: [0, -12], opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      >
        〰
      </motion.span>
      <motion.span
        className="absolute right-8 top-10 text-3xl"
        animate={{ y: [0, 6, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        🥢
      </motion.span>
    </div>
  );
}

function WorkScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-emerald-50 via-cyan-100 to-sky-100 dark:from-slate-950 dark:via-emerald-950 dark:to-cyan-950">
      <motion.span
        className="absolute left-1/2 top-9 -translate-x-1/2 text-6xl"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        🧑‍💻
      </motion.span>
      <motion.div
        className="absolute left-6 top-5 flex gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        <span className="h-2 w-2 rounded-full bg-sky-400" />
      </motion.div>
      <motion.div
        className="absolute left-6 bottom-5 rounded-xl border border-white/60 bg-white/50 px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/10"
        animate={{ y: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-1 flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </div>
        <div className="space-y-1">
          <span className="block h-1 w-10 rounded-full bg-emerald-300/90 dark:bg-emerald-200/70" />
          <span className="block h-1 w-7 rounded-full bg-sky-300/90 dark:bg-sky-200/70" />
        </div>
      </motion.div>
      <motion.span
        className="absolute bottom-4 right-5 text-lg font-semibold text-emerald-600 dark:text-emerald-300"
        animate={{ opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {'< />'}
      </motion.span>
    </div>
  );
}

function PlayScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-fuchsia-50 via-pink-100 to-violet-100 dark:from-slate-950 dark:via-fuchsia-950 dark:to-violet-950">
      <motion.span
        className="absolute left-1/2 top-10 -translate-x-1/2 text-6xl"
        animate={{ y: [0, -6, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🎮
      </motion.span>
      <motion.span
        className="absolute left-7 top-7 text-2xl"
        animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute right-8 top-8 text-2xl"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        ♪
      </motion.span>
    </div>
  );
}

function ActivityScene({ mode }: { mode: ActivityMode }) {
  switch (mode) {
    case "sleep":
      return <SleepScene />;
    case "eat":
      return <EatScene />;
    case "work":
      return <WorkScene />;
    default:
      return <PlayScene />;
  }
}

export const activityCopy: Record<ActivityMode, { label: string; note: string }> = {
  sleep: {
    label: "sleeping",
    note: "00:00-08:00",
  },
  eat: {
    label: "eating",
    note: "12:00-13:00 / 18:00-19:00",
  },
  work: {
    label: "working",
    note: "10:00-12:00 / 13:00-18:00 / 19:00-21:00",
  },
  play: {
    label: "playing",
    note: "all other hours",
  },
};

export function CurrentStatusTitle({
  timeZone,
  forceMode,
}: {
  timeZone: string;
  forceMode?: ActivityMode;
}) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hour = getLocalHour(now, timeZone);
  const mode = forceMode ?? getActivityMode(hour);

  return <>{`Currently ${activityCopy[mode].label}`}</>;
}

export default function LocalTimeStatusCard({
  timeZone,
  locationLabel,
  forceMode,
}: {
  timeZone: string;
  locationLabel: string;
  forceMode?: ActivityMode;
}) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hour = getLocalHour(now, timeZone);
  const mode = forceMode ?? getActivityMode(hour);
  const time = getLocalTime(now, timeZone);
  const currentActivity = activityCopy[mode];

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-neutral-200 bg-white/80 p-4 shadow-lg shadow-neutral-200/60 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80 dark:shadow-black/20">
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_280px] md:items-center">
        <div className="flex h-full flex-col justify-center gap-5">
          <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 sm:text-4xl" suppressHydrationWarning>
            {time}{" "}
            <span className="block text-base font-medium text-neutral-500 dark:text-neutral-400 sm:inline">
              in {locationLabel}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Currently <span className="font-semibold text-primary">{currentActivity.label}</span>.
          </p>
        </div>
        <div className="h-40 w-full rounded-[1.5rem] border border-white/60 bg-white/60 p-2 dark:border-white/10 dark:bg-white/5">
          <ActivityScene mode={mode} />
        </div>
      </div>
    </div>
  );
}
