
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { FileText, Play, BarChart2, FolderLock } from "lucide-react";
import { FinalClosing } from "@/components/sections/FinalClosing";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function PortfolioPage() {
    const categories = [
        {
            title: "Dashboards en Vivo",
            icon: <BarChart2 size={20} />,
            items: ["Sonepar Q4 Report", "Growth CRM View"],
            desc: "Métricas en tiempo real."
        },
        {
            title: "Audios de Entrega",
            icon: <Play size={20} />,
            items: ["Feedback One Stop", "Review Acceso"],
            desc: "Prueba social real."
        },
        {
            title: "Sistemas Propietarios",
            icon: <FolderLock size={20} />,
            items: ["Funnel Automation", "Lead Scoring Logic"],
            desc: "Arquitectura interna."
        },
        {
            title: "Data & Reportes",
            icon: <FileText size={20} />,
            items: ["Whitepaper Adq.", "ROI Doc."],
            desc: "Documentación técnica."
        }
    ];

    return (
        <Background variant="premium">
            <main className="min-h-screen pt-32 pb-0">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.header
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mb-24 text-center"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400">Evidencia Privada</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                        >
                            {AGENCY_CONTENT.portfolio.title}
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            {AGENCY_CONTENT.portfolio.intro}
                        </motion.p>
                    </motion.header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-32">
                        {categories.map((category, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/5 p-8 rounded-[2rem] group hover:bg-white/[0.08] hover:border-emerald-500/20 transition-all duration-500"
                            >
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 mb-8 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                    {category.icon}
                                </div>
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5] mb-4">{category.title}</h3>
                                <p className="text-gray-400 text-xs mb-8 leading-relaxed">{category.desc}</p>

                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-[10px] text-gray-400">
                                            <div className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="relative py-20 mb-32 border-y border-white/5 text-center"
                    >
                        <blockquote className="text-3xl md:text-5xl font-serif text-gray-400 italic relative z-10 leading-tight">
                            "{AGENCY_CONTENT.portfolio.quote}"
                        </blockquote>
                    </motion.div>
                </div>

                <FinalClosing
                    title="Pide una Demo de nuestro Sistema"
                    subtitle="Te mostramos el panel de control real que usamos para escalar operaciones B2B. Sin secretos, solo ingeniería."
                />
            </main>
        </Background>
    );
}
