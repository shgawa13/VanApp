// import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";
const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  interface Data {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  }
  const list = vans.map((el) => {
    const { id, name, price, description, imageUrl, type } = el;
    return (
      <Link to={id} key={id} className="host-van-link-wrapper">
        <div className="host-van-single" key={id}>
          <img src={imageUrl} alt={`Photo of ${name}`} />
          <div className="host-van-info">
            <h3>{name}</h3>
            <p>${price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="">
      <h1 className="  text-center font-bold  text-[1.6rem]">
        Your listed vans
      </h1>
      {list.length ? <div className=" px-32">{list}</div> : <h1>Loading...</h1>}
    </div>
  );
};

export default HostVans;
