// App.tsx
import "./App.css";
import Menu from "./components/Menu";
import CustomCursor from "./components/Animatable/CursorFollower";
import { useEffect } from "react"; // Don't forget to import useEffect

function App() {
  useEffect(() => {
    // Add 'no-scroll' class to body on mount
    document.body.classList.add("no-scroll");

    return () => {
      // Remove 'no-scroll' class on unmount
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="background-container">
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-[#04bade] text-center ">Project Ammar</h1>
            <h2 className="text-[#b53389] text-center">
              Explore Ammar's journey from a marine to a software engineer.{" "}
            </h2>
          </div>

          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;
