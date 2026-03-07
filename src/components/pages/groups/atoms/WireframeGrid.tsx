import { type FC } from "react";

/** Тонкая сетка в стиле wireframe на тёмном фоне для футуристичного 3D-контекста */
export const WireframeGrid: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12] ${className}`}
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="wireframe-grid-groups"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 0 0 L 40 0 M 0 0 L 0 40" fill="none" stroke="rgba(167, 139, 250, 0.35)" strokeWidth="0.6" />
            <path d="M 40 40 L 0 40 M 40 40 L 40 0" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="0.4" />
            <circle cx="0" cy="0" r="1" fill="rgba(167, 139, 250, 0.5)" />
            <circle cx="40" cy="0" r="1" fill="rgba(167, 139, 250, 0.5)" />
            <circle cx="0" cy="40" r="1" fill="rgba(167, 139, 250, 0.5)" />
            <circle cx="40" cy="40" r="1" fill="rgba(167, 139, 250, 0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wireframe-grid-groups)" />
      </svg>
    </div>
  );
};
