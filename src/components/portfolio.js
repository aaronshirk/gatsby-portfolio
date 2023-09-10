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
                gatsbyImageData
              }
              childrenImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `);

  console.log(nodes);

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
            nodes.map((node, index) => (
              <Project key={node.id} projectData={node.frontmatter} />
            ))}
          {/* Project 1 */}
          <div className="text-center shadow-xl rounded-xl my-10 w-96 h-96 dark:bg-slate-700 overflow-hidden">
            {/* <StaticImage
              src="../images/andoid-apps-ratings.jpg"
              alt="Android app rating distribution"
              height={200}
              aspectRatio={2.44}
            /> */}
            <h3 className="text-lg font-medium mt-6 mb-3 mx-2 md:mx-4 dark:text-white">
              The Android App Market on Google Play (Jupyter Notebook)
            </h3>
            <p className="text-md text-gray-700 mb-6 mx-2 md:mx-4 dark:text-gray-400">
              Comprehensive analysis of the Android app market; Source: Google
              Play
            </p>
            <a
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 hover:pointer"
              href="https://github.com/aaronshirk/android-app-market/blob/main/notebook.ipynb"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>

          {/* Project 2 */}
          <div className="text-center shadow-xl rounded-xl my-10 w-96 h-96 dark:bg-slate-700 overflow-hidden">
            {/* <StaticImage
              src="../images/netflix-movies.jpg"
              alt="Investigating netflix movie length"
              height={200}
              aspectRatio={2.44}
            /> */}
            <h3 className="text-lg font-medium mt-6 mb-3 mx-2 md:mx-4 dark:text-white">
              Investigating Netflix Movies and Guest Stars in The Office
            </h3>
            <p className="text-md text-gray-700 mb-6 mx-2 md:mx-4 dark:text-gray-400">
              Is it true that movie duration has steadily decreased over the
              last few years?
            </p>
            <a
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
              href="https://github.com/aaronshirk/android-app-market/blob/main/notebook.ipynb"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
