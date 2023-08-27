import React from "react";

export default function Job(props) {
  const { jobData } = props;

  return (
    <section>
      <div className="my-8 flex flex-col md:flex-row md:justify-center">
        <div className="pb-5 md:basis-1/4 md:px-3 md:border-b md:border-dashed md:border-b-gray-600 dark:md:border-b-gray-300">
          <h3 className="text-lg leading-6 font-semibold dark:text-white">
            {jobData.title}
          </h3>
          <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
            {jobData.company}
          </p>
          <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
            {jobData.employ_dates}
          </p>
        </div>
        <div className="pb-5 md:basis-3/4 md:px-3 border-b border-dashed border-b-gray-600 dark:border-b-gray-300">
          <p className="text-md text-gray-700 mb-5 dark:text-gray-400">
            {jobData.job_description}
          </p>
          <p className="text-md text-gray-700 mb-2 dark:text-gray-400">
            {jobData.details.details_tag}
          </p>
          <ul className="list-disc list-inside dark:text-gray-400">
            {jobData.details.bullets?.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
