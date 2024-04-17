import { data } from "autoprefixer"
import { UserRound } from "lucide-react"
import { useEffect, useState } from "react"









function ItemListContainer(props) {

  

   


    
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
              data.map((item) => {

                return <div key={item.id}> <h1>{item.name}</h1> </div>
              })
          

              
              )

        
        
    

}

export default ItemListContainer