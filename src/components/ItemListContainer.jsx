import { data } from "autoprefixer"
import { UserRound } from "lucide-react"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"









function ItemListContainer() {

  

   


    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        
        const promesa = new Promise((resolve) => {

            setTimeout(() => {
                resolve(
                  [
                    {
                        "id": 1,
                        "name": "Auto",
                        "image": "/auto.png",
                        "description": "Auto description",
                        "price": 1000,
                        "stock": 10
                    },
                    
                    {
                        "id": 2,
                        "name": "Camioneta",
                        "image": "/camioneta.png",
                        "description": "Camioneta description",
                        "price": 2000,
                        "stock": 6
                    },
                
                    {
                        "id": 3,
                        "name": "Moto",
                        "image": "/moto.png",
                        "description": "Moto description",
                        "price": 600,
                        "stock": 3
                
                    }
                
                
                
                    ]
                )
                
                })
          
            }, 2000)
            
          promesa.then((resolve) => {
            
            console.log(resolve)
            
          })


    })

        
    return (
              
              products.map((item) => {

                return <ItemList products={products} key={products.id} />
              })

        
            )
    

}

export default ItemListContainer