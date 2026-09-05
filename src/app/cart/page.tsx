"use client";
import Cartitem from "@/components/Cartitem";
import Container from "@/components/container";
import { IProductItemProps } from "@/components/Productitem";
import { formatNumberWithCommas } from "@/components/utils/number";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import axios from "axios";
import { log } from "node:console";
import { useEffect, useState } from "react";
interface IDiscountData{ id:number;code:string;percentage:number}

function Cart() {
  const {cartItems}= useShoppingCartContext();
  
  const [data, setData] = useState<IProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState("")
  const [finalPrice, setFinalPrice] = useState(0)
  const [discountedPeice, setDiscountedPeice] = useState(0)

  useEffect(()=>{
    axios(`http://localhost:3004/products`).then(result=>{
      const{data}= result
      setData(data)
     
      
    })
  },[])

  let totalPrice=cartItems.reduce((total,item)=>{

            let selectedProduct=data.find((product)=> product.id == item.id.toString())

            return total+ (selectedProduct?.price || 0)* item.qty

          }, 0)

  
  const handleSubmitDiscount= ()=>{
    axios(`http://localhost:3004/discounts?code=${discountCode}`).then(result=>{
      console.log(result);
      const data= result.data as IDiscountData[]
      let discountedPeice=totalPrice *data[0].percentage/100;
      let finalPrice= totalPrice-discountedPeice
      setFinalPrice(finalPrice)
      setDiscountedPeice(discountedPeice)
      
    })
    
    
  }







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
          
          formatNumberWithCommas(totalPrice)}$
          </span>{" "}
          
        </h3>
        
        <h3 className="rtl">
          {" "}
          سود شما از خرید: <span>{formatNumberWithCommas(discountedPeice)}$</span>{" "}
        </h3>
        <h3 className="rtl">
          {" "}
          قیمت نهایی: <span>{formatNumberWithCommas(finalPrice)}$</span>{" "}
        </h3>

        <div>
          <button onClick={handleSubmitDiscount} className="bg-sky-600 text-white px-4 py-1 rounded">
            {" "}
            اعمال کد تخفیف{" "}
          </button>
          <input
            className=" text-right border"
            placeholder="کد تخفیف را وارد کنید"
            type="text"
            onChange={(e)=>setDiscountCode(e.target.value)}
          />
        </div>
      </div>
    </Container>
  );
}

export default Cart;
