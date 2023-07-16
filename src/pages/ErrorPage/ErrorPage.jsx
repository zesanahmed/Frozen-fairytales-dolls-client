import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img src="https://img.freepik.com/premium-photo/error-404-page-found-design-3d_327483-174.jpg?size=626&ext=jpg&ga=GA1.2.1189830713.1677247708&semt=ais" alt="Error" className=" mb-8" />
            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mb-8">
                We apologize, but an error has occurred.
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold"
            >
                Go back to the homepage
            </Link>
        </div>
    );
};

export default ErrorPage;
