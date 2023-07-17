import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-900 text-white py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                </div>
                <img className='h-10 w-16 mr-2' src="https://img.freepik.com/free-vector/fantasy-characters-logo-with-fairy-tales-white_1308-48092.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="" />
                <p className='text-2xl font-bold'>Frozen Fairy Dolls</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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
                </ul>
            </div>
            <div className="navbar-end">

                <div className='flex items-center gap-2'>
                    <img className="h-8 w-8 md:ml-4 md:mr-4 rounded-full" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="User Profile" />
                    <div>
                        {/* <Link><button className="btn btn-outline bg-white px-4">Log out</button></Link> */}
                        <Link to="/login"><button className="btn btn-outline bg-white px-4">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>

        // <nav className="bg-gray-900 text-white py-4">
        //     <div className="container mx-auto flex items-center justify-between">
        //         <div className="flex items-center">
        //             <img src="https://img.freepik.com/free-vector/fantasy-characters-logo-with-fairy-tales-white_1308-48092.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="Logo" className="h-10 w-16 mr-2" />
        //             <h1 className="text-xl font-semibold">FrozenFairytalesDolls</h1>
        //         </div>
        //         <div className="flex items-center hidden sm:block">
        //             <ul className="flex space-x-6">
        //                 <li>
        //                     <Link to="/">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/categories">All Categories</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/mytoys">My Toys</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/addtoy">Add a Toy</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/blogs">Blogs</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/login">Login</Link>
        //                 </li>
        //             </ul>
        //             <img className="h-8 w-8 ml-10 mr-4 rounded-full" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="User Profile" />
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;
