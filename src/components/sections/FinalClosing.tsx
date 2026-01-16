
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface FinalClosingProps {
    title?: string;
    subtitle?: string;
    cta?: string;
    href?: string;
}

export function FinalClosing({
    title = "Empieza la Instalación de tu Sistema de Adquisición",
    subtitle = "No vendemos servicios mensuales. Instalamos activos de crecimiento permanentes. El control total es tuyo.",
    cta = "Agendar Auditoría de Infraestructura",
    href = "/auditoria"
}: FinalClosingProps) {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="container mx-auto max-w-5xl bg-black rounded-[4rem] p-12 md:p-24 text-center border border-white/5 shadow-2xl relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
                    <Zap size={14} className="animate-pulse" /> Disponibilidad Limitada para Q1 2026
                </div>

                <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-none">
                    {title}
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                <div className="flex flex-col items-center gap-8">
                    <Link
                        href={href}
                        className="group relative bg-white text-black px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-3"
                    >
                        {cta}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                        <ShieldCheck size={16} className="text-emerald-500" />
                        Garantía de Entrega de Infraestructura en 60 Días
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
