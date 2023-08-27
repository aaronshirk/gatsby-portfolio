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
      </div>
    </section>
  );
}
