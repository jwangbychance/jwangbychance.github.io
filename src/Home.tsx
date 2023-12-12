import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import { Link } from "react-router-dom";
import Footer from "./components/Footer.js";

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
          src="/assets/p5_joker.png"
          alt="Joker from Persona 5"
          onMouseOver={(e) =>
            (e.currentTarget.src = "/assets/p5_joker_masked.png")
          }
          onMouseLeave={(e) => (e.currentTarget.src = "/assets/p5_joker.png")}
          className="rounded-full w-40 md:w-60"
        />
        <div>Full Stack Software Engineer</div>
        <div className="-my-5">UTS</div>
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
          href="/assets/Jackson_Wang_Resume.pdf"
          download
          className="group font-semibold"
        >
          <div className="bg-[#8b3dff] hover:bg-[#7300e6] text-sm text-white p-3 px-4 rounded-full flex gap-2 items-center transition-all duration-200">
            Download Resume
            <div className="w-5 h-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
