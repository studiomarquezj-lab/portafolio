
"use client";
import Link from "next/link";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]);
    const borderOpacity = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ backgroundColor, borderBottom: `1px solid ${borderOpacity}` }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm h-20 flex items-center justify-between px-6 md:px-12 transition-all duration-300"
        >
            <Link href="/" className="hover:opacity-70 transition-opacity">
                <img src={AGENCY_CONTENT.brand.logo.light} alt={AGENCY_CONTENT.brand.name} className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex gap-10 items-center">
                {AGENCY_CONTENT.routes.map((route) => (
                    <Link
                        key={route.path}
                        href={route.path}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-emerald-400 transition-colors relative group"
                    >
                        {route.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all group-hover:w-full" />
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <Link href="/auditoria" className="hidden lg:flex btn-primary !py-2.5 !px-6 !text-[10px] items-center gap-2 group">
                    Agendar Auditoría
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Mobile Menu Icon (Placeholder) */}
                <button className="md:hidden flex flex-col gap-1.5 p-2">
                    <div className="w-6 h-0.5 bg-white" />
                    <div className="w-6 h-0.5 bg-white" />
                </button>
            </div>
        </motion.nav>
    );
}
