
"use client"

import { useShoppingCartContext } from "@/context/ShoppingCartContext"
import { log } from "console"
interface IAddToCartProps{
    id:string
}

function AddToCart({id}:IAddToCartProps) {
    
    const {cartItem,hadleIncreaseProductQty} = useShoppingCartContext()
    
    console.log(cartItem);
    


  return (
    <div><div className='mt-4'>
                    <button onClick={()=>hadleIncreaseProductQty(parseInt(id))} className='px-4 py-2 bg-sky-500 text-with rounded text-white' >+</button>
                <span className='mx-4'>5</span>
                <button className='px-4 py-2 bg-sky-500 text-with rounded text-white '>-</button>
                </div></div>
  )
}

export default AddToCart