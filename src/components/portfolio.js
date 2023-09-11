import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Project from "./project";

export default function Portfolio() {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query portfolio {
      allMdx {
        nodes {
          frontmatter {
            cta
            github_repo_url
            image_alt
            subtitle
            title
            image {
              childImageSharp {
                gatsbyImageData(height: 200, aspectRatio: 2.44)
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <section>
      <div>
        <h2 className="text-3xl pt-2 text-left md:text-center dark:text-white">
          Featured Projects
        </h2>
        <p className="text-md py-3 text-gray-700 text-left md:text-center dark:text-gray-400">
          View selected projects below. More information can be found at{" "}
          <a href="https://aaronshirk.github.io">aaronshirk.github.io</a>.
        </p>

        <div className="md:flex gap-10">
          {nodes &&
            nodes.length > 0 &&
            nodes.map((node) => (
              <Project key={node.id} projectData={node.frontmatter} />
            ))}
        </div>
      </div>
    </section>
  );
}
