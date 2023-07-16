const Home = () => {
  return (
    <div className=" flex flex-col h-[80vh] w-full bg-home bg-cover bg-center  lg:bg-no-repeat  justify-center items-center">
      <h1 className=" text-[2.25rem] text-[#FFFFFF] text-center">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className=" text-center py-5 px-5">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="  bg-[#FF8C38] font-bold  text-[#fff] py-4 px-28 rounded-sm">
        Find your van
      </button>
    </div>
  );
};

export default Home;
