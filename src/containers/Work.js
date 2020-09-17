import React, { useEffect } from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

export default function Work() {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    }
  }, []);
  const { project } = useRouteData();
  return (
    <section className="our-works-detail">
      <div className="container">
        <div className="nav-menu">
          <Link to="/our-works">Our Works</Link>
          <a href="" className="active">
            {project.title}
          </a>
        </div>
        <h1 className="title">{project.title}</h1>
      </div>
      <div
        className="project-image-holder"
        style={{
          width: "100%",
          height: "689px",
          background: project.tileBackgroundColor,
        }}
      >
        <div className="container d-flex-v-center" style={{ height: "100%" }}>
          <img
            src={require(`../assets/images/our-works-detail/${project.image}-main.png`)}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="project-description">{project.details.shortnote}</div>
        <div className="project-details">
          <p className="desc">{project.details.description}</p>
          {project.details.content.map((con, index) => {
            return (
              <div className="key-value d-flex" key={index + con.title}>
                <h6>{con.title}</h6>
                <div className="value-wrap">
                  {con.subtitle != "" ? (
                    <div style={{ marginBottom: "10px" }}>
                      <p className="value bold">{con.subtitle}</p>
                    </div>
                  ) : null}
                  <div>
                    {con.points.map((point, index) => {
                      return point.label == "" ? (
                        <div className="value d-flex-v-center">
                          <p
                            dangerouslySetInnerHTML={{ __html: point.value }}
                          ></p>
                        </div>
                      ) : (
                        <>
                          <div className="value d-flex-v-center">
                            <div className="value bold">{point.label}</div>
                          </div>
                          <p
                            className="value value-2"
                            dangerouslySetInnerHTML={{ __html: point.value }}
                          ></p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="project-sample-images">
            <img
              src={require(`../assets/images/our-works-detail/${project.image}-1.png`)}
              alt=""
            />
            <img
              src={require(`../assets/images/our-works-detail/${project.image}-2.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <Link to="/our-works" className="go-back">
            Go Back to Our Works
          </Link>
        </div>
      </div>
    </section>
  );
}
