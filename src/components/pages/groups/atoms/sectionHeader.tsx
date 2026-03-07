const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h2 className="font-heading text-2xl font-bold text-center mb-6 pb-2 text-gradient-brand tracking-tight md:text-3xl md:mb-8 lg:text-4xl">
      {title}
    </h2>
  );
};

export { SectionHeader };
