import React from 'react';
import highlightImg from '../assets/highlight.png';

const HighlightSection = () => {
    return (
        <section className="py-24 bg-cream">
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="bg-yellow/20 absolute inset-0 rounded-full transform scale-90 blur-3xl"></div>
                    <img src={highlightImg} alt="Organic Ingredients" className="relative z-10 w-full object-contain drop-shadow-2xl hover:rotate-1 transition-transform duration-700" />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="inline-block px-4 py-1 rounded-full border border-brown-muted/20">
                        <span className="text-brown-dark font-bold uppercase tracking-wider text-xs">Premium Quality</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-brown-dark leading-tight">Apirorlon <br /> Organic Base</h2>
                    <p className="text-brown-muted text-lg leading-relaxed opacity-80">
                        Plant-based nutrition that powers your day. We source only the finest organic ingredients from certified farms relative to nature.
                    </p>
                    <div className="flex gap-12 pt-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-organic text-2xl">
                                🌾
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-brown-dark text-lg">100% Nature</h4>
                                <p className="text-sm text-brown-muted">Pure ingredients</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-organic text-2xl">
                                🥣
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-brown-dark text-lg">Fresh Pick</h4>
                                <p className="text-sm text-brown-muted">Direct from farm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HighlightSection;
