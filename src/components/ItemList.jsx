

function ItemList({ products }) {

    const {  name, image, description, price, stock } = products





  return (

    <div>ItemList
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>



    </div>
  )
}

export default ItemList