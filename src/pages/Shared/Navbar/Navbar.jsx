import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://img.freepik.com/free-vector/fantasy-characters-logo-with-fairy-tales-white_1308-48092.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="Logo" className="h-10 w-16 mr-2" />
                    <h1 className="text-xl font-semibold">FrozenFairytalesDolls</h1>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">All Categories</Link>
                        </li>
                        <li>
                            <Link to="/mytoys">My Toys</Link>
                        </li>
                        <li>
                            <Link to="/addtoy">Add a Toy</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    <img className="h-8 w-8 ml-10 mr-4 rounded-full" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="User Profile" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
