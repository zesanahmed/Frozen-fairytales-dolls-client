import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyToysCard from './MyToysCard';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);

    const url = `http://localhost:5000/addedToys?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, []);


    return (
        <div className='mx-40'>
            <p className="text-4xl font-bold my-4 text-center ">My Toys</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price / Quantity</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedToys.map(myToy => <MyToysCard
                                key={myToy._id}
                                myToy={myToy}
                            ></MyToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;