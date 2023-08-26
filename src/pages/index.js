import React, { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { graphql } from "gatsby";

import Portfolio from "../components/portfolio";
import WorkHistory from "../components/work-history";
import Education from "../components/education";

export default function Home({ data }) {
  const [darkMode, setDarkMode] = useState(false);
  const { publicURL } = data.allFile.nodes.find(
    (n) => n.sourceInstanceName === "resume"
  );
  const handleClick = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
        {/* *** ABOUT / PROFILE *** */}
        <section className="mb-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-serif dark:text-white">
              developedbyaaron
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={handleClick}
                    className="cursor-pointer text-2xl dark:text-gray-300"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg ml-4 md:ml-6 lg:ml-8 dark:gb-teal-500"
                  href={publicURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-500">
              Aaron Shirk
            </h2>
            <h3 className="text-2xl md:text-3xl dark:text-white">
              Developer + Data Scientist + Drummer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-lg max-w-xl mx-auto dark:text-gray-400">
              Experienced software developer, engineer, and budding data
              scientist. Check out some of my past work and projects and connect
              with me down below.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-stone-700 dark:text-stone-400">
            <a
              href="https://www.linkedin.com/in/aaronshirk/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/aaronshirk"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <StaticImage
            src="../images/Profile_Pic.jpg"
            layout="fixed"
            width={200}
            height={200}
            className="relative rounded-full mx-auto mt-6"
            alt="Profile Picture"
          />
        </section>

        {/* ***  PROJECTS / PORTFOLIO *** */}
        <Portfolio />

        {/* ***  WORK EXPERIENCE  *** */}
        <WorkHistory />

        {/* ***  EDUCATION & CERTIFICATIONS *** */}
        <Education />
      </main>
    </div>
  );
}

export const query = graphql`
  query {
    allFile(
      filter: { extension: { eq: "pdf" }, sourceInstanceName: { eq: "resume" } }
    ) {
      nodes {
        name
        sourceInstanceName
        relativePath
        publicURL
      }
    }
  }
`;
