import React from "react";

export default function Education() {
  return (
    <section>
      <div>
        <h2 className="mb-6 text-3xl pt-2 text-left md:text-center dark:text-white">
          Education
        </h2>

        <section className="pb-6">
          <div>
            <h3 className="text-lg leading-6 font-semibold dark:text-white">
              University of Colorado
            </h3>
            <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
              MS - Space Operations Engineering
            </p>
            <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
              GPA: 4.00
            </p>
          </div>
        </section>

        <section className="pb-6">
          <h3 className="text-lg leading-6 font-semibold dark:text-white">
            The Ohio State University
          </h3>
          <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
            BS - Computer Information Science and Engineering
          </p>
          <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
            GPA: 3.89
          </p>
        </section>
      </div>
    </section>
  );
}
