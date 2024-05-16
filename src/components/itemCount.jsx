import { useState } from 'react'

function itemCount(props) {
  

  const [itemCount, setItemCount] = useState(0)

  

  const increment = () => {
    setItemCount(itemCount + 1)
  }

  const decrement = () => {
    setItemCount(itemCount - 1)
    }

    const confirm = () => {
      
      props.handleConfirm(itemCount)
      
      
    }





  return (

    <div className="flex gap-3">
      <button className='p-1.5 bg-blue-500 text-white text-lg rounded hover:bg-blue-700' 
      onClick={increment} >+</button>
      <p className='p-1.5 text-lg bg-slate-200 rounded'>{itemCount}</p>
      <button className='p-1.5 text-lg bg-blue-500 text-white rounded hover:bg-blue-700' 
      onClick={decrement} >-</button>
      <button className='p-1.5 text-lg bg-blue-500 text-white rounded hover:bg-blue-700' onClick={confirm}>Agregar al carrito</button>
    </div>
    
  )
}

export default itemCount