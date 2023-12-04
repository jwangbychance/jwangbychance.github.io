import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="text-sm md:text-base font-open-sans w-full">
      <Navbar />
      <div
        className={`transition-all ${
          show ? "opacity-100" : "opacity-0"
        } duration-500 ease-in-out`}
      >
        <div className="p-10">
          <div className="mb-2 md:text-4xl font-bold md:mb-10">About me</div>
          <div className="md:flex">
            <div className="md:w-4/12 flex flex-col">
              <div className="mb-5">
                Hey, I'm Jackson, student at the University of Technology
                Sydney.
              </div>
              <div className="mb-5">
                I'm interested in web dev (both frontend and backend),
                contributing to open source projects such as{" "}
                <a
                  href="https://vitest.dev/"
                  className="group text-[#8b3dff] transition-all duration-300 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Vitest
                  </span>
                </a>{" "}
                and using Node.js to program my very own Discord bot for fun.
              </div>
              <div className="mb-5">
                I was given an opportunity to work at a hyper-growth startup
                company (Gecko.rent) that was accelerated by the{" "}
                <a
                  href="https://www.techstars.com/"
                  className="group text-[#8b3dff] transition-all duration-300 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Techstars
                  </span>
                </a>
                &nbsp;program as part of a small, dynamic team where I made
                meaningful contributions while continuing to grow with the
                company.
              </div>
              <div className="font-bold">
                Check out my contributions{" "}
                <Link
                  to="../projects"
                  className="group text-[#8b3dff] transition-all duration-300 ease-in-out"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    here!
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex md:block mt-5 md:-mt-20 md:ml-auto md:mr-20 md:w-fit items-center gap-5">
              <div>
                <img
                  className="rounded-md md:mt-10"
                  src="/assets/geckorent.png"
                  alt="Logo of Gecko.rent"
                />
              </div>
              <div>
                <img
                  className="md:w-9/12 md:mt-20"
                  src="/assets/techstars.png"
                  alt="Logo of Techstars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
