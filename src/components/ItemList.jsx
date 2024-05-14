
import React from "react";
import Item from "./Item";

function ItemList({ items }) {
    
    return (
        <div className="item-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap- ">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ItemList;


