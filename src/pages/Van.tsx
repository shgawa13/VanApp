// import React from 'react'
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "./API";
const Van = () => {
  const [searchParams, setSearchPrams] = useSearchParams();
  const searchType = searchParams.get("type");
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  type Error = {
    message: string;
    statusText: any;
    status: any;
  };
  const [error, setErorr] = useState<Error>();

  useEffect(() => {
    async function run() {
      setLoading(true);

      try {
        const data = await getVans();
        setVans(data);
      } catch (err: any) {
        console.log(err);
        setErorr(err);
      } finally {
        setLoading(false);
      }
    }
    run();
  }, []);

  type data = {
    id: string;
    name: string;
    price: number;
    description?: string;
    imageUrl: string;
    type: string;
  };

  // Filtering Vans
  const typeFilter = searchType
    ? vans.filter((el: data) => el.type.toLowerCase() === searchType)
    : vans;

  const vanList = typeFilter.map((el: data) => {
    let { id, name, price, imageUrl, type } = el;

    return (
      <Link
        to={el.id}
        key={id}
        state={{ search: `?${searchParams.toString()}`, type: type }}
        className=" flex  flex-col justify-between flex-wrap pb-6 bg-[#FFF7ED] rounded-lg text-slate-950 font-bold cursor-pointer "
      >
        <img
          src={imageUrl}
          alt="van-img"
          srcSet=""
          className=" w-72 rounded-t-lg"
        />
        <div className=" flex justify-between gap-4">
          <h2 className="ml-2">{name}</h2>
          <h4 className=" mr-2">${price}/day</h4>
        </div>
        <span className="flex justify-self-end">{type}</span>
      </Link>
    );
  });
  // filtering the url
  const handleFilter = (key: string, value: string) => {
    setSearchPrams((prev): string => {
      if (!value) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return `?${prev}`;
    });
  };

  if (loading) {
    return <h1>Loading .... </h1>;
  }
  // handling error here
  if (error) {
    return <h1>There is an Error: {error.message}</h1>;
  }
  return vans ? (
    <div className="flex flex-col items-center">
      <div className=" bg-[#FFF7ED] my-4 w-96  rounded-sm">
        <h1 className=" pl-3 font-bold text-[#121212]">
          Explore our van options
        </h1>
        <div className=" flex justify-center font-bold gap-4 text-[#121212] p-4 ">
          <button
            className=" hover:bg-red-400 focus:bg-red-400  p-2 rounded-lg "
            onClick={() => handleFilter("type", "simple")}
          >
            simple
          </button>
          <button
            className="hover:bg-green-600 focus:bg-green-600  p-2 rounded-lg"
            onClick={() => handleFilter("type", "rugged")}
          >
            rugged
          </button>
          <button
            className="hover:bg-yellow-400 focus:bg-yellow-400  p-2 rounded-lg"
            onClick={() => handleFilter("type", "luxury")}
          >
            luxury
          </button>
          {searchType && (
            <button className="" onClick={() => handleFilter("type", "")}>
              Clear filter
            </button>
          )}
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-start  gap-y-10 gap-x-10   ">
        {vanList}
      </div>
    </div>
  ) : (
    <h1>Looding..</h1>
  );
};

export default Van;
