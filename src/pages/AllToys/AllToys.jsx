import { useLoaderData } from "react-router-dom";
import TableCard from "../AddToy/TableCard";


const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="overflow-x-auto mx-40 mb-20">
            <p className="text-4xl font-bold my-4 text-center">All Toys</p>
            {/* head */}
            <table className="table bg-slate-200 ">
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name / Sub Category</th>
                        <th>Price / Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <TableCard
                            key={toy._id}
                            toy={toy}
                        ></TableCard>)
                    }
                </tbody>
            </table>
        </div >
    );
};

export default AllToys;