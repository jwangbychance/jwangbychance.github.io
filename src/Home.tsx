import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden font-open-sans flex min-h-screen flex-col"
      style={{
        backgroundColor: "#faf9f7",
        backgroundImage: `
      radial-gradient(ellipse 55% 48% at 50% 42%, rgba(139, 61, 255, 0.09), transparent 100%),
      radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 61, 255, 0.035), transparent 100%)
    `,
      }}
    >
      <Navbar />

      <main className="mx-auto flex min-h-[75vh] max-w-6xl items-center justify-center px-6 py-16">
        <section
          className={`grid w-full items-center gap-12 transition-all duration-700 ease-out md:grid-cols-[1.2fr_0.8fr] md:gap-16 ${
            show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b3dff]">
              Site Reliability Engineer / Full Stack Software Engineer · UTS
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Hey, I’m Jackson
              <span className="text-[#8b3dff]">.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 md:mx-0 md:text-lg">
              Building web apps with modern tech and frameworks, with the
              mindset of an SRE for scalability, reliability and observability.
            </p>

            <p className="mt-5 text-gray-700">
              Take a look at my{" "}
              <Link
                to="/projects"
                className="font-semibold text-[#8b3dff] underline decoration-transparent underline-offset-4 transition hover:decoration-[#8b3dff] focus-visible:decoration-[#8b3dff]"
              >
                projects
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/assets/Jackson_Wang_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[#8b3dff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8b3dff]/20 transition hover:bg-[#7300e6] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
              >
                Download resume
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="group relative rounded-full bg-[#8b3dff]/10 p-3 ring-1 ring-[#8b3dff]/20">
              <img
                src="/assets/p5_joker.png"
                alt="Joker from Persona 5"
                className="block w-48 rounded-full transition duration-300 group-hover:scale-[1.03] md:w-64"
              />
              <img
                src="/assets/p5_joker_masked.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
