import { useState, type ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
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
  portrait: ReactNode | string;
  link?: string;
}

const projects: ProjectBoxProps[] = [
  {
    title: "Gecko business landing page",
    content:
      "I created a responsive landing page that is dynamic to each rental business with the purpose of showcasing their rental categories and products. The landing pages were specifically made for rental businesses and great for SEO. It also acts as a storefront for rental businesses to send their traffic to.",
    tech: "React, Tailwind CSS, Next.js",
    src: "/assets/gecko-biz-landing-page.mp4",
    portrait: <BuildingStorefront />,
  },
  {
    title: "Continue as guest checkout",
    content:
      "I developed a feature that lets users continue as a guest instead of signing up at checkout, making the experience faster for people who want to rent a product without creating an account. Users still need to agree to the terms and conditions before checking out. The feature is deployed to production; the video shows staging.",
    tech: "MongoDB, GraphQL, React, Stripe API",
    src: "/assets/gecko-guest_checkout.png",
    portrait: <Guest />,
  },
  {
    title: "Filters for specific categories",
    content:
      "I introduced filters that dynamically render for each category. For example, the speakers page shows connectivity filters, while the chairs page shows filters for foldable chairs. This helps users find products that fit their needs.",
    tech: "Next.js, React, Tailwind CSS, Material UI",
    src: "/assets/gecko-apply-filters.mp4",
    portrait: <Filters />,
  },
  {
    title: "Estimate delivery price",
    content:
      "Previously, users had to book a product and proceed to checkout just to check delivery costs. I added a feature that lets users estimate the delivery price for their address directly on eligible product pages.",
    tech: "React.js, Tailwind CSS, GraphQL",
    src: "/assets/gecko-estimate-delivery.mp4",
    portrait: <Delivery />,
  },
  {
    title: "New cart style popup",
    content:
      "I reworked the cart experience so users can open a simple popup from the cart icon to review their rented products, rather than being redirected to a separate cart page.",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-cart-popup.mp4",
    portrait: <Cart />,
  },
  {
    title: "New responsive searchbar",
    content:
      "I reworked search into a popup so users can quickly enter what product they’re looking for and where they need it, on both desktop and mobile.",
    tech: "React, Tailwind CSS",
    src: "/assets/gecko-new-search-desktop.mp4",
    portrait: <Search />,
  },
  {
    title: "Login Auth",
    content:
      "I created a full-stack MERN application that authenticates and authorizes users with cookie-based sessions.",
    tech: "React, Express.js, MongoDB, Tailwind CSS, Node.js",
    src: "/assets/login_auth.mp4",
    portrait: <LoginAuth />,
  },
  {
    title: "Steam Tracker",
    content:
      "I created a Next.js application that lets users search Steam IDs using the Steam Web API. It displays user information such as friends, recently played games, game news, and achievements.",
    tech: "React, Next.js, Tailwind CSS",
    src: "/assets/steam_tracker.mp4",
    portrait: <Steam />,
  },
  {
    title: "Wang's Therapy Centre",
    content:
      "I collaborated on an appointment-booking website for Wang's Natural Therapy Centre. The site showcases its services, opening hours, and location, and lets visitors make bookings.",
    tech: "React, Next.js, Tailwind CSS",
    src: "/assets/wangs-therapy.mp4",
    portrait: "/assets/wangs-logo.png",
    link: "https://www.wangs-therapy.com/",
  },
];

const ProjectBox = ({
  title,
  content,
  tech,
  src,
  portrait,
  link,
}: ProjectBoxProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((previous) => !previous);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="group flex min-h-56 w-full flex-col items-start justify-between rounded-2xl border border-[#d3b6ff]/70 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8b3dff]/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b3dff]/10 p-2 text-[#8b3dff] transition-colors group-hover:bg-[#8b3dff]/15">
          {typeof portrait === "string" ? (
            <img
              src={portrait}
              alt=""
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          ) : (
            portrait
          )}
        </span>

        <span className="mt-8 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#8b3dff]">
          {title}
        </span>

        <span className="mt-2 text-sm font-medium text-gray-500">
          View project <span aria-hidden="true">→</span>
        </span>
      </button>

      <Project
        title={title}
        content={content}
        tech={tech}
        src={src}
        showModal={showModal}
        toggleModal={toggleModal}
        link={link}
      />
    </>
  );
};

const ProjectGrid = () => {
  return (
    <div
      className="flex min-h-screen flex-col font-open-sans"
      style={{
        backgroundColor: "#faf9f7",
        backgroundImage: `
      radial-gradient(ellipse 55% 48% at 50% 42%, rgba(139, 61, 255, 0.09), transparent 100%),
      radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 61, 255, 0.035), transparent 100%)
    `,
      }}
    >
      <Navbar />

      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 md:px-8 md:py-14">
        <header className="mb-8 text-center md:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[#8b3dff] md:text-4xl">
            Projects
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectBox key={project.title} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectGrid;
