import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="background-container">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="mb-5 md:mb-10 px-5">
          <h1 className="text-[#04bade] text-center text-shadow-lg text-shadow-blue-600">
            Code of the Sea
          </h1>
          <h2 className="text-[#b53389] text-center">
            Explore{" "}
            <span className=" text-[#04bade]">Ammar Hairi's journey</span> from
            a <span className=" text-[#04bade]">marine</span> to a{" "}
            <span className=" text-[#04bade]">software engineer</span>.
          </h2>
        </div>

        <Link
          to="/storyboard"
          className="border-2 border-[#b53389] rounded-2xl p-2 hover:border-[#04bade] hover:scale-75"
        >
          <p className="text-white">START</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
