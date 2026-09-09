"use client";

import Container from "@/components/container";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const Dashboard = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    console.log(newProduct);

    axios({
      method: "POST",
      url: "http://localhost:3004/products",
      data: {
        id: Math.floor(Math.random() * 1000),
        image: newProduct.image,
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
      },
    });
  };

  return (
    <div className=" bg-linear-to-br form-pink-200 via-red-300 to-sky-200   p-6 ">
      <Container>
        <div className="flex flex-col-3 rtl">
          <input
            onChange={handleChangeProduct}
            name="title"
            type="text"
            placeholder="عنوان"
          />
          <input
            onChange={handleChangeProduct}
            name="price"
            type="text"
            placeholder="قیمت"
          />
          <input
            onChange={handleChangeProduct}
            name="image"
            type="text"
            placeholder="عکس"
          />
        </div>

        <textarea
          onChange={handleChangeProduct}
          name="description"
          className="w-full mt-4 rtl border rounded"
          placeholder="توضیحات"
        ></textarea>

        <div className="rtl">
          <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white rounded px-4 py-1 rtl"
        >
          {" "}
          ساخت محصول جدید{" "}
        </button>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
