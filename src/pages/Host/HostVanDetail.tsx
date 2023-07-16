import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  interface Data {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  }
  const [currntVan, setCurrentVan] = useState<Data>();
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currntVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className=" w-9/12 mx-auto">
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className=" bg-slate-400  flex shrink-0">
          <div className="host-van-detail">
            <img src={currntVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currntVan.type}`}>
                {currntVan.type}
              </i>
              <h3>{currntVan.name}</h3>
              <h4>${currntVan.price}/day</h4>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-fuchsia-4005">
        <div className=" flex items-center bg-slate-100 shadow-lg text-black h-16 w-80  mx-auto rounded-lg ">
          <nav className=" flex  ml-5 gap-3  ">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive ? "border-b-2 border-[#242424]" : ""
              }
            >
              Detiails
            </NavLink>
            <NavLink
              to="price"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-[#242424]" : ""
              }
            >
              Price
            </NavLink>
            <NavLink
              to="photo"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-[#242424]" : ""
              }
            >
              Photo
            </NavLink>
          </nav>
        </div>
        <Outlet context={currntVan} />
      </section>
    </>
  );
};

export default HostVanDetail;
