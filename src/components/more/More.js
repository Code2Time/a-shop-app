import React, { useState } from "react";
import "./More.css";
import { commodityses2 } from "../../Data";
import Commoditys from "../commoditys/Commoditys";

function More() {
  const [productdata, setProductdata] = useState(commodityses2);
  return (
    <>
      {productdata.map((item) => (
        <Commoditys key={item.id} {...item} />
      ))}
    </>
  );
}

export default More;
