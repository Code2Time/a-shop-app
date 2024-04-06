import { useRef, useState } from "react";
import Commoditys from "../../components/commoditys/Commoditys";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./Home.css";
import { commodityses, commodityses2 } from "../../Data";
import { Link, Outlet } from "react-router-dom";
import { TfiArrowCircleUp } from "react-icons/tfi";
import Footer from "../../components/footer/Footer";

function Home() {
  const [commoditysitem, setCommoditysitem] = useState(commodityses);
  const moreBtn = useRef();
  const deleteHandler = () => {
    moreBtn.current.style.display = "none";
  };

  return (
    <>
      <div data-aos-delay="300" data-aos="zoom-in">
        <div id="container-header" className="container-header">
          <Navbar />
        </div>
        <h1
          data-aos="fade-down"
          className="title-sec text-center text-bold  sm:text-3xl my-16 "
        >
          ------ بهم بگو چی میخوای؟ -----
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
          className="rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-5 "
        >
          {commoditysitem.map((item) => (
            <Commoditys key={item.id} {...item} />
          ))}
        </div>
        <div
          data-aos="fade-down"
          className="rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-2 "
        ></div>
      </div>
      <div className="hidden md:block">
        <a href="#container-header">
          <TfiArrowCircleUp
            size={30}
            className="z-10 opacity-65 hover:opacity-100 mr-12 fixed bottom-8 text-black hover:text-gray-900 hover:-translate-y-1 transition-all cursor-pointer"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Home;
