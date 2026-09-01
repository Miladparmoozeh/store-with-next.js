import Container from "@/components/container";
import Productitem from "@/components/Productitem";
import Link from "next/link";
import React from "react";

function Store() {
  const data = [
    {
      id: "1",
      image:
        "https://learn.zoner.com/wp-content/uploads/2025/04/zoner-ai-image-creator.jpg",
      title: " محصول یک ",
      description: " داداش دادش ",
      price: 55,
    },
    {
      id: "2",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
      title: " محصول دو ",
      description: " داداش دادش ",
      price: 142,
    },
    {
      id: "3",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20250227/pngtree-a-meadow-of-pink-and-purple-flowers-image_17005010.jpg",
      title: " محصول سه ",
      description: " داداش دادش ",
      price: 425,
    },
    {
      id: "4",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20240727/pngtree-beautiful-snapseed-background-hd-4k-for-editing-image-image_16118056.jpg",
      title: " محصول چهار ",
      description: " داداش دادش ",
      price: 47,
    },
    {
      id: "5",
      image:
        "https://erkesphoto.com/wp-content/uploads/2023/11/20210308_D850_5976-Edit2-sharpened.jpg",
      title: " محصول پنج ",
      description: " داداش دادش ",
      price: 11,
    },
  ];

  return (
    <Container>
      <h1 className="text-right py-4">Store</h1>

      <div className="grid grid-cols-4 gap-4 ">
        {data.map((item) => (
         <Link key={item.id} href={`/store/${item.id}`}>
           <Productitem  {...item} />
         </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
