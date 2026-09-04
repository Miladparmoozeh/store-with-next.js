
"use client"

import { useShoppingCartContext } from "@/context/ShoppingCartContext"
import { log } from "console"
interface IAddToCartProps{
    id:string
}

function AddToCart({id}:IAddToCartProps) {
    
    const {cartItems,hadleIncreaseProductQty,getProductQty,handleDecreaseProductqty,handleRemoveProduct} = useShoppingCartContext()
    
    
    


  return (
    <div>
      
        <div className='mt-4'>
              <button onClick={()=>hadleIncreaseProductQty(parseInt(id))} className='px-4 py-2 bg-sky-500 text-with rounded text-white' >+</button>
              <span className='mx-4'>{getProductQty(parseInt(id))}</span>
              <button onClick={()=>handleDecreaseProductqty(parseInt(id))} className='px-4 py-2 bg-sky-500 text-with rounded text-white '>-</button>
        </div>

      <button onClick={()=>handleRemoveProduct(parseInt(id))}  className="bg-red-500 text-white rounded px-7 py-2 mt-2"> حذف از سبد </button>


    </div>
   )
}

export default AddToCart