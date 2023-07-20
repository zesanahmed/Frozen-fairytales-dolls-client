import { useEffect, useState } from 'react';
import DisneyCard from './DisneyCard';

const DisneyCategory = () => {
    const [categories, setCategories] = useState([]);
    const url = `https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/dolls?category=disney`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [url])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-6'>
            {
                categories.map(category => <DisneyCard
                    key={category._id}
                    category={category}
                ></DisneyCard>)
            }
        </div>
    );
};

export default DisneyCategory;