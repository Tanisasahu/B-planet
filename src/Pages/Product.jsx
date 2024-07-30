import React from "react";
import image from "../assets/image 1.png";

function Product() {
  return (
    <div className="w-full bg-customColorbg">
      <div className="flex pt-20 pl-40 pr-40 justify-center">
        <div className="w-1/2 mb-20 flex flex-col gap-3">
          <div>
            <h1 className="text-3xl">Tree 1</h1>
            <p className="pt-5">
              Three Leaf Clover, symbolizes good luck and fortune in many
              cultures.
            </p>
          </div>
          <div className="relative">
            <h1 className="text-2xl">Plant Care Guide</h1>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5">
              <div>Water</div>
              <div className="pl-36">
                Allow the soil to dry out completely before watering.
              </div>
            </div>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5">
              <div>Light</div>
              <div className="pl-36">Bright indirect light environments.</div>
            </div>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <div className="flex pt-5">
              <div>Tips</div>
              <div className="pl-36">
                Gently insert a toothpick into the soil to determine if your
                plant needs watering.
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Description</h1>
            <hr className="border-t-2 mt-5 border-inputColorbg" />
            <p className="pt-5">
              A caudiciform plant with reddish and green leaves. Interestingly,
              the leaves fold up in pairs during the evening. Keep away from
              children and pets.
              <br />
              Plants images depicted are solely for illustration purposes only
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={image} width={350} alt="Plant image" />
        </div>
      </div>
    </div>
  );
}

export default Product;
