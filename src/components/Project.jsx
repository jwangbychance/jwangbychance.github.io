import { useState } from "react";
import Modal from "react-modal";

const Project = ({ title, content, tech, showModal, toggleModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={toggleModal}
      closeTimeoutMS={500}
      className="border-2 border-[#d3b6ff] rounded-xl p-5 h-[90%] mx-auto top-10 w-[90%] relative bg-white"
    >
      <div className="font-bold text-2xl mb-8 text-[#8b3dff]">{title}</div>
      <button
        onClick={toggleModal}
        className="text-black w-8 absolute top-3 right-3"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="font-semibold mb-5">Technologies: {tech}</div>
      <div>{content}</div>
    </Modal>
  );
};

export default Project;
