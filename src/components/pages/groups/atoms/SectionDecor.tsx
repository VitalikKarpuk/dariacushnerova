import { type FC } from "react";

/** 3D-орбы и точечные декоративные элементы светлой палитры на тёмном фоне */
const orbPositions = [
  { className: "-right-24 -top-20 h-72 w-72 blur-3xl opacity-15", color: "bg-warm-500" },
  { className: "-left-20 top-1/4 h-56 w-56 blur-3xl opacity-10", color: "bg-teal-400" },
  { className: "left-1/2 -top-12 h-40 w-96 -translate-x-1/2 blur-3xl opacity-10", color: "bg-palette-700" },
  { className: "right-1/4 bottom-0 h-64 w-64 blur-3xl opacity-10", color: "bg-rose-400" },
  { className: "-left-32 bottom-1/4 h-48 w-48 blur-3xl opacity-15", color: "bg-warm-400" },
];

export const SectionDecor: FC<{ variant?: "default" | "dense" }> = ({ variant = "default" }) => {
  const orbs = variant === "dense" ? orbPositions : orbPositions.slice(0, 3);
  return (
    <>
      {orbs.map((orb, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute rounded-full animate-float-slow ${orb.className} ${orb.color}`}
          style={{ animationDelay: `${i * 0.8}s` }}
        />
      ))}
      {/* Точечный акцент — маленькие «звёзды» */}
      <div className="pointer-events-none absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-warm-400/80 shadow-[0_0_12px_rgba(245,158,11,0.5)]" aria-hidden />
      <div className="pointer-events-none absolute left-[10%] top-[60%] h-1.5 w-1.5 rounded-full bg-teal-300/90 shadow-[0_0_8px_rgba(45,212,191,0.5)]" aria-hidden />
      <div className="pointer-events-none absolute right-[20%] bottom-[25%] h-2 w-2 rounded-full bg-rose-400/70 shadow-[0_0_10px_rgba(244,114,182,0.4)]" aria-hidden />
    </>
  );
};
