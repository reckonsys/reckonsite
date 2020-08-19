import path from "path";
import projects from "./src/data/projects.json";
import testimonials from "./src/data/testimonials.json";
import jobs from "./src/data/jobs.json";

export default {
  getRoutes: async () => {
    //TEMP
    const works = [];
    return [
      {
        path: "/",
        getData: () => ({
          projects,
          testimonials,
        }),
      },
      {
        path: "/careers",
        getData: () => ({
          jobs,
        }),
      },
      {
        path: "/our-works",
        getData: () => ({
          projects,
        }),
        children: projects.map((project) => ({
          path: `/${project.slug}`,
          template: "src/containers/Work",
          getData: () => ({
            project,
          }),
        })),
      },
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
