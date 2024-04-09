import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./Product-Item";
import { responsive } from "../../Data";
import { prorducts } from "../../Data";

function Slider() {
  return (
    <div data-aos="fade-down" className="w-[90%] my-32 m-auto ">
      <Carousel responsive={responsive}>
        {prorducts.map((item) => (
          <div className="p-6" key={item.id}>
            <ProductItem {...item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
