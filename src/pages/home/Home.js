import { useRef, useState } from "react";
import Commoditys from "../../components/commoditys/Commoditys";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./Home.css";
import { commodityses, commodityses2 } from "../../Data";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const [commoditysitem, setCommoditysitem] = useState(commodityses);
  const moreBtn = useRef();
  const deleteHandler = () => {
    moreBtn.current.style.display = "none";
  };

  return (
    <div data-aos-delay="300" data-aos="zoom-in">
      <div className="container-header">
        <Navbar />
      </div>
      <h1
        data-aos="fade-down"
        className="title-sec text-center text-bold  sm:text-3xl my-16 "
      >
        ------ پیشنهادات ویژه -----
      </h1>
      <Slider />
      <h1
        data-aos="fade-down"
        className=" title-sec text-center Lamia sm:text-3xl"
      >
        اخیرا اضافه شده
      </h1>
      <div
        data-aos="fade-down"
        id="commoditys-container1"
        className="rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-2 "
      >
        {commoditysitem.map((item) => (
          <Commoditys {...item} />
        ))}
        <Link
          onClick={deleteHandler}
          data-aos="fade-down"
          ref={moreBtn}
          to="more"
          className="more-products col-span-12 mx-auto my-10 Lamia hover:-translate-y-1"
        >
          موارد بیشتر.....
        </Link>
      </div>
      <div
        data-aos="fade-down"
        className="rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-2 "
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
