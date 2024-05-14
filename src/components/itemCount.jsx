import { Button } from "antd";
import React, { useState } from "react";

function ItemCount({ onAdd }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0); // Resetear el contador después de agregar al carrito
    }
  };

  return (
    <div className="item-count flex items-center">
      <Button onClick={decrement} className="mr-2">-</Button>
      <span className="mr-2 text-xl">{count}</span>
      <Button onClick={increment} className="mr-2">+</Button>
      <Button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">Add to Cart</Button>
    </div>
  );
}

export default ItemCount;










/*function ItemCount({ onAdd }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
    };

    return (
        <div className="item-count flex items-center">
            <Button onClick={decrement} className="mr-2 ">-</Button>
            <span className="mr-2 text-xl">{count}</span>
            <Button onClick={increment} className="mr-2 ">+</Button>
            <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">Add to Cart</button>
        </div>
    );
}

export default ItemCount;*/
