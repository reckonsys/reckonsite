import React from "react";

import goldenSherpa from "../assets/images/our-works/goldensherpa.png";
import receipe from "../assets/images/our-works/receipe.png";
import kredily from "../assets/images/our-works/kredily.png";
import flipNook from "../assets/images/our-works/flipnook.png";
import vndly from "../assets/images/our-works/vndly.png";
import inappbi from "../assets/images/our-works/inappbi.png";
import smartPort from "../assets/images/our-works/smart-port.svg";

import staticDatas from "../static/static-datas";

const imageQuery = project => {
  if (project === "goldenSherpa") return goldenSherpa;
  if (project === "receipe") return receipe;
  if (project === "kredily") return kredily;
  if (project === "flipNook") return flipNook;
  if (project === "vndly") return vndly;
  if (project === "inappbi") return inappbi;
  if (project === "smartPort") return smartPort;
};

export default () => (
  <div>
    <section className="hero-section">
      <div className="container">
        <h1 className="title">Some of our Works</h1>
        <div className="our-works-wrap m-t-65">
          <div className="row">
            {staticDatas.projectShortInfo.map((project, idx) => {
              return (
                <div className="col-6" key={idx}>
                  <div className="work-item">
                    <div
                      className="img-holder"
                      style={{ background: project.color }}
                    >
                      <img src={imageQuery(project.image)} alt="" />
                    </div>
                    <div className="work-desc">
                      <p>{project.type}</p>
                      <h6>{project.name}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </div>
);
