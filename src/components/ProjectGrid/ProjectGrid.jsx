import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Modal from "react-modal";
import "./ProjectGrid.css";
import Project from "../Project";

const projects = [
  {
    title: "Gecko business landing page",
    content:
      "I created a responsive landing page that is dynamic to each rental business with the purpose of showcasing their rental categories and products",
    tech: "React, Tailwind CSS, Next.js",
    src: "/assets/gecko-biz-landing-page.mp4",
  },
  {
    title: "Continue as guest at checkout feature",
    content:
      "I developed the feature to allow users to continue as guest rather than signing up to the platform at checkout for a faster user experience. In addition, users cannot proceed with checkout unless they agree to the T&Cs (Deployed to production, video content is for staging)",
    tech: "MongoDB, GraphQL, React, Stripe API",
    src: "/assets/gecko-guest_checkout.png",
  },
  {
    title: "Filters feature for specific categories",
    content:
      "I introduced filters that dynamically render for each specific category",
    tech: "Next.js, React, Tailwind CSS, Material UI",
    src: "/assets/gecko-apply-filters.mp4",
  },
  {
    title: "Estimate delivery + setup price on product pages",
    content:
      "I introduced a feature that allows users to instead estimate the delivery price for their address rather than having to proceed to checkout just to check the delivery price on product pages with delivery available",
    tech: "React.js, Tailwind CSS, GraphQL",
    src: "/assets/gecko-estimate-delivery.mp4",
  },
  {
    title: "New cart style popup",
    content:
      "I reworked the way users check their cart. Instead of having to be redirected to a /cart page, they can easily press the cart icon to check all their rented products in a simple popup",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-cart-popup.mp4",
  },
  {
    title: "New responsive searchbar",
    content:
      "I reworked the search as a popup so that users can seamlessly input what product and from where rather than being redirected to a /search page",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-search-desktop.mp4",
  },
  {
    title: "Login Auth",
    content:
      "I created a full stack web application using the MERN stack that authenticates and authorises users using cookie sessions",
    tech: "React, Express.js, MongoDB, Tailwind CSS, Node.js",
    src: "",
  },
];

const ProjectBox = ({ title, content, tech, src }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={toggleModal}
        className="cursor-pointer m-5 p-3 border-[#d3b6ff] border-2 rounded-xl w-3/12 scale-[98%] hover:scale-100 transition ease-in-out duration-500 shadow-lg"
      >
        {title}
      </div>
      <Project
        title={title}
        content={content}
        tech={tech}
        src={src}
        showModal={showModal}
        toggleModal={toggleModal}
      />
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="font-open-sans flex flex-col">
      <Navbar />
      <div>
        {projects.map(({ title, content, tech, src }) => (
          <ProjectBox title={title} content={content} tech={tech} src={src} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectGrid;
