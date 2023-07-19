import React from 'react';
import { Link } from 'react-router-dom';

const TableCard = ({ toy }) => {
    const { _id, sellerName, name, subCategory, price, quantity } = toy;

    // const handleDetails =(id) => {

    // }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{toy?.sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{subCategory}</span>
            </td>
            <td>Price: ${price}
                <br />
                <span>Quantity: {quantity}</span>
            </td>
            <th>
                <Link to={`/toyDetails/${_id}`}>
                    <button className="btn btn-ghost btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default TableCard;