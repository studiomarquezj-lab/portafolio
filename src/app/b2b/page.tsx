
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function B2BPage() {
    return (
        <Background variant="premium">
            <main className="min-h-screen pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-24 border-b border-white/10 pb-12"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 block">Vertical Corporativa</span>
                        <h1 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight line-clamp-2 text-white">{AGENCY_CONTENT.b2b.title}</h1>
                        <p className="text-2xl md:text-3xl font-light text-gray-400 max-w-3xl leading-relaxed">
                            {AGENCY_CONTENT.b2b.intro}
                        </p>
                    </motion.header>

                    {/* Problem Section */}
                    <motion.section {...fadeInUp} className="grid md:grid-cols-2 gap-16 mb-32 items-start">
                        <div>
                            <h2 className="text-4xl font-serif mb-6 text-white">{AGENCY_CONTENT.b2b.problem.title}</h2>
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 leading-relaxed">{AGENCY_CONTENT.b2b.problem.desc}</p>
                        </div>
                    </motion.section>

                    {/* Solution & Features */}
                    <section className="bg-white text-black border border-white/20 rounded-3xl p-12 md:p-20 mb-32 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10" />
                        <div className="max-w-3xl mb-16 relative z-10">
                            <h2 className="text-3xl font-serif mb-4 text-gray-900">{AGENCY_CONTENT.b2b.solution.title}</h2>
                            <p className="text-gray-600">{AGENCY_CONTENT.b2b.solution.desc}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {AGENCY_CONTENT.b2b.solution.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:border-emerald-500/20 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-serif text-lg">
                                        {i + 1}
                                    </div>
                                    <p className="font-medium text-lg leading-tight">{feature}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Case Study Document */}
                    <motion.section
                        {...fadeInUp}
                        className="bg-midnight text-white rounded-3xl p-12 md:p-20 relative overflow-hidden mb-32 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-midnight to-midnight opacity-50" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-16">
                            <div>
                                <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1 text-xs uppercase tracking-widest mb-8">
                                    <ShieldCheck size={14} className="text-emerald-400" /> Documento de Implementación
                                </div>
                                <h3 className="text-4xl font-serif mb-2">{AGENCY_CONTENT.b2b.case_study.title}</h3>
                                <div className="flex gap-4 text-sm text-gray-400 mb-8">
                                    <span>{AGENCY_CONTENT.b2b.case_study.type}</span>
                                    <span>•</span>
                                    <span>{AGENCY_CONTENT.b2b.case_study.relation}</span>
                                </div>
                                <p className="text-xl font-light text-gray-300 mb-8 leading-relaxed">
                                    {AGENCY_CONTENT.b2b.case_study.challenge}
                                </p>
                                <button className="bg-white text-midnight px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                                    Ver Documentación
                                </button>
                            </div>

                            <div className="space-y-8 border-l border-white/10 pl-8">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-4">Arquitectura</h4>
                                    <ul className="space-y-3">
                                        {AGENCY_CONTENT.b2b.case_study.architecture.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-success-green mb-4">Resultados</h4>
                                    <ul className="space-y-3">
                                        {AGENCY_CONTENT.b2b.case_study.result.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 font-medium">
                                                <CheckCircle2 size={16} className="text-success-green" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Ownership */}
                    <motion.section {...fadeInUp} className="text-center py-20 border-t border-gray-100">
                        <h2 className="text-4xl font-serif mb-16">{AGENCY_CONTENT.b2b.ownership.title}</h2>
                        <div className="grid md:grid-cols-3 gap-12 mb-20 text-balance">
                            {AGENCY_CONTENT.b2b.ownership.points.map((point, i) => (
                                <div key={i} className="p-6 hover:translate-y-[-4px] transition-transform">
                                    <h4 className="text-xl font-medium leading-relaxed">{point}</h4>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white text-black p-8 rounded-2xl max-w-2xl mx-auto shadow-xl">
                            <p className="text-sm font-medium leading-relaxed">{AGENCY_CONTENT.b2b.ownership.guarantee}</p>
                        </div>
                        <p className="mt-16 text-gray-600 text-xs font-bold uppercase tracking-[0.3em]">{AGENCY_CONTENT.b2b.footer}</p>
                    </motion.section>
                </div>
            </main>
        </Background>
    )
}
