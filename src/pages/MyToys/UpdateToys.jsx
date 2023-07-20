import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateToys = () => {
    const toy = useLoaderData();
    const { _id, pictureUrl, sellerName, sellerEmail, name, subCategory, price, quantity, rating } = toy;

    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const user = { price, quantity, description }
        console.log(user);


        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Toy Updated Successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    };
    return (
        <div className='bg-slate-300'>
            <p className='text-center text-4xl text-gray-700 font-bold pt-10'>Update Toy</p>
            <form onSubmit={handleUpdateToy} className='mx-20 px-40 pb-10'>



                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        defaultValue={price}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                        Available Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={quantity}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Detail Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="border rounded px-3 py-2 w-full"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white  py-2 px-4 rounded hover:bg-blue-600"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateToys;