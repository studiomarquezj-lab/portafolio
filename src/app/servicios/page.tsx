
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <Background variant="premium">
            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-24 text-center max-w-3xl mx-auto"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.3em] bg-emerald-500 text-black px-4 py-1.5 rounded-full mb-8 inline-block shadow-xl shadow-emerald-500/10">High Ticket Growth</span>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-tight text-white">{AGENCY_CONTENT.services.title}</h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {AGENCY_CONTENT.services.intro}
                        </p>
                    </motion.header>

                    {/* Problem/Solution Contrast */}
                    <div className="grid md:grid-cols-2 gap-8 mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] border border-white/20 shadow-xl"
                        >
                            <h3 className="text-xl font-bold mb-6 font-serif text-red-600 uppercase tracking-widest text-[10px]">{AGENCY_CONTENT.services.problem.title}</h3>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-light">{AGENCY_CONTENT.services.problem.desc}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black text-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        >
                            <div>
                                <h3 className="text-xl font-bold mb-6 font-serif text-white uppercase tracking-widest text-xs">{AGENCY_CONTENT.services.solution.title}</h3>
                                <ul className="space-y-4 mb-8">
                                    {AGENCY_CONTENT.services.solution.points.map((p, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 size={16} className="text-success-green mt-0.5" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Guarantee Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-emerald-100/50 rounded-[3rem] p-12 md:p-20 text-center mb-32 relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto text-black">
                            <Zap className="mx-auto text-emerald-600 w-12 h-12 mb-8 animate-pulse" />
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900 tracking-tight">{AGENCY_CONTENT.services.guarantee.title}</h2>
                            <p className="text-xl mb-12 text-gray-600 font-light leading-relaxed">{AGENCY_CONTENT.services.guarantee.desc}</p>

                            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                                {AGENCY_CONTENT.services.guarantee.options.map((opt, i) => (
                                    <div key={i} className="bg-gray-50 p-5 rounded-2xl shadow-sm text-[10px] font-bold uppercase tracking-widest border border-emerald-50 text-gray-800">
                                        {opt}
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">{AGENCY_CONTENT.services.guarantee.note}</p>
                        </div>
                    </motion.section>

                    {/* Proof Section */}
                    <section className="mb-32 max-w-2xl mx-auto text-center border-t border-gray-100 pt-20">
                        <h2 className="text-2xl font-serif mb-8">{AGENCY_CONTENT.services.proof.title}</h2>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-900 text-white rounded-[2rem] p-8 mb-8 relative shadow-2xl cursor-pointer group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                                    <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Evidencia de Audio</div>
                                    <div className="text-xl font-serif">One Stop Services Result</div>
                                </div>
                                <div className="ml-auto hidden md:flex items-end gap-1 h-8 opacity-40">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="w-1 bg-white rounded-full transition-all duration-300" style={{ height: Math.random() * 100 + '%' }} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <blockquote className="text-gray-400 italic text-lg leading-relaxed font-light">"{AGENCY_CONTENT.services.proof.quote}"</blockquote>
                    </section>

                    {/* CTA */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center bg-black text-white p-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-transparent" />
                        <h2 className="text-4xl md:text-5xl font-serif mb-12 relative z-10">{AGENCY_CONTENT.services.target.title}</h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
                            {AGENCY_CONTENT.services.target.points.map((p, i) => (
                                <span key={i} className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">{p}</span>
                            ))}
                        </div>
                        <button className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 relative z-10">
                            Aplicar para Growth Partner
                        </button>
                        <p className="mt-12 text-[10px] text-red-400 font-bold uppercase tracking-[0.3em] bg-red-400/10 inline-block px-4 py-1.5 rounded-full border border-red-400/20 relative z-10">
                            {AGENCY_CONTENT.services.target.warning}
                        </p>
                    </motion.section>
                </div>
            </main>
        </Background>
    )
}
