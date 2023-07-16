import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className=" flex  flex-col w-80 m-auto bg-gray-100 p-4 rounded">
      <h1 className=" font-bold text-black py-4 px-6">
        Sorry, the page you were looking for was not found
        <span className="text-[1.5rem] text-center">😛</span>
      </h1>
      <Link className=" bg-black py-4 px-6 mx-auto rounded font-bold" to="..">
        Back to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
