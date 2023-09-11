import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Project(props) {
  const { projectData } = props;
  const image = getImage(projectData.image);

  return (
    <div className="text-center shadow-xl rounded-xl my-10 w-96 h-96 dark:bg-slate-700 overflow-hidden">
      <GatsbyImage image={image} alt={projectData.image_alt} />
      <h3 className="text-lg font-medium mt-6 mb-3 mx-2 md:mx-4 dark:text-white">
        {projectData.title}
      </h3>
      <p className="text-md text-gray-700 mb-6 mx-2 md:mx-4 dark:text-gray-400">
        {projectData.subtitle}
      </p>
      <a
        className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 hover:pointer"
        href={projectData.github_repo_url}
        target="_blank"
        rel="noreferrer"
      >
        {projectData.cta}
      </a>
    </div>
  );
}
