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
    <div className="font-open-sans w-full">
      <Navbar />
      <div
        className={`transition-all ${
          show ? "opacity-100" : "opacity-0"
        } duration-500 ease-in-out`}
      >
        <div className="p-10">
          <div className="text-4xl font-bold mb-10">About me</div>
          <div>
            Hey, I'm Jackson, an IT and business student at the University of
            Technology Sydney.
          </div>
          <div className="mb-10">
            I'm interested in web dev (both frontend and backend) and using
            Node.js to program
            <br />
            my very own Discord bot for fun
          </div>
          <div className="mb-10">
            I was given an opportunity to work at a hyper-growth startup company
            that was accelerated
            <br /> by the{" "}
            <a
              href="https://www.techstars.com/"
              className="group text-[#8b3dff] transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-[#8b3dff] to-[#8b3dff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Techstars
              </span>
            </a>
            &nbsp;program as part of a small, dynamic team where I made
            meaningful contributions <br /> while continuing to grow with the
            company
          </div>
          <div>
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
