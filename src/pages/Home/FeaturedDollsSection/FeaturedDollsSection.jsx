import React from 'react';

const FeaturedDollsSection = () => {
    return (
        <div className='md:my-6'>
            <p className='m-4 text-5xl text-center font-semibold'>Featured The Frozen Princesses</p>
            <div className="md:relative mx-4 mb-4">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/b_frozen_character_elsa_18503_dd72f09d.jpeg?region=0%2C0%2C2048%2C640"
                    alt="Image"
                    className="w-full rounded-lg h-auto"
                />
                <div className="md:absolute bottom-6 left-6">
                    <div className="  p-4 md:text-white md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">Elsa</h2>
                        <p className="text-base">Elsa is the perfect mythic character  magical and larger than life. Grateful her kingdom now accepts her, she works hard to be a good queen. But deep down she can not help but wonder why she was born with powers.</p>
                    </div>
                </div>
            </div>
            <div className="md:relative mx-4">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/b_frozen_characterbanners_anna_18503_6688fddd.jpeg?region=0%2C0%2C2048%2C640"
                    alt="Image"
                    className="w-full h-auto rounded-lg"
                />
                <div className="md:absolute bottom-6 left-6">
                    <div className="  p-4 md:text-white md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">Anna</h2>
                        <p className="text-base">Anna is the perfect fairytale character; unflappable, she is the forever optimist. Anna is fine as long as she has her family, Arendelle is safe, and she never has to be alone again.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDollsSection;
