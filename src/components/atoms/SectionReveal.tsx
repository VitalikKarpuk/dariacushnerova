import { type ReactNode, useRef, useEffect, useState } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** Задержка анимации в ms (для каскадного появления секций) */
  delay?: number;
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delay);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-wrapper scroll-mt-20 md:scroll-mt-24 ${
        visible ? "animate-section-reveal" : "opacity-0"
      } ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
