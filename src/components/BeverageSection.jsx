import React from 'react';
import Button from './Button';
import bottles from '../assets/bottles.png';

const BeverageSection = () => {
    return (
        <section className="py-24 bg-cream">
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-5 gap-8 bg-offwhite rounded-[3rem] p-8 md:p-12 shadow-sm">

                {/* Left Info Card */}
                <div className="lg:col-span-2 bg-cream rounded-[2.5rem] p-10 flex flex-col justify-between h-full min-h-[400px]">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-brown-dark mb-6">Óiceo</h2>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center text-brown-dark font-bold text-xs">e</span>
                            <p className="text-brown-muted text-sm font-medium">Sustainable farming growth</p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                { icon: '🥛', text: 'Daily fresh milk' },
                                { icon: '🍯', text: 'Raw honey' },
                                { icon: '🥚', text: 'Organic eggs' }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-3 bg-white/50 rounded-xl">
                                    <span className="text-xl">{item.icon}</span>
                                    <div className="flex flex-col">
                                        <span className="text-brown-dark font-bold text-sm block">Production</span>
                                        <span className="text-brown-muted text-xs">{item.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 pt-8 border-t border-brown-muted/10">
                        <p className="text-xs text-brown-muted uppercase tracking-widest font-bold">Nature's Best</p>
                    </div>
                </div>

                {/* Right Product Card */}
                <div className="lg:col-span-3 bg-yellow/20 rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden group">
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <span className="relative z-10 text-brown-muted font-serif italic text-lg mb-2">Refreshing</span>
                    <h2 className="relative z-10 text-5xl md:text-6xl font-serif font-bold text-brown-dark mb-10 leading-tight">
                        SEMODJ <br /> HE PRIGHT
                    </h2>

                    <div className="relative z-10 mb-10 transform group-hover:scale-105 transition-transform duration-500">
                        <img src={bottles} alt="Organic Juice Bottles" className="w-full max-w-sm object-contain drop-shadow-2xl" />
                    </div>

                    <div className="relative z-10">
                        <Button className="font-bold tracking-wide">Purchase</Button>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default BeverageSection;
