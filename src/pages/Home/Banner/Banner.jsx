import React from 'react';

const Banner = () => {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0">
                <img
                    src="https://img.freepik.com/free-vector/magic-castle-winter-day-frozen-river-bank_107791-5003.jpg?w=1060&t=st=1689536383~exp=1689536983~hmac=4de6036dd726312d36f7481c5fa91d6e37e4d85422e98daa4643d497dc0ecb06"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="container mx-auto relative z-10 text-white flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Welcome to Frozen Fairy Dolls
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-10">
                    Discover a world of enchantment with our magical Frozen doll collection
                </p>
                <a
                    href="/categories/frozen-dolls"
                    className="bg-white text-blue-900 py-3 px-8 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Banner;