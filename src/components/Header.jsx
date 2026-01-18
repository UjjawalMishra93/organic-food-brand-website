import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-6 px-8 md:px-16 max-w-screen-2xl mx-auto w-full bg-cream z-50 relative">
            <div className="flex-1">
                {/* Logo - using a font that looks close to the reference */}
                <div className="text-4xl font-serif font-black text-brown-dark tracking-tighter cursor-pointer flex items-center gap-1">
                    <span className="italic">Orchard</span>
                    <span className="text-xs align-top -mt-4 opacity-70">TM</span>
                </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-center flex-1 space-x-12">
                {['Series', 'Foods', 'Drinks', 'Philosophy'].map((item) => (
                    <a key={item} href="#" className="text-brown-muted hover:text-brown-dark font-medium text-sm md:text-base uppercase tracking-wide transition-colors">
                        {item}
                    </a>
                ))}
            </nav>

            <div className="flex-1 flex justify-end items-center space-x-4">
                <button className="p-2 text-brown-dark hover:bg-black/5 rounded-full transition-colors hidden sm:block">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <Button className="hidden md:block rounded-full px-8 bg-brown-dark text-white hover:bg-brown-muted shadow-none text-sm">Contact</Button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-brown-dark"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-cream shadow-xl border-t border-brown-muted/10 p-6 flex flex-col items-center space-y-6 md:hidden">
                    {['Series', 'Foods', 'Drinks', 'Philosophy'].map((item) => (
                        <a key={item} href="#" className="text-brown-dark font-medium text-lg uppercase tracking-wide">
                            {item}
                        </a>
                    ))}
                    <div className="pt-4 flex flex-col items-center gap-4 w-full">
                        <div className="relative w-full max-w-xs">
                            <input type="text" placeholder="Search..." className="w-full pl-4 pr-10 py-3 rounded-full bg-white border border-brown-muted/20 focus:outline-none focus:border-yellow" />
                            <svg className="w-5 h-5 text-brown-muted absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <Button className="w-full max-w-xs bg-brown-dark text-white shadow-none">Contact Us</Button>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Header;
