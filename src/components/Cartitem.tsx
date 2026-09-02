import React from "react";

function Cartitem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
        <div className="col-span-10 text-right px-4 ">
            <h2 className="text-xl font-bold"> اسم محصول </h2>
            <p>
              
              تعداد: <span>3</span>
            </p>
            <p className="rtl">
              
              قیمت محصول: <span>44$</span>
            </p>

            <div className="mt-2">
              <button className="px-4 py-1 bg-sky-500 text-with rounded text-white">
                +
              </button>
              <span className="mx-4">5</span>
              <button className="px-4 py-1 bg-sky-500 text-with rounded text-white ">
                -
              </button>
            </div>
        </div>

        <img
            className="col-span-2"
            src="https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg"
            alt=""
        />
    </div>
  );
}

export default Cartitem;
