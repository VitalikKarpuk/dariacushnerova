import React from "react";

interface SectionTitleProps {
  title: string;
  color?: string;
  align?: "left" | "center" | "right";
  /** Стиль визитки: подчёркивание и чуть более сжатый вид */
  variant?: "default" | "vizitka";
}

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color = "#f0eef6",
  align = "center",
  variant = "vizitka",
}) => {
  const isVizitka = variant === "vizitka";
  return (
    <div className={alignClass[align]}>
      <h2
        className={`font-heading font-bold tracking-tight ${
          isVizitka
            ? "text-xl uppercase tracking-widest md:text-2xl lg:text-3xl mb-2 md:mb-3"
            : "text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4"
        } ${alignClass[align]}`}
        style={{ color }}
      >
        {title}
      </h2>
      {isVizitka && (
        <span
          className={`block h-0.5 w-12 rounded-full md:w-16 ${align === "center" ? "mx-auto" : ""}`}
          style={{ backgroundColor: "#f59e0b" }}
          aria-hidden
        />
      )}
    </div>
  );
};

export default SectionTitle;
