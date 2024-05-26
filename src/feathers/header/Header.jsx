import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="fixed left-0 top-0 z-20 flex min-h-20 w-full items-center justify-between bg-white px-8 shadow-sm">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
