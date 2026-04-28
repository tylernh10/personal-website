"use client";

import { Briefcase, Code, GraduationCap, HomeIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes"
import { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirections";
import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
];

export default function NavBar() {
    const { resolvedTheme, setTheme } = useTheme();
    const scrollDirection = useScrollDirection();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const iconMap: Record<string, ReactElement> = {
        "Home": <HomeIcon size={20}></HomeIcon>,
        "Work": <Briefcase size={20}></Briefcase>,
        "Projects": <Code size={20}></Code>,
        "Education": <GraduationCap size={20}></GraduationCap>
    }

    if (!mounted) return null;

    return (
        <div className={cn("fixed left-1/2 -translate-x-1/2 mt-5 flex flex-row gap-10 justify-center items-center rounded-md border px-4 py-2 bg-background duration-500", scrollDirection === "down" ? "-translate-y-32" : "translate-y-0")}>
            {navItems.map((item) => (
                <div key={item.label}>
                    <Link className="hidden sm:block" href={item.href}>{item.label}</Link>
                    <Link href={item.href} className="block sm:hidden cursor-pointer">
                        {iconMap[item.label]}
                    </Link>
                </div>
            ))}
            <div className="cursor-pointer text-muted-foreground" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                {resolvedTheme === "dark" ? <Sun size={20} className="m-1" /> : <Moon size={20} className="m-1" />}
            </div>
        </div>
    )
}
