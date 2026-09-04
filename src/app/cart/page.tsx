"use client";
import Cartitem from "@/components/Cartitem";
import Container from "@/components/container";
import { IProductItemProps } from "@/components/Productitem";
import { formatNumberWithCommas } from "@/components/utils/number";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import axios from "axios";
import { log } from "node:console";
import { useEffect, useState } from "react";

function Cart() {
  const {cartItems}= useShoppingCartContext();
  
  const [data, setData] = useState<IProductItemProps[]>([]);

  useEffect(()=>{
    axios(`http://localhost:3004/products`).then(result=>{
      const{data}= result
      setData(data)
     
      
    })
  },[])

  








  return (
    <Container>
      <h1 className="text-right my-4 "> سبد خرید </h1>

      <div className="">
        {cartItems.map((item) => (
          <Cartitem key={item.id} {...item} />
        ))}
      </div>

      <div className="border shadow-md text-right p-4">
        <h3 className="rtl">
          {" "}
          قیمت کل: <span>{
          
          formatNumberWithCommas(cartItems.reduce((total,item)=>{

            let selectedProduct=data.find((product)=> product.id == item.id.toString())

            return total+ (selectedProduct?.price || 0)* item.qty

          }, 0))}$
          </span>{" "}
          
        </h3>
        
        <h3 className="rtl">
          {" "}
          سود شما از خرید: <span>365$</span>{" "}
        </h3>
        <h3 className="rtl">
          {" "}
          قیمت نهایی: <span>365$</span>{" "}
        </h3>

        <div>
          <button className="bg-sky-600 text-white px-4 py-1 rounded">
            {" "}
            اعمال کد تخفیف{" "}
          </button>
          <input
            className=" text-right border"
            placeholder="کد تخفیف را وارد کنید"
            type="text"
          />
        </div>
      </div>
    </Container>
  );
}

export default Cart;
