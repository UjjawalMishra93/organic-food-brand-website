import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-cream pt-20 pb-8 border-t border-brown-muted/5 relative overflow-hidden">
            {/* Decorative large text background? */}

            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-brown-dark tracking-tight opacity-90">Detgopepteonics</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <span className="text-2xl font-serif font-bold text-brown-dark">Ointel</span>
                        <p className="text-brown-muted text-sm leading-relaxed max-w-xs">
                            We are dedicated to providing the freshest organic produce directly from our fields to your table.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans font-bold text-brown-dark uppercase text-xs tracking-wider">Navigation</h4>
                        <ul className="space-y-3 text-sm text-brown-muted font-medium">
                            <li><a href="#" className="hover:text-yellow transition-colors">Review</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Foods</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Drinks</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Farm Use</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans font-bold text-brown-dark uppercase text-xs tracking-wider">Company</h4>
                        <ul className="space-y-3 text-sm text-brown-muted font-medium">
                            <li><a href="#" className="hover:text-yellow transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-yellow transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-sans font-bold text-brown-dark uppercase text-xs tracking-wider">Connect</h4>
                        <p className="text-brown-muted text-sm font-medium">hello@ointel.organic</p>
                        <p className="text-brown-muted text-sm font-medium">+1 (555) 123-4567</p>
                        <div className="flex gap-4 pt-2">
                            {/* Social icons placeholders */}
                            <div className="w-10 h-10 rounded-full bg-brown-dark text-white flex items-center justify-center cursor-pointer hover:bg-yellow hover:text-brown-dark transition-colors">
                                Twitter
                            </div>
                            <div className="w-10 h-10 rounded-full bg-brown-dark text-white flex items-center justify-center cursor-pointer hover:bg-yellow hover:text-brown-dark transition-colors">
                                Insta
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-brown-muted/10 flex flex-col md:flex-row justify-between items-center text-xs text-brown-muted opacity-60">
                    <p>© 2024 Ointel Organic. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span>Security</span>
                        <span>Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
