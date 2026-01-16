
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { FinalClosing } from "@/components/sections/FinalClosing";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Cpu, Database, Network, ShieldCheck } from "lucide-react";

export default function MethodologyPage() {
    const icons = [<Cpu className="w-5 h-5" />, <Database className="w-5 h-5" />, <Network className="w-5 h-5" />, <ShieldCheck className="w-5 h-5" />];

    return (
        <Background variant="premium">
            <main className="min-h-screen pt-32 pb-0">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <motion.header
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="mb-24"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-emerald-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-400">Infraestructura Propietaria</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-8xl font-serif mb-10 tracking-tighter leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                        >
                            {AGENCY_CONTENT.methodology.title}
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="relative py-10 border-y border-white/5">
                            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed italic max-w-3xl">
                                "{AGENCY_CONTENT.methodology.principle}"
                            </p>
                        </motion.div>
                    </motion.header>

                    <div className="space-y-4 mb-32">
                        {AGENCY_CONTENT.methodology.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="group grid md:grid-cols-[80px_1fr] gap-8 p-10 bg-white/[0.03] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 hover:border-emerald-500/20"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                        {icons[i] || <Cpu />}
                                    </div>
                                    <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-600">Fase 0{i + 1}</div>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3 className="text-3xl font-serif text-[#F5F5F5] mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">{step.title}</h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-14 bg-emerald-600 rounded-[3rem] text-center mb-32 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-10 text-black/10">
                            <Cpu size={140} strokeWidth={0.5} />
                        </div>
                        <p className="text-2xl md:text-4xl font-serif text-black leading-tight max-w-3xl mx-auto relative z-10">
                            "{AGENCY_CONTENT.methodology.approach}"
                        </p>
                    </motion.div>
                </div>

                <FinalClosing
                    title="Copia este sistema en tu operación"
                    subtitle="Diseñamos e instalamos el motor comercial que necesitas para que tu crecimiento no sea suerte, sino una métrica predecible."
                />
            </main>
        </Background>
    )
}
