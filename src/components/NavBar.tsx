"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}  >
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses"> All Courses</HoveredLink>
                        <HoveredLink href="/Batch">Batch</HoveredLink>
                        <HoveredLink href="/song-wirting">Song Writing</HoveredLink>
                        <HoveredLink href="/basic-music">Basic Music</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">Courses</HoveredLink>
                        <HoveredLink href="/Batch">Batch</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default NavBar
