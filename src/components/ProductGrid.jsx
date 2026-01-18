import React from 'react';
import Button from './Button';
import walnuts from '../assets/prod-walnuts.png';
import hazelnuts from '../assets/prod-hazelnuts.png';
import bread from '../assets/prod-bread.png';

const ProductCard = ({ image, name, price, desc }) => (
    <div className="bg-offwhite rounded-[2.5rem] p-8 pb-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="-mt-16 mb-4 relative transition-transform duration-500 ease-out group-hover:-translate-y-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow/10 rounded-full blur-2xl -z-10 group-hover:bg-yellow/20 transition-colors duration-300"></div>
            <img src={image} alt={name} className="w-48 h-48 object-contain drop-shadow-xl relative z-10" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-brown-dark mb-2">{name}</h3>
        <p className="text-brown-muted text-xs mb-6 uppercase tracking-wider font-semibold opacity-60">Natural Grow</p>

        <div className="flex items-center justify-between w-full px-2 mt-auto bg-cream/50 p-2 rounded-2xl">
            <span className="text-xl font-bold text-brown-dark pl-2">{price}</span>
            <Button className="px-6 py-2 text-sm bg-yellow hover:bg-yellow-hover shadow-none">
                Buy
            </Button>
        </div>
    </div>
);

const ProductGrid = () => {
    const products = [
        { id: 1, name: "Birgt Iderrrive", price: "$12.40", image: walnuts, desc: "Fresh organic walnuts" },
        { id: 2, name: "Adlicone", price: "$32.30", image: hazelnuts, desc: "Premium hazelnuts" },
        { id: 3, name: "Manalriuite", price: "$64.57", image: bread, desc: "Whole grain bread" },
    ];

    return (
        <section className="py-24 bg-cream relative">
            {/* Section Title Area */}
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <h2 className="text-5xl font-serif font-bold text-brown-dark">Crty Revival</h2>
                    <div className="flex items-center gap-6 max-w-lg">
                        <img src={walnuts} className="w-16 h-16 object-contain opacity-80" />
                        <div className="text-sm text-brown-muted">
                            <h3 className="font-serif font-bold text-lg text-brown-dark mb-1">Jepnher Tollb</h3>
                            <p className="leading-relaxed opacity-80">Discover nature's finest selections for your daily health and organic living wellness.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </div>
        </section>
    );
};
export default ProductGrid;
