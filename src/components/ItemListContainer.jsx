import { UserRound } from "lucide-react"

function ItemListContainer(props) {

        

    console.log(props)
    console.log(props.nombre)


    return (
        <div>
            <h2>{props.nombre}</h2>
            <UserRound width={50} height={50}/>   
        </div>
    )
}

export default ItemListContainer