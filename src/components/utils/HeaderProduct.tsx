


export default function HeaderProduct({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-[var(--color-alt-content-border)] pb-[30px] mb-[30px]">
      {children}
    </div>
  );
}


