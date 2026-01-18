import React from 'react';
import Button from './Button';
import heroBowl from '../assets/hero-bowl-hq.png';
import heroStrawberry from '../assets/hero-strawberry.png';
import hdLeavesTop from '../assets/hd-leaves-top.png';
import hdScatter1 from '../assets/hd-scatter-1.png';
import hdScatter2 from '../assets/hd-scatter-2.png';
import hdScatter3 from '../assets/hd-scatter-3.png';

const Hero = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-hero-gradient overflow-hidden">

            {/* Torn Paper Top Edge - Matches Header Background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
                <svg
                    className="relative block w-full h-[30px] md:h-[50px] fill-cream"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Balanced parallel wave - Top Divider (Fills Above) */}
                    <path d="M0,0 H1200 V40 C1100,80 900,0 800,40 C700,80 500,0 400,40 C300,80 100,0 0,40 V0 Z"></path>
                </svg>
            </div>

            {/* Decorative Top Elements */}
            <img src={hdLeavesTop} className="absolute top-12 left-0 w-32 md:w-48 lg:w-64 opacity-90 object-contain pointer-events-none z-20 mix-blend-multiply" alt="" />
            <img src={heroStrawberry} className="absolute top-8 right-0 w-24 md:w-40 lg:w-56 object-contain pointer-events-none z-20 drop-shadow-lg" alt="" />

            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-16 md:pt-8">
                <div className="space-y-8 z-10 text-center lg:text-left">
                    <span className="text-brown-muted font-medium tracking-wide uppercase text-sm block">
                        Started Since 1998 —
                    </span>
                    <h1 className="text-brown-dark text-[clamp(2.75rem,5vw,6rem)] font-serif font-bold leading-none tracking-tight">
                        Nature's <br /> Finest Harvest
                    </h1>
                    <p className="text-brown-muted text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-80">
                        Always providing the best nature has to offer with our dedicated farming organic products.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <Button className="!bg-brown-dark !text-yellow hover:!bg-brown-muted hover:text-white shadow-button px-10 py-4 text-lg">
                            Subscribe
                        </Button>
                    </div>
                    <div className="pt-2">
                        <p className="text-sm font-bold text-brown-dark underline cursor-pointer hover:text-brown-muted transition-colors">
                            Explore Our Types
                        </p>
                    </div>
                </div>

                <div className="relative z-10 flex justify-center lg:justify-end">
                    <div className="relative w-full flex justify-center text-center">
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/20 rounded-full blur-3xl -z-10"></div>

                        {/* Main Bowl - MASSIVE SIZE */}
                        <img
                            src={heroBowl}
                            alt="Fresh Fruits Bowl"
                            className="w-full md:w-[130%] lg:w-[150%] max-w-none object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out transform relative z-10"
                        />

                        {/* Scattered Elements around Bowl */}
                        {/* <img src={heroStrawberry} className="absolute -bottom-16 -left-4 w-24 md:w-36 drop-shadow-xl z-20 rotate-12" alt="" /> */}
                        {/* <img src={hdScatter2} className="absolute top-1/2 -right-8 w-20 md:w-32 drop-shadow-md z-0 opacity-80 rotate-45" alt="" /> */}
                        {/* <img src={hdScatter3} className="absolute -bottom-8 right-12 w-16 md:w-24 drop-shadow-lg z-20 -rotate-12" alt="" /> */}
                    </div>
                </div>
            </div>

            {/* Torn Paper Bottom Edge - Matches Section Below Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none">
                <svg
                    className="relative block w-full h-auto fill-cream"
                    viewBox="0 0 1200 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Balanced parallel wave - Bottom Divider (Fills Below) */}
                    <path d="M0,120 H1200 V40 C1100,80 900,0 800,40 C700,80 500,0 400,40 C300,80 100,0 0,40 V120 Z"></path>
                </svg>
            </div>
        </section>
    );
};
export default Hero;
