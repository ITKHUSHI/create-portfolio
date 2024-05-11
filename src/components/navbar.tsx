"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="HOME">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/">About Me </HoveredLink>
            <HoveredLink href="/contact">Contact </HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Research & Work">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/project">Projects</HoveredLink>
          <HoveredLink href="/publication">Publications</HoveredLink>
          <HoveredLink href="/experience">Experience</HoveredLink>
          
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Expertise">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/skills">Skills </HoveredLink>
            <HoveredLink href="/education">Education</HoveredLink>
            <HoveredLink href="/certificate">Certifications</HoveredLink> {/* paste your certificate link at herf="" */}
            
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar;