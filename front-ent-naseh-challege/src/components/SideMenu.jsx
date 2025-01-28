import PersonAddIcon from "@mui/icons-material/PersonAdd";

export default function SdieMenu() {
  return (
    <div className="flex gap-4">
      <PersonAddIcon />
      <div className="flex gap-2">
        <img
          src="/flag.png"
          alt="Qatar Flag"
          className="rounded-[100%] h-7 w-7"
        />
        <span className="font-[600]">Qr</span>
      </div>
    </div>
  );
}
