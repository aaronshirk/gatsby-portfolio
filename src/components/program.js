import React from "react";

export default function Program(props) {
  const { programData } = props;

  return (
    <section className="pb-6">
      <div>
        <h3 className="text-lg leading-6 font-semibold dark:text-white">
          {programData.institution}
        </h3>
        <p className="italic leading-6 text-md text-gray-700 dark:text-gray-400">
          {programData.program_title}
        </p>
        <p className="text-md leading-6 text-gray-700 dark:text-gray-400">
          {programData.grade}
        </p>
      </div>
    </section>
  );
}
