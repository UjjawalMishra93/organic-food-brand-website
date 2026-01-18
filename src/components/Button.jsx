import React from 'react';

const Button = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`bg-yellow hover:bg-yellow-hover text-brown-dark font-sans font-medium py-3 px-8 rounded-full shadow-button transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] flex items-center justify-center ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
