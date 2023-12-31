import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const { loading, signIn, googleSignInWithPopup } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Incorrect Password!',
                    text: 'The password you entered is incorrect.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
            })

    }

    const handleSignInWithPopUp = () => {
        googleSignInWithPopup()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col items-center justify-center my-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Email Login</h1>
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold mb-4 w-full"
                    type="submit"
                >
                    Log In
                </button>
                <div onClick={handleSignInWithPopUp}
                    className="btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-semibold w-full"
                    type="button"
                >
                    <FcGoogle className="bg-white"></FcGoogle>
                    Log In with Google
                </div>
                <p className="text-sm mt-1 ml-1">
                    Do not Have an Account? Please, <Link to='/register' className="text-bold text-base 
                    font-semibold text-blue-500">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

