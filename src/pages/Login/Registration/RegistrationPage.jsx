import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();

        // Perform registration logic with the form data
        // This function will be called when the user submits the form
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Registration</h1>
            <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSignUp}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
                        Photo URL
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="photoURL"
                        placeholder="Enter your photo URL"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold w-full"
                    type="submit"
                >
                    Register
                </button>
                <p className="text-sm mt-1 ml-1">
                    Already Have an Account? Please, <Link to='/login' className="text-bold text-base 
                    font-semibold text-blue-500">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default RegistrationPage;
