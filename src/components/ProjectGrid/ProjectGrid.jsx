import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "react-modal";
import "./ProjectGrid.css";
import Project from "../Project";

const ProjectGrid = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="font-open-sans flex flex-col">
      <Navbar />
      <div
        onClick={setShowModal}
        className="cursor-pointer m-5 p-3 border-[#d3b6ff] border-2 rounded-xl w-3/12"
      >
        Project 1
      </div>
      <Project showModal={showModal} toggleModal={toggleModal} />
      <Footer />
    </div>
  );
};

export default ProjectGrid;
