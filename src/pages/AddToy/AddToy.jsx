import { data } from 'autoprefixer';
import { useState } from 'react';
import Swal from 'sweetalert2'

const AddToy = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const user = { pictureUrl, name, sellerName, sellerEmail, subCategory, price, rating, quantity, description }
        console.log(user);


        fetch("https://frozen-fairytales-dolls-server-zesanahmed.vercel.app/toys", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Added!',
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
            <p className='text-center text-4xl text-gray-700 font-bold pt-10'>Add Toy</p>
            <form onSubmit={handleSubmit} className='mx-20 px-40 pb-10'>
                <div className="mb-4">
                    <label htmlFor="pictureUrl" className="block text-gray-700 font-bold mb-2">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        name="pictureUrl"

                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Toy Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"

                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-gray-700 font-bold mb-2">
                        Seller Name:
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        name="sellerName"

                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block text-gray-700 font-bold mb-2">
                        Seller Email:
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        name="sellerEmail"

                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-gray-700 font-bold mb-2">
                        Sub-category:
                    </label>
                    <select
                        id="subCategory"
                        name="subCategory"

                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select Sub-category</option>
                        <option value="Disney princes">Disney princes</option>
                        <option value="Frozen dolls">Frozen dolls</option>
                        <option value="Animation characters">Animation characters</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"

                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                        Rating:
                    </label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"

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
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;
