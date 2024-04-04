import { Link } from "react-router-dom";
import "./Commoditys.css";

function Commoditys({ id, title, img, name, desc, price, off, currency }) {
  return (
    <>
      <div
        data-aos="flip-left"
        id="commoditys-item"
        className="odd2 col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3  text-center py-1 px-3 row-auto rounded-md mt-4"
      >
        <h1 className=" my-2 Lamia">{title}</h1>
        <div id="commoditys-img-container " className="my-2 h-[200px] w-full">
          <img
            className="h-[80%] w-[100%] commoditys-img cursor-pointer rounded-sm shadow  shadow-white"
            src={img}
          />
        </div>
        <div className="my-2 text-right border-r-4 border-amber-500 px-2">
          <h1 className="Lamia">{name}</h1>
        </div>
        <div id="commoditys-info" className="my-2">
          <p className="text-justify px-2 Yekan text-sm">{desc}</p>
        </div>
        <div className="my-2 flex justify-around ">
          <p
            className="Lamia"
            style={{
              textDecorationLine: "line-through",
              textDecorationColor: "red",
            }}
          >
            {price}
          </p>
          <b className="Lamia">{off}</b>
        </div>
        <h1 className="Lamia ">{currency}</h1>
        <button
          id="commoditys-btn"
          type="button"
          className=" col-span-12 my-10 mx-auto text-center items-center justify-center w-3/4 h-[30px] rounded-md shadow shadow-slate-600 transition-all hover:-translate-y-1  hover:shadow  "
        >
          <Link to={`/shop/${id}`} className="Lalezar  ">
            خرید
          </Link>
        </button>
      </div>
    </>
  );
}

export default Commoditys;
