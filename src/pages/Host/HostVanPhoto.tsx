import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
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
    <div className=" w-80 mx-auto my-4">
      <img
        src={currntVan.imageUrl}
        className="host-van-detail-image rounded-lg"
      />
    </div>
  );
};

export default HostVanPhoto;
