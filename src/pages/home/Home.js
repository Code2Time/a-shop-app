import { useState } from "react";
import Commoditys from "../../components/commoditys/Commoditys";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./Home.css";
import { commodityses } from "../../Data";

function Home() {
  const [commoditysitem, setCommoditysitem] = useState(commodityses);

  return (
    <div>
      <div className="container-header">
        <Navbar />
      </div>
      <h1 className="title-sec text-center text-bold  sm:text-3xl my-16 ">
        ------ پیشنهادات ویژه -----
      </h1>
      <Slider />
      <h1 className=" title-sec text-center Lamia sm:text-3xl">اخیرا اضافه شده</h1>
      <div
        id="commoditys-container1"
        className="rounded-lg max-w-[1000px] h-auto w-5/6 m-auto py-8 px-8 relative mt-4 grid grid-cols-12 gap-2 "
      >
        {commoditysitem.map((item) => (
          <Commoditys {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
