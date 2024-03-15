import "./Slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./Product-Item";
import { responsive } from "./ProductData";
import { prorducts } from "./ProductData";

function Slider() {
  return (
    <div className="w-[90%] my-32 m-auto">
      <Carousel responsive={responsive}>
        {prorducts.map((item) => (
          <div>
            {" "}
            <ProductItem {...item} />{" "}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
