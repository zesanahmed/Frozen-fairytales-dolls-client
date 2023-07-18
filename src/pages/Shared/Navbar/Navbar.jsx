import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar  py-4">
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
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/categories">All Categories</Link>
                        </li>
                        <li>
                            {
                                user && <Link to="/mytoys">My Toys</Link>
                            }
                        </li>
                        <li>
                            {user && <Link to="/addtoy">Add a Toy</Link>}
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
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/categories">All Categories</Link>
                    </li>
                    <li>
                        {
                            user && <Link to="/mytoys">My Toys</Link>
                        }
                    </li>
                    <li>
                        {user && <Link to="/addtoy">Add a Toy</Link>}
                    </li>

                </ul>
            </div>
            <div className="navbar-end">

                <div className='flex items-center gap-2'>
                    <p><Tooltip id="my-tooltip" /></p>
                    {
                        user && <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="h-8 w-8 md:ml-4 md:mr-4 rounded-full" src={user.photoURL} alt="User Profile" />
                    }
                    <div>
                        {user ?
                            <Link><button onClick={handleLogOut} className="btn btn-outline bg-white px-4">Log out</button></Link> :
                            <Link to="/login"><button className="btn btn-outline bg-white px-4">Login</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
