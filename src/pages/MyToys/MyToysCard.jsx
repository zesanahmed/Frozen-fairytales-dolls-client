

const MyToysCard = ({ myToy, handleDelete }) => {
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
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysCard;