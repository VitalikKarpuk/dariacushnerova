import { ReactNode } from "react";

const SectionText = ({
  text,
  children,
}: {
  text?: string;
  children?: ReactNode;
}) => {
  return (
    <p className="text-xl md:text-2xl text-gray-800 font-light mb-8">
      {text && text}
      {children && children}
    </p>
  );
};

export { SectionText };
