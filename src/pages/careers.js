import React, { useEffect } from "react";

import careersBg from "../assets/images/careers/careers-bg.png";
import leftTop1 from "../assets/images/careers/left-top-1.png";
import leftTop2 from "../assets/images/careers/left-top-2.png";
import leftTop3 from "../assets/images/careers/left-top-3.png";
import leftTop4 from "../assets/images/careers/left-top-4.png";
import right1 from "../assets/images/careers/right-1.png";

import { useRouteData } from "react-static";

export default () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    }
  }, []);
  const { jobs } = useRouteData();
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="title">Join us. Be a Reckoner !</h1>
        </div>
        <div className="hero-image-container">
          <img src={careersBg} alt="" className="hero-bg" />
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h6 className="title">THE CULTURE</h6>
          <p className="description">
            As Reckonsys leapfrogs into the future, we make the most of our
            present. We are a group of ambitious and fun-loving people, many of
            whom have come from across the country and made it to the reckonsys
            family
          </p>
        </div>
      </section>
      <section className="reckoners-collage d-flex">
        <div className="left-section">
          <div className="left-top d-flex-space-center">
            <img src={leftTop1} alt="" />
            <img src={leftTop2} alt="" />
          </div>
          <div className="left-bottom d-flex-space-center">
            <img src={leftTop3} alt="" />
            <img src={leftTop4} alt="" />
          </div>
        </div>
        <div className="right-section">
          <img src={right1} alt="" />
        </div>
      </section>
      <section className="job-openings">
        <div className="container">
          <h3 className="title m-b-40">Job Openings</h3>
          <div className="jobs-wrap d-flex">
            {jobs.map((job, idx) => {
              return (
                <div className="job-item" key={idx}>
                  <p className="position">{job.designation}</p>
                  <p className="experience">{job.experience}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="whats-in-for-you">
        <div className="container">
          <h3 className="title m-b-35">So what's in it for you ?</h3>
          <p className="desc m-b-50">
            At Reckonsys, we try to KISS (Keep it Simple and Straightforward),
            and believe that this can only be done by defying convention and
            trying to develop a disruptive approach to things. For us, learning
            from mistakes is common as we want our team to try out new things
            and push themselves out of their comfort zones. We value people for
            who they are and believe that everyone is special in their own
            unique way.We help in bringing out the best in employees, by giving
            them the best opportunities and challenges required for growth.
          </p>
          <div className="key-points-wrap d-flex">
            <div className="key-points">
              <h6 className="m-b-20">Health</h6>
              <p>
                We provide Medical Insurance for you and your family. You take
                care of your work and we take care of you and your family’s
                health. We also provide Personal Accident Insurance for all our
                team members..
              </p>
            </div>
            <div className="key-points">
              <h6 className="m-b-20">Knowledge</h6>
              <p>
                We offer an Annual learning allowance to our team members for
                their professional learning. We value your individual growth
                without which we cannot grow as an organisation.
              </p>
            </div>
            <div className="key-points">
              <h6 className="m-b-20">Wealth</h6>
              <p>
                We offer competitive salaries as we know the value you add is
                often priceless. We encourage our team members to attain
                financial freedom by providing paid membership of a online
                mutual fund platform.
              </p>
            </div>
            <div className="key-points">
              <h6 className="m-b-20">Happiness</h6>
              <p>
                We work hard and at the same time we want you to have a life
                outside of work. We always look for ways to make our workplace a
                happier one so you don’t have to go through Monday Morning
                Blues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
