import "../index.css";
import bgImg from "../assets/imgs/about.jpg";
const About = () => {
  return (
    <div className="flex  flex-col min-h-[50vh]  ">
      <img src={bgImg} className=" max-w-full h-1/4 " />
      <div className=" flex  flex-col     lg:w-4/5	 m-auto h-auto">
        <h1 className=" text-center text-[#fff] text-[1.6rem] font-[700]">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className=" px-8 mt-2">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
        </p>
        <p className=" px-8 mt-2">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className=" bg-[#FFCC8D] flex flex-col  gap-3  w-4/5	 mx-auto my-8 h-[30vh] rounded-lg ">
        <h2 className="text-[#161616] text-[1.5rem] ml-8">
          Your destination is waiting.
        </h2>
        <h2 className="text-[#161616] text-[1.5rem] ml-8">
          Your van is ready.
        </h2>
        <button className=" shrink w-44 bg-black rounded-lg px-[0.75rem] py-[1.375rem] ml-8 text-[#fff]">
          Explore our vans
        </button>
      </div>
    </div>
  );
};

export default About;
