"use client";

import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <header className="fixed backdrop-blur-lg inset-y-6 inset-x-0 mx-auto flex items-center z-50 w-[820px] max-w-[90%] justify-between h-16 bg-[#0E0E0Ea6] rounded-full px-6 border-[#F9F9F930] border">
      <Link className="text-lg font-bold text-[#F9F9F9] " href="/">BENINI.XYZ</Link>
      <div className="hidden sm:flex">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://github.com/FelBenini" target="blank">Github</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>

        </Menu>
      </div>
    </header>
  )
}

export default Header
