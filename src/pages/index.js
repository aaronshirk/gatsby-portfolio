import * as React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="mb-10">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-serif">developedbyaaron</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-teal-500 text-white px-4 py-2 rounded-lg ml-4 md:ml-6 lg:ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-5">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Aaron Shirk
          </h2>
          <h3 className="text-2xl md:text-3xl">
            Developer + Data Scientist + Drummer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-700 md:text-lg max-w-xl mx-auto">
            Experienced software developer, engineer, and budding data
            scientist. Check out some of my past work and projects and connect
            with me down below.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 text-stone-600">
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <StaticImage
          src="../images/Profile_Pic.jpg"
          layout="fixed"
          width={200}
          height={200}
          className="relative rounded-full mx-auto mt-6"
        />
      </section>

      {/* ***  PROJECTS / PORTFOLIO *** */}
      <section>
        <div>
          <h3 className="text-3xl pt-2">Featured Projects</h3>
          <p className="text-md py-3 text-gray-700">
            View selected projects below. More information can be found at{" "}
            <a href="https://aaronshirk.github.io">aaronshirk.github.io</a>.
          </p>

          <div className="md:flex gap-10">
            {/* Project 1 */}
            <div className="bg-zinc-50 text-center shadow-xl p-10 rounded-xl my-10 w-96 h-96">
              <StaticImage
                src="../images/andoid-apps-ratings.jpg"
                alt="Android app rating distribution"
                className="w-5/6"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                The Android App Market on Google Play (Jupyter Notebook)
              </h3>
              <p className="text-md text-gray-700 mb-5">
                Comprehensive analysis of the Android app market, comparing over
                ten thousand apps in Google Play across different categories
              </p>
              <a
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 hover:pointer"
                href="https://github.com/aaronshirk/android-app-market/blob/main/notebook.ipynb"
                target="_blank"
              >
                View
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-zinc-50 text-center shadow-xl p-10 rounded-xl my-10 w-96 h-96">
              <StaticImage
                src="../images/netflix-movies.jpg"
                alt="Investigating netflix movie length"
                className="w-5/6"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Investigating Netflix Movies and Guest Stars in The Office
              </h3>
              <p className="text-md text-gray-700 mb-5">
                Is it true that movie duration has steadily decreased over the
                last few years?
              </p>
              <a
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
                href="https://github.com/aaronshirk/android-app-market/blob/main/notebook.ipynb"
                target="_blank"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
