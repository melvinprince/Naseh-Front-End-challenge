export default function MainMenu() {
  return (
    <div className="">
      <ul className="flex gap-4 text-(--color-secondary) font-[600]">
        <li className="">
          <a to="#">Home</a>
        </li>
        <li className="">
          <a href="#">About Us</a>
        </li>
        <li className="">
          <a href="#">Law Firm</a>
        </li>
        <li className="">
          <a href="#">Services</a>
        </li>
        <li className="">
          <a href="#">Community</a>
        </li>
        <li className="">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
