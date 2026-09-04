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
    cartItem: CartItems[]
    hadleIncreaseProductQty:(id:number)=> void
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);


export const useShoppingCartContext = ()=>{
    return useContext(ShoppingCartContext)
}



export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItem, setCartItem] = useState<CartItems[]>([]);


  const hadleIncreaseProductQty=(id : number)=>{

    setCartItem(currentItem=>{


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
    <ShoppingCartContext.Provider value={{ cartItem ,hadleIncreaseProductQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
