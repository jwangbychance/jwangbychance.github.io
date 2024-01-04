import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./ProjectGrid.css";
import Project from "../Project";
import BuildingStorefront from "../../../public/svgs/BuildingStorefront";
import Guest from "../../../public/svgs/Guest";
import Delivery from "../../../public/svgs/Delivery";
import Filters from "../../../public/svgs/Filters";
import Cart from "../../../public/svgs/Cart";
import Search from "../../../public/svgs/Search";
import LoginAuth from "../../../public/svgs/LoginAuth";
import Steam from "../../../public/svgs/Steam";

interface ProjectBoxProps {
  title: string;
  content: string;
  tech: string;
  src: string;
  portrait: JSX.Element | string;
  link?: string;
}

const projects = [
  {
    title: "Gecko business landing page",
    content:
      "I created a responsive landing page that is dynamic to each rental business with the purpose of showcasing their rental categories and products. The landing pages were specifically made for rental businesses and great for SEO. It also acts as a cool storefront for rental businesses to send all of their traffic to.",
    tech: "React, Tailwind CSS, Next.js",
    src: "/assets/gecko-biz-landing-page.mp4",
    portrait: <BuildingStorefront />,
  },
  {
    title: "Continue as guest checkout",
    content:
      "I developed the feature to allow users to continue as guest rather than signing up to the platform at checkout for a faster user experience. This is because some users want to rent a product ASAP without having to handle the hassle that comes with creating an account. In addition, users cannot proceed with checkout unless they agree to the T&Cs (Deployed to production, video content is for staging).",
    tech: "MongoDB, GraphQL, React, Stripe API",
    src: "/assets/gecko-guest_checkout.png",
    portrait: <Guest />,
  },
  {
    title: "Filters for specific categories",
    content:
      "I introduced filters that dynamically render for each specific category i.e. speakers page renders filters for connectivity, chairs renders filters for foldable chairs etc. This solves the issues for users not being able to select products that are specific to there needs and creates a streamlined experience for them.",
    tech: "Next.js, React, Tailwind CSS, Material UI",
    src: "/assets/gecko-apply-filters.mp4",
    portrait: <Filters />,
  },
  {
    title: "Estimate delivery price",
    content:
      "Prior to this feature, users had to book a product and proceed to checkout just to check the delivery costs to their address. I introduced a feature that allows users to instead estimate the delivery price for their address on product pages that have delivery available.",
    tech: "React.js, Tailwind CSS, GraphQL",
    src: "/assets/gecko-estimate-delivery.mp4",
    portrait: <Delivery />,
  },
  {
    title: "New cart style popup",
    content:
      "The old cart page was not optimal in terms of design and experience. When adding a product to a cart, users were redirected to a /cart page route. Instead, I reworked the way users check their cart by easily pressing the cart icon that opens a modal to instantly check all their rented products in a simple popup.",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-cart-popup.mp4",
    portrait: <Cart />,
  },
  {
    title: "New responsive searchbar",
    content:
      "Pressing the searchbar would redirect the users to a /search page instead of quickly allowing users to search for products. I reworked the search as a popup so that users can seamlessly input what product and from where (The search was responsive for both desktop and mobile users).",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-search-desktop.mp4",
    portrait: <Search />,
  },
  {
    title: "Login Auth",
    content:
      "I created a full stack web application using the MERN stack that authenticates and authorises users using cookie sessions as a personal project.",
    tech: "React, Express.js, MongoDB, Tailwind CSS, Node.js",
    src: "/assets/login_auth.mp4",
    portrait: <LoginAuth />,
  },
  {
    title: "Steam Tracker",
    content:
      "I created a Next.js application that allows users to search steam IDs using the Steam Web API. It displays the steam users information such as their friends, recently owned games, game news and achievements.",
    tech: "React, Next.js, Tailwind CSS",
    src: "/assets/steam_tracker.mp4",
    portrait: <Steam />,
  },
  {
    title: "Wang's Therapy Centre",
    content:
      "I collaborated to create an appointment bookings website that allows bookings to be made for users. The website uses technologies such as Next.js for SEO and is deployed using Vercel. The purpose of the website is to allow bookings, display the services Wang's Natural Therapy Centre offers, business opening hours and location of the business.",
    tech: "React, Next.js, Tailwind CSS",
    src: "/assets/wangs-therapy.mp4",
    portrait: "/assets/wangs-logo.png",
    link: "https://www.wangs-therapy.com/",
  },
];

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  content,
  tech,
  src,
  portrait,
  link,
}) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={toggleModal}
        className="flex-col gap-10 cursor-pointer text-sm font-semibold flex justify-end text-start items-start m-5 p-3 border-[#d3b6ff] border-2 rounded-xl w-[300px] h-[150px] md:w-[220px] md:h-[300px] relative top-0 hover:-top-5 transition-all ease-in-out duration-500 shadow-lg hover:bg-[#8B3DFF]/30 hover:text-[#8B3DFF]"
      >
        {typeof portrait === "string" ? <img src={portrait} /> : portrait}
        <div className="text-black">{title}</div>
      </div>
      <Project
        title={title}
        content={content}
        tech={tech}
        src={src}
        showModal={showModal}
        toggleModal={toggleModal}
        link={link}
      />
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="font-open-sans flex flex-col">
      <Navbar />
      <div className="flex justify-center mt-3">
        <div className="text-center grid md:grid-cols-5">
          {projects.map(({ title, content, tech, src, portrait, link }) => (
            <ProjectBox
              title={title}
              content={content}
              tech={tech}
              src={src}
              portrait={portrait}
              link={link}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-20 md:mt-[157px]">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectGrid;
