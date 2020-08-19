import path from "path";
import projects from "./src/data/projects.json";

export default {
  getRoutes: async () => {
    //TEMP
    const works = [];
    return [
      {
        path: "/",
        getData: () => ({
          projects
        })
      },
      {
        path: "/our-works",
        getData: () => ({
          works
        }),
        children: works.map(work => ({
          path: `/${work.slug}`,
          template: "src/containers/Work",
          getData: () => ({
            work
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
