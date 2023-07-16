import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanPrice = () => {
  interface Data {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  }
  const currntVan = useOutletContext<Data>();

  return (
    <div>
      <h3 className="host-van-price">
        ${currntVan.price}
        <span>/day</span>
      </h3>
    </div>
  );
};

export default HostVanPrice;
