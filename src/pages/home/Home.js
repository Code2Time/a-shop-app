import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container-header">
        <Navbar />
      </div>
      <h1 className="title-sec text-center text-bold  text-3xl my-16">
        ------ پیشنهادات ویژه -----
      </h1>
      <Slider />
    </div>
  );
}

export default Home;
