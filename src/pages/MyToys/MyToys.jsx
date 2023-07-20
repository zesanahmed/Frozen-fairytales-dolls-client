import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyToysCard from './MyToysCard';
import Swal from 'sweetalert2'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [addedToys, setAddedToys] = useState([]);

    const url = `https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/addedToys?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedToys(data))
    }, []);

    const handleDelete = (id) => {
        const procced = confirm('are you sure you want to delete')


        if (procced) {
            fetch(`https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/addedToys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        const remaining = addedToys.filter(toy => toy._id !== id)
                        setAddedToys(remaining);
                    }
                })
        }
    };

    const handleUpdateToy = (id) => {
        fetch(`https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/addedToys/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }


    return (
        <div className='mx-40 my-10'>
            <p className="text-4xl font-bold my-4 text-center ">My Toys</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
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
                                handleDelete={handleDelete}
                                handleUpdateToy={handleUpdateToy}
                            ></MyToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;