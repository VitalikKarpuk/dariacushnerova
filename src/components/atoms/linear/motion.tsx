import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";

/** Единственная кривая системы: expo-out. Быстро, решительно, без отскока. */
export const EXPO = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/**
 * Появление секции: fade-up один раз, при 20% видимости.
 * `once: true` — повторная анимация при обратном скролле выглядит нервно.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EXPO, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Контейнер каскада: дочерние `<StaggerItem>` въезжают по 0.08s друг за другом.
 * `as` позволяет контейнеру самому быть grid'ом и сохранять семантику списка —
 * без обёртки между grid и его элементами, иначе col-span перестаёт работать.
 */
export function Stagger({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
}) {
  const reduced = useReducedMotion();
  const Tag = as === "ul" ? motion.ul : motion.div;
  const Plain = as === "ul" ? "ul" : "div";

  if (reduced) return <Plain className={className}>{children}</Plain>;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduced = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  const Plain = as === "li" ? "li" : "div";

  if (reduced) return <Plain className={className}>{children}</Plain>;

  return (
    <Tag className={className} variants={fadeUp}>
      {children}
    </Tag>
  );
}

/** `md` из Tailwind. Ниже этой ширины параллакс героя отключён — см. ниже. */
const DESKTOP = "(min-width: 768px)";

function useDesktop() {
  const [is, setIs] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia(DESKTOP).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const on = () => setIs(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return is;
}

/**
 * Параллакс героя: по мере скролла контент слегка уменьшается и уходит вниз —
 * будто камера отъезжает.
 *
 * Прогресс считается **по самому герою**, а не по документу. С `useScroll()`
 * без target диапазон [0, 0.18] означал 18% длины всей страницы: на мобильном
 * это ~3500 px, герой уходил с экрана, отъехав всего на 36 px из 100, и эффект
 * менялся сам собой при любой правке длины страницы.
 *
 * Гашения по прозрачности здесь нет намеренно. Оно было, но не работало:
 * `opacity` из scroll-MotionValue в framer-motion 12 записывается один раз при
 * монтировании и на скролл не отвечает, хотя `scale` и `y` из того же прогресса
 * едут нормально. Проверено и на исходной версии, и с выносом на вложенный
 * элемент — поведение то же. Мёртвая строка убрана.
 *
 * Ниже `md` эффект выключен совсем: там контент стоит под портретом, в нижней
 * половине секции, и уезжающий текст мешал бы его читать.
 */
export function ParallaxHero({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const desktop = useDesktop();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.9], [0, 80]);

  if (reduced || !desktop) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} className={className} style={{ scale, y }}>
      {children}
    </motion.div>
  );
}
