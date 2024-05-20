import { FaBars } from "react-icons/fa6";
import Button from "../ui/Button";
import Logo from "./Logo";
import Nav from "./Nav";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Header() {
  const [activeNav, setActiveNav] = useState(false);

  const handleActiveNav = (hidden = "") => {
    if (hidden === "hiddenNav") return setActiveNav(false);
    setActiveNav((prev) => !prev);
  };

  return (
    <header className="fixed left-0 top-0 z-20 flex min-h-20 w-full items-center justify-between bg-white px-8 shadow-sm">
      <Logo />
      <Nav isActive={activeNav} handleActive={handleActiveNav} />
      <Button
        kind="solid"
        className="flex h-10 w-10 items-center justify-center text-xl md:hidden"
        onClick={handleActiveNav}
      >
        {activeNav ? <IoClose className="text-3xl" /> : <FaBars />}
      </Button>
    </header>
  );
}

export default Header;
