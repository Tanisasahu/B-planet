import React, { useState } from "react";
import img2 from "../assets/Hero image 2.png";
import img1 from "../assets/Hero image 1.png";
import Data from "../assets/Data";
import GridBox from './GridBox';

function Home() {
  const [product, setProduct] = useState(Data);

  return (
    <div className="h-screen">
      <div className="flex mt-10 h-75vh justify-evenly">
        <div className="text-5xl mt-16">
          'As interesting <br />
          as a plant
        </div>
        <div className="flex items-end box-border">
          <img src={img2} width={270} loading="lazy" />
          <img src={img1} className="h-80" loading="lazy" />
        </div>
      </div>
      <div>
        <div className="min-h-screen bg-customColorbg flex items-center justify-center">
          <GridBox />
        </div>
      </div>
    </div>
  );
}

export default Home;
