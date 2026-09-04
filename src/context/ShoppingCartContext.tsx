"use client";
import { createContext, useState } from "react";
type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};
type CartItems = {
  id: number;
  qty: number;
};

export const ShoppingCartContext = createContext({});

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItem, setCartItem] = useState<CartItems[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
