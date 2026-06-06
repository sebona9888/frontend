import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CompanyIntro = () => {
    const [count, setCount] = useState({
        projects: 0,
        years: 0,
        commitment: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => ({
                projects: prev.projects < 10 ? prev.projects + 1 : 10,
                years: prev.years < 5 ? prev.years + 1 : 5,
                commitment: prev.commitment < 100 ? prev.commitment + 2 : 100,
            }));
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-14 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* LEFT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-6 sm:p-8 md:p-10 rounded-2xl
                    bg-white border border-slate-100 shadow-sm space-y-6 md:space-y-7"
                >
                    {/* glow */}
                    <div className="absolute -top-10 -left-10 w-32 sm:w-44 h-32 sm:h-44 bg-[#C8851F]/10 blur-3xl rounded-full" />

                    <div className="relative z-10 space-y-5 md:space-y-6">

                        <div className="text-[#C8851F] text-xs tracking-[0.25em] font-semibold uppercase">
                            Who We Are
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#002244] leading-snug md:leading-tight">
                            Building Ethiopia’s Infrastructure Future
                        </h2>

                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-xl">
                            GGS Infrastructure PLC delivers high-quality construction,
                            road development, and civil works that support national growth.
                            We focus on durability, safety, and engineering excellence.
                        </p>

                        {/* COUNTERS */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-14 pt-4 text-center sm:text-left">

                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002244]">
                                    {count.projects}+
                                </p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002244]">
                                    {count.years}+
                                </p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
                                    Years
                                </p>
                            </div>

                            <div>
                                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#002244]">
                                    {count.commitment}%
                                </p>
                                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">
                                    Commitment
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SECTION (VIDEO) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <video
                        src="/videos/about.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* TEXT AREA */}
                    <div className="absolute bottom-0 w-full p-4 sm:p-6 md:p-10 text-white space-y-2 sm:space-y-3">

                        <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                            GGS Infrastructure PLC
                        </h3>

                        <p className="text-xs sm:text-sm text-white/80">
                            Roads · Bridges · Civil Works
                        </p>

                        <div className="h-px bg-white/20 my-3 sm:my-4" />

                        <div className="flex justify-between text-xs sm:text-sm">

                            <div>
                                <p className="text-[#C8851F] font-bold">10+</p>
                                <p className="text-white/60 text-[10px] sm:text-xs">Projects</p>
                            </div>

                            <div>
                                <p className="text-[#C8851F] font-bold">5+</p>
                                <p className="text-white/60 text-[10px] sm:text-xs">Years</p>
                            </div>

                            <div>
                                <p className="text-[#C8851F] font-bold">100%</p>
                                <p className="text-white/60 text-[10px] sm:text-xs">Quality</p>
                            </div>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CompanyIntro;