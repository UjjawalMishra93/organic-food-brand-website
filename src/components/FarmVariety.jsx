import React from 'react';
import honeyImg from '../assets/tr-honey-final.png';
import basketImg from '../assets/tr-basket.png';

const FarmVariety = () => {
    return (
        <section id="foods" className="py-24 bg-offwhite">
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
                <div className="text-center mb-16">
                    <span className="text-brown-muted font-medium tracking-wide uppercase text-sm block mb-4">
                        Straight From The Field
                    </span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-brown-dark">
                        Nature's Daily Harvest
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Card 1: Honey & Breakfast - Redesigned to fix glitch */}
                    <div className="bg-white rounded-[3rem] p-10 flex flex-col justify-between border border-cream relative group hover:shadow-2xl transition-shadow duration-500">
                        <div className="relative z-20">
                            <h3 className="text-3xl font-serif font-bold text-brown-dark mb-4">Golden Mornings</h3>
                            <p className="text-brown-muted opacity-80 max-w-xs mb-8">
                                Start your day with our raw organic honey, perfect for drizzles over fresh granola.
                            </p>
                            <div className="inline-flex items-center gap-2 text-brown-dark font-bold underline cursor-pointer hover:text-yellow transition-colors">
                                <span>Shop Breakfast</span>
                                <span>→</span>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center relative z-10 block">
                            {/* Static subtle glow instead of animated blob to avoid rendering artifacts */}
                            <div className="absolute inset-0 bg-yellow/5 rounded-full blur-3xl transform scale-90 -z-10"></div>
                            <img
                                src={honeyImg}
                                alt="Honey Dripping on Granola"
                                className="w-full max-w-[450px] object-contain block transform-gpu backface-hidden will-change-transform"
                                style={{ imageRendering: 'high-quality', BackfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}
                            />
                        </div>
                    </div>

                    {/* Card 2: Fresh Basket */}
                    <div className="bg-brown-dark rounded-[3rem] p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif font-bold text-cream mb-4">Weekly Basket</h3>
                            <p className="text-cream/70 max-w-xs mb-8">
                                Subscribe to our weekly delivery of hand-picked seasonal greens, fruits, and essentials.
                            </p>
                            <div className="inline-flex items-center gap-2 text-yellow font-bold underline cursor-pointer hover:text-white transition-colors">
                                <span>Subscribe Now</span>
                                <span>→</span>
                            </div>
                        </div>
                        <div className="mt-8 relative flex justify-center">
                            <div className="absolute inset-0 bg-black/20 rounded-full blur-3xl scale-75"></div>
                            <img
                                src={basketImg}
                                alt="Fresh Vegetables Basket"
                                className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FarmVariety;
