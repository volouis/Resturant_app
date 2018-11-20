import React from "react";

export const Header = props => (
    <thead className="thead-dark">
        <tr>
            {props.sections.map(element => {
                return(
                    <th scope="col" key={element}>{element}</th>
                )
            })}
        </tr>
    </thead>
);
