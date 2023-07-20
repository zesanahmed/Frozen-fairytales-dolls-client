import { Link } from "react-router-dom";


const MyToysCard = ({ myToy, handleDelete, handleUpdateToy }) => {
    const { _id, pictureUrl, sellerName, name, subCategory, price, quantity, rating } = myToy;




    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {pictureUrl && <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>Price: ${price}
                <br />
                <span>Quantity: {quantity}</span>
            </td>
            <td>Rating: {rating}</td>
            <td>
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">View Details</button></Link>
            </td>
            <th>
                <Link to={`/updateToy/${_id}`}><button onClick={() => handleUpdateToy(_id)} className="btn btn-ghost btn-xs">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysCard;