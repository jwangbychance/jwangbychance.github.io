import { useState } from "react";
import Modal from "react-modal";

const Project = ({ showModal, toggleModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={toggleModal}
      closeTimeoutMS={500}
      className="border-2 border-[#d3b6ff] rounded-xl p-5 w-[90%] h-[90%] relative top-10 left-20 bg-white"
    >
      <div>Here is my first project</div>
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
    </Modal>
  );
};

export default Project;
