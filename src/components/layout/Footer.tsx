
import { AGENCY_CONTENT } from "@/data/AGENCY_CONTENT";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#10b98105_0%,transparent_50%)]" />
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-16 items-start mb-20">
                    <div>
                        <img src={AGENCY_CONTENT.brand.logo.light} alt={AGENCY_CONTENT.brand.name} className="h-6 w-auto mb-8" />
                        <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed mb-8">
                            {AGENCY_CONTENT.brand.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">Navegación</h4>
                        {AGENCY_CONTENT.routes.map((r) => (
                            <Link key={r.path} href={r.path} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors w-fit">
                                {r.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">Legal & Contacto</h4>
                        <a href="mailto:hola@inagencia.com" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors underline underline-offset-4">hola@inagencia.com</a>
                        <span className="text-sm text-gray-500">Lima, Perú • REMOTO</span>
                        <div className="mt-4 flex gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-emerald-400 transition-colors text-white/40">LinkedIn</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-emerald-400 transition-colors text-white/40">Instagram</span>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                        &copy; {new Date().getFullYear()} {AGENCY_CONTENT.brand.name}. Boutique Growth Systems.
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
                        Designed for Performance 2026
                    </div>
                </div>
            </div>
        </footer>
    );
}
