import { Link, useParams } from "react-router-dom";
import "./Shop.css";
import { commodityses } from "../../Data";
import Navbarpro from "../../components/navbarpro/Navbarpro";
import { TbShoppingBagPlus } from "react-icons/tb";
import Footer from "../../components/footer/Footer";

function Shop() {
  const IdItem = useParams().IdItem;
  const Data = commodityses.find((item) => item.id == IdItem);
  return (
    <div>
      <Navbarpro />
      <div
        data-aos="frip-right"
        className="shop-item-contaainer border rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8  mt-14 grid grid-cols-12 gap-2 "
      >
        <h1 className="col-span-12 Lamia border-r-4 border-red-600 px-3 my-3 ">
          {Data.name}
        </h1>
        <div className="img-item-container col-span-12 w-[50%] h-[250px] mx-auto  p-10">
          <img
            className="img-item w-full h-full cursor-pointer transition-all hover:scale-150"
            src={Data.img}
          />
        </div>
        <h1 className="Lamia col-span-12 border-r-4 border-r-slate-800 py-2 px-2">
          معرفی محصول
        </h1>
        <div className="col-span-full p-20 text-justify">
          <h3>{Data.desc}</h3>
        </div>
        <h1 className="col-span-12 text-center Lamia text-2xl mt-5">فقط</h1>
        <div className="price-item col-span-12 text-center mt-4">
          <h1 className="Lamia">
            <span className="price-item Lamia">{Data.price}</span>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Data.off}
          </h1>
        </div>
        <div className="col-span-12 text-center mt-3  text-2xl">
          <h1 className="Lamia cursor-pointer">{Data.currency}</h1>
        </div>
        <div className="buy-btn-pro col-span-12 my-5 p-5 ">
          <button className="w-full p-2 rounded border " type="submit">
            <Link className="flex flex-row-reverse justify-center items-center ">
              <TbShoppingBagPlus size={22} />
              <span className="Lamia mx-2"> افزودن به سبد خرید</span>
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
