
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BackgroundProps {
    className?: string;
    children?: React.ReactNode;
    variant?: "default" | "dark" | "mesh" | "premium";
}

export function Background({ className, children, variant = "default" }: BackgroundProps) {
    if (variant === "premium") {
        return (
            <div className={cn("relative min-h-screen bg-[#050505] text-white overflow-hidden", className)}>
                {/* Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                {/* Dynamic Light Sources */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"
                />

                <div className="relative z-10">{children}</div>
            </div>
        );
    }

    if (variant === "dark") {
        return (
            <div className={cn("relative min-h-screen bg-midnight text-white overflow-hidden", className)}>
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10">{children}</div>
            </div>
        );
    }

    if (variant === "mesh") {
        return (
            <div className={cn("relative min-h-screen bg-white text-foreground overflow-hidden", className)}>
                <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10">{children}</div>
            </div>
        );
    }

    return (
        <div className={cn("relative min-h-screen bg-background text-foreground overflow-hidden", className)}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
