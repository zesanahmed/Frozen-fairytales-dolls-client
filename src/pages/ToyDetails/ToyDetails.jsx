import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const loadedToy = useLoaderData();
    const { _id, pictureUrl, sellerName, sellerEmail, name, subCategory, price, rating, quantity, description } = loadedToy;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-8 lg:mx-4" >
                <img src={pictureUrl} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="pt-8 pb-2"><span className="text-xl font-semibold">Sub Category:</span> {subCategory}</p>
                    <p>
                        <span className="text-xl font-semibold">Description:</span>
                        <br />
                        <span className="text-sm text-slate-600">
                            {description}
                        </span></p>
                    <div className="mt-10 flex gap-10">
                        <div>
                            <p className="pb-2"><span className="text-lg font-semibold">Seller Name: </span> {sellerName}</p>
                            <p className="pb-2"><span className="text-lg font-semibold">Seller Email: </span> {sellerEmail}</p>
                        </div>
                        <div>
                            <p className="pb-2"><span className="text-lg font-semibold">Price: </span> {price}</p>
                            <p className="pb-2"><span className="text-lg font-semibold">Quantity: </span> {quantity}</p>
                            <p className="pb-2"><span className="text-lg font-semibold">Ratings: </span> {rating}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ToyDetails;