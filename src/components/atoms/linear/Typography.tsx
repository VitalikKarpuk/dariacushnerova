import { type ReactNode } from "react";

/**
 * Типографика системы. Заголовки залиты вертикальным градиентом
 * (белый → 70% прозрачности) — это даёт объём и мешает тексту
 * выглядеть «наклеенным» на тёмный фон.
 */
export function Display({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1
      /* 42px на телефоне вместо 36: подзаголовок рядом идёт 18px, и при text-4xl
         разрыв между главным заголовком страницы и лидом был слишком мал. */
      className={`bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-[2.625rem] font-semibold leading-none tracking-[-0.03em] text-transparent sm:text-5xl md:text-7xl lg:text-8xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function CardTitle({
  children,
  as: Tag = "h3",
  className = "",
}: {
  children: ReactNode;
  as?: "h3" | "h4";
  className?: string;
}) {
  return (
    <Tag className={`text-lg font-semibold tracking-tight text-linear-fg ${className}`}>
      {children}
    </Tag>
  );
}

/** Акцентная фраза с бегущим градиентом — только для ключевых слов. */
export function ShimmerText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`bg-gradient-to-r from-[#5E6AD2] via-indigo-300 to-[#5E6AD2] bg-clip-text text-transparent animate-linear-shimmer ${className}`}
      style={{ backgroundSize: "200% auto" }}
    >
      {children}
    </span>
  );
}

/** Моно-метка над заголовком: технический маркер секции. */
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-linear-fg-muted ${className}`}
    >
      <span
        className="h-1 w-1 rounded-full bg-linear-accent shadow-[0_0_8px_rgba(94,106,210,0.9)]"
        aria-hidden
      />
      {children}
    </p>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-base leading-relaxed text-linear-fg-muted md:text-lg lg:text-xl ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-linear-fg-muted md:text-base ${className}`}>
      {children}
    </p>
  );
}
