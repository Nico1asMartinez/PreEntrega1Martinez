import { UserRound } from "lucide-react"
import { useEffect, useState } from "react"
import data from "../products"





function ItemListContainer(props) {


    
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        
        const promesa = new Promise((resolve) => {

            setTimeout(() => {
                resolve({data})
                
                })
          
            }, 2000)
            
          promesa.then((resolve) => {
            
            console.log(resolve)
            
          })


    })

        


    return (
        

        data.map((product) => {

            return (
                <div>
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                    <h1>{product.stock}</h1>
                    <img src={product.image} className="w-40"/>
                </div>
            )
        }





    )
)
}

export default ItemListContainer