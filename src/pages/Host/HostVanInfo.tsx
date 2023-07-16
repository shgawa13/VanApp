import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
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
    <div className=" bg-slate-400">
      <section>
        <h4>Name: {currntVan.name}</h4>
        <h4>Category: {currntVan.type}</h4>
        <h4>Description: {currntVan.description}</h4>
        <h4>Name: {currntVan.name}</h4>
      </section>
    </div>
  );
};

export default HostVanInfo;
