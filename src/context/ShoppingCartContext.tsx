"use client";
import { createContext, useContext, useState } from "react";
type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};
type CartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
    cartItems: CartItems[]
    hadleIncreaseProductQty:(id:number)=> void
    getProductQty:(id:number)=>number
    cartTotalQty:number
    
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);


export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}



export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const cartTotalQty=cartItems.reduce((totalQty,item)=>{
    return totalQty+item.qty

  },0)

  const getProductQty= (id:number)=>{
    return cartItems.find(item=>item.id==id)?.qty || 0
  }

  const hadleIncreaseProductQty=(id : number)=>{

    setCartItems(currentItem=>{


        let isNotProductExist=currentItem.find(item => item.id == id) == null

        if(isNotProductExist){
            return[...currentItem, {id:id,qty:1}]
        }

        else{
            return currentItem.map(item=>{
                if(item.id== id){
                    return{
                        ...item, 
                        qty:item.qty +1
                    }
                }
                else{
                    return item
                }
            })
        }

    })

  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems ,hadleIncreaseProductQty, getProductQty,cartTotalQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
