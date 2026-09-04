import axios from "axios";
import { log } from "console";
import React, { useEffect, useState } from "react";
import { IProductItemProps } from "./Productitem";
import AddToCart from "./AddToCart";
import { formatNumberWithCommas } from "./utils/number";
interface ICartItemProps{
  id:number
  qty:number
}
function Cartitem({id,qty}:ICartItemProps) {

  const [data, setData] = useState({} as IProductItemProps);

  useEffect(()=>{
    axios(`http://localhost:3004/products/${id}`).then(result=>{
      const{data}= result
      setData(data)
     
      
    })
  },[])
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
        <div className="col-span-10 text-right px-4 ">
            <h2 className="text-xl font-bold"> {data.title} </h2>
            <p>
              
              تعداد: <span>{qty}</span>
            </p>
            <p className="rtl">
              
              قیمت محصول: <span>{formatNumberWithCommas (data.price ?? 0)}$</span>
            </p>

            <AddToCart id={id.toString()} />
        </div>

        <img
            className="col-span-2"
            src={data.image}
            alt=""
        />
    </div>
  );
}

export default Cartitem;
