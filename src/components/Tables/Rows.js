import React from "react";

export const Rows = props => (
    <tr>
        <td>{props.restaurant.name}</td>
        <td>{props.restaurant.address}</td>
        <td>{props.restaurant.price}</td>
    </tr>
);
