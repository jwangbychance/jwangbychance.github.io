import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const externalLinkClass =
    "text-[#8b3dff] underline decoration-[#8b3dff]/30 underline-offset-4 transition hover:decoration-[#8b3dff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2";

  return (
    <div
      className="flex min-h-screen w-full flex-col font-open-sans text-sm md:text-base flex min-h-screen flex-col"
      style={{
        backgroundColor: "#faf9f7",
        backgroundImage: `
      radial-gradient(ellipse 55% 48% at 50% 42%, rgba(139, 61, 255, 0.09), transparent 100%),
      radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 61, 255, 0.035), transparent 100%)
    `,
      }}
    >
      <Navbar />

      <main
        className={`mx-auto w-full max-w-6xl flex-1 px-6 py-12 transition-all duration-500 ease-in-out md:px-10 md:py-16 ${
          show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <section aria-labelledby="about-heading">
          <h1
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-[#8b3dff] md:text-4xl"
          >
            About me
          </h1>

          <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            <div className="max-w-2xl space-y-5 leading-7 text-gray-700">
              <p>
                Hey, I’m Jackson, a student at the University of Technology
                Sydney.
              </p>

              <p>
                I’m interested in both frontend and backend web development,
                contributing to open-source projects like{" "}
                <a
                  href="https://vitest.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className={externalLinkClass}
                >
                  Vitest
                </a>
                , and using Node.js to build my own Discord bot for fun.
              </p>

              <p>
                I had the opportunity to work at Gecko.rent, a high-growth
                startup accelerated by the{" "}
                <a
                  href="https://www.techstars.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={externalLinkClass}
                >
                  Techstars
                </a>{" "}
                program. As part of a small, dynamic team, I made meaningful
                contributions while continuing to grow with the company.
              </p>

              <p className="pt-2 font-semibold text-gray-900">
                Explore my{" "}
                <Link to="/projects" className={externalLinkClass}>
                  projects
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 items-center gap-4 self-start md:gap-6">
              <div className="flex min-h-32 items-center justify-center rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm md:min-h-40 md:p-7">
                <img
                  className="max-h-24 w-full object-contain md:max-h-28"
                  src="/assets/geckorent.png"
                  alt="Gecko.rent logo"
                  loading="lazy"
                />
              </div>

              <div className="flex min-h-32 items-center justify-center rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm md:min-h-40 md:p-7">
                <img
                  className="max-h-20 w-full object-contain md:max-h-24"
                  src="/assets/techstars.png"
                  alt="Techstars logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
