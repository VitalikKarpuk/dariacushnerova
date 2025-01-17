const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h2
      className="
  text-4xl md:text-5xl 
  font-extrabold 
  text-center 
  mb-8
  text-transparent bg-clip-text
  bg-gradient-to-r
  from-[#3F8EFC] 
  to-[#2667FF]
  pb-2
"
    >
      {title}
    </h2>
  );
};

export { SectionHeader };
