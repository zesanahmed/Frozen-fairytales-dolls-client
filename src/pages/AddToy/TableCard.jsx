import React from 'react';

const TableCard = ({ toy }) => {
    const { _id, sellerName, name, subCategory, price, quantity } = toy;
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
                <button className="btn btn-ghost btn-xs">View Details</button>
            </th>
        </tr>
    );
};

export default TableCard;