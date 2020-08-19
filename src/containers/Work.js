import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";
import goldenSherpaBG from "../assets/images/our-works-detail/goldensherpa-bg.png";
import projectImage1 from "../assets/images/our-works-detail/project-image-1.png";
import projectImage2 from "../assets/images/our-works-detail/project-image-2.png";

export default function Work() {
  const { project } = useRouteData();
  return (
    <section class="our-works-detail">
      <div class="container">
        <div class="nav-menu">
          <Link to="/our-works">Our Works</Link>
          <a href="" class="active">
            {project.title}
          </a>
        </div>
        <h1 class="title">{project.title}</h1>
      </div>
      <div
        class="project-image-holder"
        style={{ width: "100%", height: "689px", background: "#5A54C3" }}
      >
        <div class="container d-flex-v-center" style={{ height: "100%" }}>
          <img src={goldenSherpaBG} alt="" />
        </div>
      </div>
      <div class="container">
        <div class="project-description">
          Elderly people and their families find it very challenging to select a
          care provider that best suits their needs due to lack of information.
          Our client wanted to address this information gap and help eldercare
          communities and their consumers with stress-free search & selection
          through a common platform.
        </div>
        <div class="project-details">
          <p class="desc">
            Reckonsys collaborated with the client to develop a web-based SaaS
            solution that enabled elderly citizens and their families to search
            for communities online and schedule visits matching their needs
          </p>
          <div class="key-value d-flex">
            <h6>ABOUT THE CLIENT</h6>
            <div class="value-wrap">
              <p class="value bold">
                A startup focused on connecting eldercare providers,
                communities, senior citizens and their families for easy and
                transparent interaction
              </p>
            </div>
          </div>
          <div class="key-value d-flex">
            <h6>NEEDS</h6>
            <div class="value-wrap">
              <p class="value">
                Build a solution to connect communities with senior citizens
              </p>
              <p class="value">
                A technology partner with expertise to build an MVP to showcase
                the idea
              </p>
            </div>
          </div>
          <div class="key-value d-flex">
            <h6>RECKONSYS SERVICES LEVERAGED</h6>
            <div class="value-wrap">
              <p class="value">
                Idea to solution design <br /> Technology selection <br /> UI/UX
                design <br /> Design & build MVP
              </p>
            </div>
          </div>
          <div class="key-value d-flex">
            <h6>KEY SOLUTIONS</h6>
            <div class="value-wrap">
              <p class="value">
                Web-based marketplace for care-giving communities and consumers
              </p>
              <p class="value">
                Multiple search paramenters to find and select suitable
                caregivers
              </p>
              <p class="value">Persona-based evaluation of senior citizens</p>
              <p class="value">Intelligent scheduling and alert mechanisms</p>
              <p class="value">Secure online meeting and video chat</p>
            </div>
          </div>
          <div class="key-value d-flex">
            <h6>BENEFITS TO CONSUMERS AND COMMUNITIES</h6>
            <div class="value-wrap">
              <p class="value">
                Increased visibility of eldercare providers and senior living
                communities
              </p>
              <p class="value">
                Stress free connect between senior citizens and communities
              </p>
              <p class="value">
                Improved quality of live for senior citizens & their families
              </p>
            </div>
          </div>
          <div class="key-value d-flex">
            <h6>GOLDENSHERPA'S RESULTS</h6>
            <div class="value-wrap">
              <p class="value">
                Robust & scalable SaaS MVP for demonstration and usage
              </p>
              <p class="value">
                Secured funding after building the platform within 4 months
              </p>
              <p class="value">
                9 communities featured in 3 months of platform launch
              </p>
            </div>
          </div>
          <div class="project-sample-images">
            <img src={projectImage1} alt="" />
            <img src={projectImage2} alt="" />
          </div>
        </div>
        <div class="text-center">
          <a href="" class="go-back">
            Go Back to Our Works
          </a>
        </div>
      </div>
    </section>
  );
}
