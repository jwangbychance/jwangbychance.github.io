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
      "I created a responsive landing page that is dynamic to each rental business with the purpose of showcasing their rental categories and products. The landing pages were specifically made for rental businesses and great for SEO. It also acts as a cool storefront for rental businesses to send all of their traffic to.",
    tech: "React, Tailwind CSS, Next.js",
    src: "/assets/gecko-biz-landing-page.mp4",
  },
  {
    title: "Continue as guest at checkout feature",
    content:
      "I developed the feature to allow users to continue as guest rather than signing up to the platform at checkout for a faster user experience. This is because some users want to rent a product ASAP without having to handle the hassle that comes with creating an account. In addition, users cannot proceed with checkout unless they agree to the T&Cs (Deployed to production, video content is for staging).",
    tech: "MongoDB, GraphQL, React, Stripe API",
    src: "/assets/gecko-guest_checkout.png",
  },
  {
    title: "Filters feature for specific categories",
    content:
      "I introduced filters that dynamically render for each specific category i.e. speakers page renders filters for connectivity, chairs renders filters for foldable chairs etc. This solves the issues for users not being able to select products that are specific to there needs and creates a streamlined experience for them.",
    tech: "Next.js, React, Tailwind CSS, Material UI",
    src: "/assets/gecko-apply-filters.mp4",
  },
  {
    title: "Estimate delivery + setup price on product pages",
    content:
      "Prior to this feature, users had to book a product and proceed to checkout just to check the delivery costs to their address. I introduced a feature that allows users to instead estimate the delivery price for their address on product pages that have delivery available.",
    tech: "React.js, Tailwind CSS, GraphQL",
    src: "/assets/gecko-estimate-delivery.mp4",
  },
  {
    title: "New cart style popup",
    content:
      "The old cart page was not optimal in terms of design and experience. When adding a product to a cart, users were redirected to a /cart page route. Instead, I reworked the way users check their cart by easily pressing the cart icon that opens a modal to instantly check all their rented products in a simple popup.",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-cart-popup.mp4",
  },
  {
    title: "New responsive searchbar",
    content:
      "Pressing the searchbar would redirect the users to a /search page instead of quickly allowing users to search for products. I reworked the search as a popup so that users can seamlessly input what product and from where (The search was responsive for both desktop and mobile users).",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-search-desktop.mp4",
  },
  {
    title: "Login Auth",
    content:
      "I created a full stack web application using the MERN stack that authenticates and authorises users using cookie sessions as a personal project.",
    tech: "React, Express.js, MongoDB, Tailwind CSS, Node.js",
    src: "/assets/login_example.png",
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
        className="cursor-pointer font-semibold flex justify-center items-center m-5 p-3 border-[#d3b6ff] border-2 rounded-xl w-[300px] h-[150px] md:w-[300px] md:h-[200px] scale-[98%] hover:scale-100 transition ease-in-out duration-500 shadow-lg"
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
      <div className="flex flex-wrap text-center justify-center md:justify-start">
        {projects.map(({ title, content, tech, src }) => (
          <ProjectBox title={title} content={content} tech={tech} src={src} />
        ))}
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectGrid;
