import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Shop.css";
import { commodityses } from "../../Data";

function Shop() {
  const IdItem = useParams().IdItem;
  const Data = commodityses.find((item) => item.id == IdItem);
  return (
    <div>
      <Navbar />
      <img src={Data.img} />
    </div>
  );
}

export default Shop;
