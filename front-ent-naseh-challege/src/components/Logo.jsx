export default function Logo({ type }) {
  if (!type)
    return (
      <div className="flex gap-2">
        <img src="/logo.png" alt="Logo" className="h-7" />
        <span className="font-black text-(--color-logo-text)">coca</span>
      </div>
    );

  return (
    <div className="flex gap-3 items-center">
      <img src="/logo.png" alt="Logo" className="h-12" />
      <span className="font-black text-(--color-logo-text) text-4xl">coca</span>
    </div>
  );
}
