import React, { useEffect, useState } from 'react';
import FrozenCard from './FrozenCard';

const FrozenCategory = () => {
    const [categories, setCategories] = useState([]);
    const url = `http://localhost:5000/dolls?category=frozen`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [url])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-6'>
            {
                categories.map(category => <FrozenCard
                    key={category._id}
                    category={category}
                ></FrozenCard>)
            }
        </div>
    );
};

export default FrozenCategory;