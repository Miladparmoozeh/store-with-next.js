

interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const Productitem = ({image,price,title}: IProductItemProps) => {
  return (
    <div className="shadow-md">
      <img src={image} />

      <div className="p-2 text-right rtl">
        <h3 className="font-bold"> {title} </h3>
        <p>
          قیمت: <span>${price} </span>
        </p>
      </div>
    </div>
  );
};

export default Productitem;
