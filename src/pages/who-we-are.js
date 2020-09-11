import React, { useEffect } from "react";
import { useRouteData } from "react-static";
import ceo from "../assets/images/who-we-are/ceo.png";
import whoWeAreBG from "../assets/images/who-we-are/who-we-are-bg.png";

export default () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    }
  }, []);
  const { team } = useRouteData();
  console.log(team);
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <main>Develop & Deliver Digital Experiences</main>
        </div>
        <div className="hero-image-container">
          <img src={whoWeAreBG} alt="" className="hero-bg" />
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h6 className="title">Our Ethos</h6>
          <p className="description">
            We are a Software Product Development Firm obsessed with creating
            uncommon solutions for common problems by making use of the right
            technologies and best practices. We work with Startup founders to
            build their MVP’s and with existing Enterprises to help solve
            interesting problems
          </p>
        </div>
      </section>
      <section className="ceo-note">
        <img src={ceo} alt="" />
        <div className="ceo-note-content">
          <p>
            Companies often make hard choices about going live with a technology
            solution that may soon require an overhaul. This is where we strive
            to do the things right the first time around without compromising on
            quality. With my 25 years of industry experience in multiple domains
            across 3 countries, along with my 35+ young colleagues, we are well
            placed to help build your solution by marrying mature enterprise
            practices with lean strategies.
          </p>
          <h6>Sathish Visanagiri</h6>
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h6 className="title">The Team</h6>
          <p className="description">
            We are an eclectic mix of Designers, Pythonistas, JavaScripters,
            pixel-perfect UI Developers, DevOps folks, Data Scientists and Agile
            practitioners, who love to deliver happiness to our clients through
            our work and have fun learning new things to make us more relevant
            in the ever changing technology landscape.
          </p>
        </div>
      </section>
      {team.length != 0 ? (
        <div className="team-grid">
          {team.map((te, i) => {
            return (
              <div className="col" key={"col" + i}>
                {te.map((person, index) => {
                  return (
                    <div className="team-list-item" key={index + person.name}>
                      <img
                        src={require(`../assets/images/team/${person.image}.png`)}
                        alt=""
                      />
                      <div className="overlay">
                        <h3 className="name">{person.name}</h3>
                        <p className="role">{person.caption}</p>
                        <a
                          href={person.linkedin_profile}
                          className="team-linkedin"
                          target="_blank"
                        >
                          <svg
                            width="27px"
                            height="27px"
                            viewBox="0 0 27 27"
                            version="1.1"
                            xmlns="https://www.w3.org/2000/svg"
                          >
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="reckonsys-portfolio-pics"
                                transform="translate(-1171.000000, -7024.000000)"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                                <g
                                  id="Group-38"
                                  transform="translate(0.000000, 6593.000000)"
                                >
                                  <g
                                    id="facebook-black-social-button-circle"
                                    transform="translate(1171.000000, 429.000000)"
                                  >
                                    <g
                                      id="linkedin-logo"
                                      transform="translate(0.000000, 2.000000)"
                                    >
                                      <path
                                        d="M13.5,0 C6.04413299,0 0,6.04413299 0,13.5 C0,20.955867 6.04413299,27 13.5,27 C20.955867,27 27,20.955867 27,13.5 C27,6.04413299 20.955867,0 13.5,0 Z M8.44167775,22.6402251 L4.64648593,22.6402251 L4.64648593,10.4293197 L8.44167775,10.4293197 L8.44167775,22.6402251 Z M6.54491049,8.76015345 C5.32846036,8.76015345 4.34375448,7.7740665 4.34375448,6.55927366 C4.34403069,5.34558568 5.32846036,4.35949872 6.54491049,4.35949872 C7.75804604,4.35949872 8.74413299,5.34558568 8.74413299,6.55927366 C8.74413299,7.77434271 7.75776982,8.76015345 6.54491049,8.76015345 Z M22.6559693,22.6402251 L18.8638159,22.6402251 L18.8638159,16.7018824 C18.8638159,15.2857289 18.8375754,13.4643683 16.8910895,13.4643683 C14.9172583,13.4643683 14.6136982,15.0067519 14.6136982,16.5994066 L14.6136982,22.6399488 L10.821821,22.6399488 L10.821821,10.4293197 L14.4617801,10.4293197 L14.4617801,12.0979335 L14.5128798,12.0979335 C15.019734,11.1378107 16.2571765,10.1257596 18.1036726,10.1257596 C21.9466496,10.1257596 22.6559693,12.6547826 22.6559693,15.9425678 L22.6559693,22.6402251 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
