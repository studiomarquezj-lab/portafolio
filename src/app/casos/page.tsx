
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { FinalClosing } from "@/components/sections/FinalClosing";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight, BarChart3, Globe, Layers } from "lucide-react";

export default function CasesPage() {
    return (
        <Background variant="premium">
            <main className="min-h-screen pt-32 pb-0">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.header
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mb-32"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                            <span className="h-px w-8 bg-emerald-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-400">Bitácora de Sistemas</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                        >
                            {AGENCY_CONTENT.cases.title}
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            {AGENCY_CONTENT.cases.filters.map((filter, i) => (
                                <button key={i} className="px-6 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-emerald-500 transition-all text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5">
                                    {filter}
                                </button>
                            ))}
                        </motion.div>
                    </motion.header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                        {AGENCY_CONTENT.home.proof.cases.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 p-12 lg:p-16 rounded-[3.5rem] border border-white/5 group hover:bg-white/[0.08] hover:border-emerald-500/20 transition-all duration-700 flex flex-col justify-between h-[500px] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-12 text-white/5 transform group-hover:scale-110 transition-transform">
                                    <Layers size={140} strokeWidth={0.5} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="p-3 bg-emerald-500 rounded-2xl text-black">
                                            <BarChart3 size={24} />
                                        </div>
                                        <div className="p-2 border border-white/10 rounded-full text-gray-500 group-hover:bg-white group-hover:text-black transition-all">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-serif text-white mb-6 tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500">{c.name}</h3>
                                    <p className="text-gray-400 text-xl font-light leading-relaxed max-w-xs">{c.desc}</p>
                                </div>

                                <div className="relative z-10 flex gap-3">
                                    <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">Infraestructura Verificada</span>
                                    <span className="bg-white/5 text-gray-500 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/10">B2B</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-40"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-4">{AGENCY_CONTENT.cases.note}</p>
                        <div className="h-px w-20 bg-emerald-500/20 mx-auto" />
                    </motion.div>
                </div>

                <FinalClosing
                    title="¿Quieres resultados como estos en tu balance general?"
                    subtitle="No busques agencias. Busca arquitectos que instalen sistemas que generen valor permanente y real."
                />
            </main>
        </Background>
    )
}
