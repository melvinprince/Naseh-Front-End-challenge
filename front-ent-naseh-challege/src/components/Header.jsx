import Logo from "./Logo";
import MainMenu from "./MainMenu";
import SdieMenu from "./SideMenu";

export default function Header() {
  return (
    <header className="flex justify-between px-25 py-8">
      <Logo />
      <MainMenu />
      <SdieMenu />
    </header>
  );
}
