import React from 'react';

const AnimationCard = ({ category }) => {
    const { img, name, price, rating } = category;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-lg'>Price: ${price}</p>
                <p className='text-lg'>Rating: {rating}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AnimationCard;