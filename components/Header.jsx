"use client";
import ThemeToggler from "./ThemeToggler";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Header = () => {
  const [header, setHeader] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollYPos);
    };
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#FEF9F5]' }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo theme={theme}/>
          <div className="flex items-center gap-x-6">
            {/* {Nav bar} */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 item-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* {Mobile Navbar} */}
            <div className="xl:hidden">
              <MobileNav theme={theme}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
