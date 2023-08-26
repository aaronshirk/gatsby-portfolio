import React from "react";
import Job from "./job";
import { useStaticQuery, graphql } from "gatsby";

export default function WorkHistory() {
  const { dataJson } = useStaticQuery(graphql`
    query {
      dataJson {
        employment {
          title
          linkedin_link_href
          linkedin_link_text
          linkedin_link_alt
          jobs {
            company
            employ_dates
            job_description
            title
            details {
              bullets
              details_tag
            }
          }
        }
      }
    }
  `);

  const jobs = dataJson.employment.jobs;
  console.log(jobs);

  return (
    <section>
      <div>
        <h2 className="text-3xl pt-2 text-left md:text-center dark:text-white">
          {dataJson.employment.title}
        </h2>
        <p className="text-md py-3 text-gray-700 text-left md:text-center dark:text-gray-400">
          See my complete work history on{" "}
          <a
            href={dataJson.employment.linkedin_link_href}
            className="text-blue-600 visited:text-purple-600 dark:text-blue-300 dark:visited:text-purple-400"
            alt={dataJson.employment.linkedin_link_alt}
            target="_blank"
            rel="noreferrer"
          >
            {dataJson.employment.linkedin_link_text}
          </a>
          .
        </p>

        {jobs &&
          jobs.length > 0 &&
          jobs.map((job, index) => (
            <Job key={`${job.title}_${index}`} jobData={job} />
          ))}

        {/* <section>
          <div className="my-8 flex flex-col md:flex-row md:justify-center">
            <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600 dark:md:border-b-gray-300">
              <h3 className="text-lg leading-6 font-semibold dark:text-white">
                Senior Software Developer
              </h3>
              <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
                North Wind Group
              </p>
              <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
                Apr 22 - Present
              </p>
            </div>
            <div className="pb-5 md:basis-3/4 md:px-3 border-b border-dashed border-b-gray-600 dark:border-b-gray-300">
              <p className="text-md text-gray-700 mb-5 dark:text-gray-400">
                Worked as lead software developer helping to establish modern
                software development practices
              </p>
              <p className="text-md text-gray-700 mb-2 dark:text-gray-400">
                Responsibilities:
              </p>
              <ul className="list-disc list-inside dark:text-gray-400">
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
        </section> */}

        {/* <section>
          <div className="my-8 flex flex-col md:flex-row md:justify-center">
            <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600 dark:md:border-b-gray-300">
              <h3 className="text-lg leading-6 font-semibold dark:text-white">
                Full Stack Developer (Contract and Full-Time)
              </h3>
              <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
                PWC
              </p>
              <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
                Aug 20 - Sep 21
              </p>
            </div>
            <div className="pb-5 md:basis-3/4 md:px-3 border-b border-dashed border-b-gray-600 dark:border-b-gray-300">
              <p className="text-md text-gray-700 mb-5 dark:text-gray-400">
                Develop APIs for COVID-19 Contact Tracing (ACT) application
              </p>

              <p className="text-md text-gray-700 mb-2 dark:text-gray-400">
                Skills:
              </p>
              <ul className="list-disc list-inside dark:text-gray-400">
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
        </section> */}

        {/* <section>
          <div className="my-8 flex flex-col md:flex-row md:justify-center">
            <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600 dark:md:border-b-gray-300">
              <h3 className="text-lg leading-6 font-semibold dark:text-white">
                Software Developer
              </h3>
              <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
                JMT Technology Group
              </p>
              <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
                Sep 19 - Aug 20
              </p>
            </div>
            <div className="pb-5 md:basis-3/4 md:px-3 border-b border-dashed border-b-gray-600 dark:border-b-gray-300">
              <p className="text-md text-gray-700 mb-5 dark:text-gray-400">
                Implement new features for JMT’s Outdoor Licensing and
                Registration platform.
              </p>

              <p className="text-md text-gray-700 mb-2 dark:text-gray-400">
                Skills:
              </p>
              <ul className="list-disc list-inside dark:text-gray-400">
                <li>Angular 7</li>
                <li>Typescript</li>
                <li>C#</li>
                <li>.Net Framework</li>
                <li>Sql Server</li>
              </ul>
            </div>
          </div>
    </section> */}
      </div>
    </section>
  );
}
