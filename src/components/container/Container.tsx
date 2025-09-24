interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={`w-full max-w-[1820px] mx-auto ${className}`}>
      {children}
    </section>
  );
}
