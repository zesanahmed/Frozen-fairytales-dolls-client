import React, { useEffect, useState } from 'react';
import AnimationCard from './AnimationCard';

const AnimationCategory = () => {
    const [categories, setCategories] = useState([]);
    const url = `https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/dolls?category=animation`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [url])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-6'>
            {
                categories.map(category => <AnimationCard
                    key={category._id}
                    category={category}
                ></AnimationCard>)
            }
        </div>
    );
};

export default AnimationCategory;