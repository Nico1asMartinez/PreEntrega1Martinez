



function ItemList({producto}) {

  const {id, name, image, description, price, stock} = producto




  return (

    <div>
          <img src={image}  />

    </div>

        
  )
        
    
  
}

export default ItemList