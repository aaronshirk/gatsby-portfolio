import * as React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      {/* *** ABOUT / PROFILE *** */}
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
          <h2 className="text-3xl pt-2 text-left md:text-center">
            Featured Projects
          </h2>
          <p className="text-md py-3 text-gray-700 text-left md:text-center">
            View selected projects below. More information can be found at{" "}
            <a href="https://aaronshirk.github.io">aaronshirk.github.io</a>.
          </p>

          <div className="md:flex gap-10">
            {/* Project 1 */}
            <div className="text-center shadow-xl rounded-xl my-10 w-96 h-96">
              <StaticImage
                src="../images/andoid-apps-ratings.jpg"
                alt="Android app rating distribution"
                height={200}
                aspectRatio={2.44}
              />
              <h3 className="text-lg font-medium mt-6 mb-3 mx-2 md:mx-4">
                The Android App Market on Google Play (Jupyter Notebook)
              </h3>
              <p className="text-md text-gray-700 mb-6 mx-2 md:mx-4">
                Comprehensive analysis of the Android app market; Source: Google
                Play
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
            <div className="text-center shadow-xl rounded-xl my-10 w-96 h-96">
              <StaticImage
                src="../images/netflix-movies.jpg"
                alt="Investigating netflix movie length"
                height={200}
                aspectRatio={2.44}
              />
              <h3 className="text-lg font-medium mt-6 mb-3 mx-2 md:mx-4">
                Investigating Netflix Movies and Guest Stars in The Office
              </h3>
              <p className="text-md text-gray-700 mb-6 mx-2 md:mx-4">
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

      {/* ***  WORK EXPERIENCE  *** */}
      <section>
        <div>
          <h2 className="text-xl pt-2 text-left md:text-center">
            Work Experience
          </h2>
          <p className="text-md py-3 text-gray-700 text-left md:text-center">
            See my complete work history on{" "}
            <a
              href="https://www.linkedin.com/in/aaronshirk/"
              className="text-blue-600 visited:text-purple-600"
            >
              LinkedIn
            </a>
            .
          </p>

          {/* Job 1 */}
          <section>
            <div className="my-8 flex flex-col md:flex-row md:justify-center">
              <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600">
                <h3 className="text-lg leading-6 font-semibold">
                  Senior Analytics Engineer
                </h3>
                <p className="italic leading-6 text-md text-gray-700">
                  Premier Inc.
                </p>
                <p className="text-md leading-6 text-gray-700">
                  Oct 21 - Apr 22
                </p>
              </div>
              <div className="pb-5 border-b border-dashed border-b-gray-600 md:basis-3/4 md:px-3">
                <p className="text-md text-gray-700 mb-5">
                  Build data analytics reports, data pipelines
                </p>
                <p className="text-md text-gray-700 mb-2">Skills:</p>
                <ul className="list-disc list-inside">
                  <li>React.js</li>
                  <li>Typescript</li>
                  <li>PostgreSQL</li>
                  <li>Apache Airflow</li>
                  <li>Software Development</li>
                  <li>SQL</li>
                  <li>Python</li>
                  <li>Pandas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Job 2 */}
          <section>
            <div className="my-8 flex flex-col md:flex-row md:justify-center">
              <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600">
                <h3 className="text-lg leading-6 font-semibold">
                  Senior Software Developer
                </h3>
                <p className="italic leading-6 text-md text-gray-700">
                  North Wind Group
                </p>
                <p className="text-md leading-6 text-gray-700">
                  Apr 22 - Present
                </p>
              </div>
              <div className="pb-5 border-b border-dashed border-b-gray-600 md:basis-3/4 md:px-3">
                <p className="text-md text-gray-700 mb-5">
                  Worked as lead software developer helping to establish modern
                  software development practices
                </p>
                <p className="text-md text-gray-700 mb-2">Responsibilities:</p>
                <ul className="list-disc list-inside">
                  <li>
                    Dev stack: ReactJS, ASP.NET Core, Sql Server, git/github
                  </li>
                  <li>Cloud: Azure App Services & Azure DevOps</li>
                  <li>Teach and promote modern application development</li>
                  <li> Maintain existing corporate applications</li>
                  <li>
                    Establish and train standard development practices (Agile)
                  </li>
                  <li>Maintain corporate legacy applications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Job 3 */}
          <section>
            <div className="my-8 flex flex-col md:flex-row md:justify-center">
              <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600">
                <h3 className="text-lg leading-6 font-semibold">
                  Full Stack Developer (Contract and Full-Time)
                </h3>
                <p className="italic leading-6 text-md text-gray-700">PWC</p>
                <p className="text-md leading-6 text-gray-700">
                  Aug 20 - Sep 21
                </p>
              </div>
              <div className="pb-5 border-b border-dashed border-b-gray-600 md:basis-3/4 md:px-3">
                <p className="text-md text-gray-700 mb-5">
                  Develop APIs for COVID-19 Contact Tracing (ACT) application
                </p>

                <p className="text-md text-gray-700 mb-2">Skills:</p>
                <ul className="list-disc list-inside">
                  <li>ASP.NET Core</li>
                  <li>C#</li>
                  <li>EntityFramework Core</li>
                  <li>Sql Server</li>
                  <li>Azure App Services</li>
                  <li>Azure Functions (C#)</li>
                  <li>Cloud: Azure App Services & Azure DevOps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Job 4 */}

          <section>
            <div className="my-8 flex flex-col md:flex-row md:justify-center">
              <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600">
                <h3 className="text-lg leading-6 font-semibold">
                  Software Developer
                </h3>
                <p className="italic leading-6 text-md text-gray-700">
                  JMT Technology Group
                </p>
                <p className="text-md leading-6 text-gray-700">
                  Sep 19 - Aug 20
                </p>
              </div>
              <div className="pb-5 border-b border-dashed border-b-gray-600 md:basis-3/4 md:px-3">
                <p className="text-md text-gray-700 mb-5">
                  Implement new features for JMT’s Outdoor Licensing and
                  Registration platform.
                </p>

                <p className="text-md text-gray-700 mb-2">Skills:</p>
                <ul className="list-disc list-inside">
                  <li>Angular 7</li>
                  <li>Typescript</li>
                  <li>C#</li>
                  <li>.Net Framework</li>
                  <li>Sql Server</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ***  EDUCATION & CERTIFICATIONS *** */}
      <section>
        <div>
          <h2>Education</h2>

          <section>
            <h3>University of Colorado</h3>
            <p>MS - Space Operations Engineering 1998</p>
            <p>GPA: 4.00</p>
          </section>

          <section>
            <h3>The Ohio State University</h3>
            <p>BS - Computer Information Science and Engineering 1998</p>
            <p>GPA: 3.89</p>
          </section>
        </div>
      </section>
    </main>
  );
}
