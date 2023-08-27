import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Program from "./program";

export default function Education() {
  const { dataJson } = useStaticQuery(graphql`
    query {
      dataJson {
        education {
          title
          programs {
            institution
            program_title
            type
            grade
          }
        }
      }
    }
  `);

  const programs = dataJson.education.programs;

  return (
    <section>
      <div>
        <h2 className="mb-6 text-3xl pt-2 text-left md:text-center dark:text-white">
          {dataJson.education.title}
        </h2>

        {programs &&
          programs.length > 0 &&
          programs.map((program, index) => (
            <Program key={`${program.title}_${index}`} programData={program} />
          ))}
      </div>
    </section>
  );
}
