import { Link } from "react-router-dom";
import "./Product.css";

function ProductItem(props) {
  return (
    <div data-aos="flip-right" className="card  ">
      <div className="product-img">
        <img className="w-full h-full" src={props.img} alt="img" />
      </div>
      <div className="title my-12">
        <h1 className="Lamia my-5 text-right mr-2 border-r-4 border-orange-400 pr-2">
          {props.title}
        </h1>
      </div>
      <div className="body">
        <h1 className="text-justify w-[80%] m-auto ">{props.desc}</h1>
      </div>
      <button className="buy-btn mt-10 ">
        <Link className="Lamia">خرید</Link>
      </button>
    </div>
  );
}

export default ProductItem;
