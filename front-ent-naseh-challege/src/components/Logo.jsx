export default function Logo() {
  return (
    <div className="flex gap-2">
      <img src="/logo.png" alt="Logo" className="h-7" />
      <span className="font-black text-(--color-logo-text)">coca</span>
    </div>
  );
}
