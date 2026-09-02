import Cartitem from "@/components/Cartitem";
import Container from "@/components/container";

function Cart() {
  return (
    <Container>
      <h1 className="text-right my-4 "> سبد خرید </h1>

      <div className="">
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </div>

      <div className="border shadow-md text-right p-4">
        <h3 className="rtl">
          {" "}
          قیمت کل: <span>365$</span>{" "}
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

            <button className="bg-sky-600 text-white px-4 py-1 rounded"> اعمال کد تخفیف </button>
          <input className=" text-right border" placeholder="کد تخفیف را وارد کنید" type="text" />
          
        </div>
      </div>
    </Container>
  );
}

export default Cart;
