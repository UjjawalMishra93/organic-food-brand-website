import React from 'react';
import Button from './Button';
import levitateImg from '../assets/tr-levitating.png';

const CreativeSection = () => {
    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div className="order-2 lg:order-1 space-y-8 relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full border border-brown-muted/20 bg-white/30 backdrop-blur-sm">
                        <span className="text-brown-dark font-bold uppercase tracking-wider text-xs">Our Process</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-brown-dark leading-none">
                        Pure. Fresh. <br /> <span className="italic text-brown-muted/80">Creatively</span> Yours.
                    </h2>

                    <p className="text-brown-muted text-lg leading-relaxed opacity-80 max-w-lg">
                        We believe in the artistry of nature. Our creative process involves hand-picking the finest ingredients at the peak of their freshness and delivering them to you with zero compromise.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div>
                            <h4 className="text-4xl font-serif font-bold text-brown-dark mb-2">100%</h4>
                            <p className="text-sm text-brown-muted uppercase tracking-wider font-medium">Organic Origins</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-serif font-bold text-brown-dark mb-2">0%</h4>
                            <p className="text-sm text-brown-muted uppercase tracking-wider font-medium">Additives</p>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl">
                            Discover The Creating
                        </Button>
                    </div>
                </div>

                {/* Right: Creative Image */}
                <div className="order-1 lg:order-2 relative flex justify-center">
                    {/* Decorative background elements that will sit behind the transparent image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>

                    {/* The Image Container */}
                    <div className="relative z-10 w-full max-w-lg transform hover:-rotate-2 transition-transform duration-700 ease-out">
                        <img
                            src={levitateImg}
                            alt="Explosion of fresh ingredients"
                            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Floating badges/elements could be added here for more 'creative' feel */}
                    <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-organic z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                        <span className="text-2xl">🌿</span>
                    </div>
                    <div className="absolute top-10 -right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-organic z-20 hidden md:block animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                        <span className="text-2xl">🍓</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CreativeSection;
