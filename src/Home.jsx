import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="font-open-sans">
      <Navbar />
      <div className="flex flex-col items-center gap-10">
        <h1
          className={`transition-all ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          } duration-500 ease-in-out text-4xl md:text-5xl font-bold mt-10 mb-3`}
        >
          Hey, I'm Jackson!
        </h1>
        <img
          src="../src/assets/p5_joker.png"
          className="rounded-full w-28 md:w-60"
        />
        <div>UTS student with a passion for Web Dev</div>
        <div>
          Check out my{" "}
          <Link
            to="projects"
            className="group text-[#8b3dff] transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              projects!
            </span>
          </Link>
        </div>
        <a
          href="../src/assets/JacksonWang_Resume.pdf"
          download
          className="group font-semibold text-[#8b3dff] transition-all duration-300 ease-in-out"
        >
          <div className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Resume PDF Download
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
