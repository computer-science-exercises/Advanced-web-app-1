import React from "react";
import Card from "./Card";

const ShoppingList = (props) => {
    return (
        <div>
            {props.groceries.map(grocery => (
                <Card grocery={grocery}/>
            ))}
        </div>
    );
};

export default ShoppingList;
