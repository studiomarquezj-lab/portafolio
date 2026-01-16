
"use client";
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import { Background } from "@/components/ui/Background";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Zap, TrendingUp, Cpu } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Background variant="premium">
      <main className="min-h-screen pt-20 overflow-x-hidden">

        {/* HERO SECTION - Refined Scale */}
        <section className="min-h-[85vh] flex flex-col justify-center px-6 relative pb-20">
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-400">
                  {AGENCY_CONTENT.home.hero.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-7xl lg:text-[7rem] font-serif font-medium tracking-tight mb-8 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
              >
                {AGENCY_CONTENT.home.hero.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12"
              >
                {AGENCY_CONTENT.home.hero.subtitle}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/auditoria" className="group relative bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <span className="relative z-10 flex items-center gap-3">
                    {AGENCY_CONTENT.home.hero.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-emerald-400/80 bg-emerald-400/5 px-4 py-2 rounded-full border border-emerald-400/10">
                  <ShieldCheck size={14} />
                  {AGENCY_CONTENT.home.hero.guarantee}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            style={{ y: y1, opacity }}
            className="absolute top-1/2 right-[-5%] w-[500px] h-[500px] border border-white/5 rounded-full -z-10 hidden lg:flex items-center justify-center pointer-events-none"
          >
            <div className="w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-[150px] h-[150px] border border-white/20 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </section>

        {/* PROBLEM SECTION - Contrast & Balance Fix */}
        <section className="py-32 bg-[#F9F9F9] text-[#1A1A1A] rounded-[3.5rem] mx-4 my-10 shadow-2xl relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6 tracking-tighter">
                  {AGENCY_CONTENT.home.problem.title}
                </h2>
                <p className="text-gray-600 text-xl font-light mb-8 max-w-md">{AGENCY_CONTENT.home.problem.conclusion}</p>

                <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-red-50 text-red-600 rounded-full border border-red-100">
                  <TrendingUp size={14} /> 84% de las empresas B2B fallan al escalar.
                </div>
              </motion.div>

              <div className="space-y-4">
                {AGENCY_CONTENT.home.problem.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:border-red-200 transition-all duration-300 group shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 flex-shrink-0 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <XCircle size={16} />
                    </div>
                    <p className="text-lg font-medium tracking-tight leading-snug text-gray-800">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON - Authority Shift Balanced */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-24">
              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                className="text-4xl md:text-6xl font-serif mb-6 tracking-tight text-white"
              >
                {AGENCY_CONTENT.home.difference.title}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-400 text-lg font-light">{AGENCY_CONTENT.home.difference.conclusion}</motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 0.8 }}
                className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.02] grayscale hover:grayscale-0 transition-all duration-700"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-gray-500 border-b border-white/5 pb-6">{AGENCY_CONTENT.home.difference.agency_title}</h3>
                <div className="space-y-10">
                  {AGENCY_CONTENT.home.difference.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="text-gray-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                        {item.title}
                      </h4>
                      <p className="text-xl font-serif text-white/40 italic">
                        "{item.agency}"
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.01 }}
                viewport={{ once: true }}
                className="p-px rounded-[2.6rem] bg-gradient-to-br from-emerald-500/30 via-white/5 to-transparent relative"
              >
                <div className="bg-[#0D0D0D] p-10 lg:p-14 rounded-[2.5rem] h-full border border-white/5">
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-black px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full rotate-6 shadow-xl">
                    In Agencia Std.
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-emerald-400 border-b border-white/5 pb-6">{AGENCY_CONTENT.home.difference.consultancy_title}</h3>
                  <div className="space-y-10">
                    {AGENCY_CONTENT.home.difference.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="text-emerald-500/70 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 mb-3">
                          <Cpu size={14} />
                          {item.title}
                        </h4>
                        <p className="text-2xl font-serif text-[#F5F5F5] leading-tight">
                          {item.consultancy}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OFFER - Refined Strategy */}
        <section className="py-32 bg-white text-black rounded-[3rem] mx-4 shadow-xl">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight">{AGENCY_CONTENT.home.offer.title}</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto font-light leading-relaxed">{AGENCY_CONTENT.home.offer.desc}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {AGENCY_CONTENT.home.offer.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-white transition-all cursor-default shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-medium tracking-tight text-gray-800">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/auditoria" className="btn-primary inline-flex items-center gap-3 !py-4 !px-10 !text-xs group">
                Iniciar Implementación <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* PROOF - Authority Cards Refined */}
        <section className="py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight text-white">{AGENCY_CONTENT.home.proof.title}</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">{AGENCY_CONTENT.home.proof.subtitle}</p>
              </div>
              <Link href="/casos" className="text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center gap-2 group text-gray-500">
                Explorar Bitácora completa <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {AGENCY_CONTENT.home.proof.cases.map((c, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="show"
                  className="group relative h-[380px] rounded-[2.5rem] overflow-hidden bg-white/[0.03] border border-white/5 p-10 flex flex-col justify-end hover:bg-white/[0.05] transition-all duration-500"
                >
                  <div className="absolute top-8 left-8 w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <Zap size={18} />
                  </div>
                  <h4 className="text-2xl font-serif mb-4 relative z-10 text-[#F5F5F5]">{c.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs relative z-10 group-hover:text-gray-300 transition-colors mb-4">{c.desc}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="relative z-10 text-[9px] font-bold uppercase tracking-widest text-emerald-400/60 pb-2">Sistema Operativo Conectado</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTION - Direct Conversion Path */}
        <section id="servicios" className="py-32 bg-[#080808] text-white rounded-[4rem] mx-4 mb-10 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_100%,#10b98110_0%,transparent_60%)] pointer-events-none" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center mb-24 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">{AGENCY_CONTENT.home.selection.title}</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">Selecciona tu vehículo de crecimiento para ver la arquitectura específica.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/b2b" className="group p-10 lg:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 block relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:text-white/10 transition-colors">
                  <TrendingUp size={100} strokeWidth={0.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6 block">Opción 01 // Industrial & Corp.</span>
                <h3 className="text-4xl font-serif mb-6 leading-none text-[#F5F5F5]">{AGENCY_CONTENT.home.selection.b2b.title}</h3>
                <p className="text-gray-500 mb-12 leading-relaxed text-base max-w-[280px]">
                  {AGENCY_CONTENT.home.selection.b2b.desc}
                </p>
                <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                  Explorar Arquitectura <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/servicios" className="group p-10 lg:p-14 bg-emerald-600 rounded-[3rem] hover:bg-emerald-500 transition-all duration-500 block relative overflow-hidden text-black shadow-lg">
                <div className="absolute top-0 right-0 p-10 text-black/10 group-hover:text-black/5 transition-colors">
                  <Zap size={110} strokeWidth={0.5} />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/50 mb-6 block">Opción 02 // Velocity & Scale</span>
                <h3 className="text-4xl font-serif mb-6 leading-none">{AGENCY_CONTENT.home.selection.services.title}</h3>
                <p className="text-black/70 mb-12 leading-relaxed text-base max-w-[280px]">
                  {AGENCY_CONTENT.home.selection.services.desc}
                </p>
                <div className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-95">
                  {AGENCY_CONTENT.home.selection.services.cta} <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL QUOTE - Focused Closing */}
        <section className="py-40 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="container max-w-4xl mx-auto"
          >
            <blockquote className="text-4xl md:text-6xl font-serif leading-tight mb-10 tracking-tight text-white/90">
              "{AGENCY_CONTENT.home.philosophy.quote}"
            </blockquote>
            <div className="h-px w-16 bg-emerald-500 mx-auto mb-8 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <cite className="block text-[9px] font-bold uppercase tracking-[0.4em] not-italic text-gray-600">
              — {AGENCY_CONTENT.brand.name} Engineering Standards
            </cite>
          </motion.div>
        </section>

        <div className="pb-20">
          <Link href="/auditoria" className="mx-auto block w-fit">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl shadow-emerald-500/20"
            >
              Agendar Auditoría Gratuita
            </motion.div>
          </Link>
        </div>
      </main>
    </Background>
  );
}
