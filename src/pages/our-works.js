import React, { useEffect } from "react";

import goldenSherpa from "../assets/images/our-works/goldensherpa.png";
import receipe from "../assets/images/our-works/receipe.png";
import kredily from "../assets/images/our-works/kredily.png";
import flipNook from "../assets/images/our-works/flipnook.png";
import vndly from "../assets/images/our-works/vndly.png";
import inappbi from "../assets/images/our-works/inappbi.png";
import smartPort from "../assets/images/our-works/smart-port.svg";

import { useRouteData } from "react-static";
import { Link } from "components/Router";

const imageQuery = (project) => {
  if (project === "goldensherpa") return goldenSherpa;
  if (project === "receipe") return receipe;
  if (project === "kredily") return kredily;
  if (project === "flipnook") return flipNook;
  if (project === "vndly") return vndly;
  if (project === "inappbi") return inappbi;
  if (project === "smartPort") return smartPort;
};

export default () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    }
  }, []);
  const { projects } = useRouteData();
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="title">Some of our Works</h1>
          <div className="our-works-wrap m-t-65">
            <div className="row">
              {projects.map((project, idx) => {
                return (
                  <div className="col-6" key={idx}>
                    <Link to={`/our-works/${project.slug}/`}>
                      <div className="work-item">
                        <div
                          className="img-holder"
                          style={{ background: project.cardBackgroundColor }}
                        >
                          <img src={imageQuery(project.image)} alt="" />
                        </div>
                        <div className="work-desc">
                          <p>{project.type}</p>
                          <h6>{project.title}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
