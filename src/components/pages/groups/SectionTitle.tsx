import React from "react";

interface SectionTitleProps {
  title: string;
  color?: string; // Цвет текста (по умолчанию `hsl(245,64%,35%)`)
  align?: "left" | "center" | "right"; // Выравнивание текста
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  color = "hsl(245,64%,35%)",
  align = "center",
}) => {
  return (
    <h2
      className={`text-${align} text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-10 md:mb-12`}
      style={{ color }}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
