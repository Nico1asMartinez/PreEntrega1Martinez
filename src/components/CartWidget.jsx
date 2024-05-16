import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to='/cart' className='text-3xl font-sans flex justify-center gap-2 '>
    <ShoppingCart  />
    </Link>
    
  )
}

export default CartWidget