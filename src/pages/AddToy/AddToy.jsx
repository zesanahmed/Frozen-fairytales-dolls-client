import { useState } from 'react';

const AddToy = () => {
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: 0,
        rating: 0,
        quantity: 0,
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToyData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or data processing here
        console.log(toyData);
    };

    return (
        <div className='bg-slate-300'>
            <p className='text-center text-4xl text-gray-700 font-bold pt-10'>Add Toy</p>
            <form onSubmit={handleSubmit} className='mx-20 px-40'>
                <div className="mb-4">
                    <label htmlFor="pictureUrl" className="block text-gray-700 font-bold mb-2">
                        Picture URL of the toy:
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        name="pictureUrl"
                        value={toyData.pictureUrl}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={toyData.name}
                        onChange={handleChange}
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
                        value={toyData.sellerName}
                        onChange={handleChange}
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
                        value={toyData.sellerEmail}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-gray-700 font-bold mb-2">
                        Sub-category:
                    </label>
                    <input
                        type="text"
                        id="subCategory"
                        name="subCategory"
                        value={toyData.subCategory}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={toyData.price}
                        onChange={handleChange}
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
                        value={toyData.rating}
                        onChange={handleChange}
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
                        value={toyData.quantity}
                        onChange={handleChange}
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
                        value={toyData.description}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;
