import React, { useEffect } from "react";
import whoWeAreBG from "../assets/images/who-we-are/who-we-are-bg.png";
import ceo from "../assets/images/who-we-are/ceo.png";

export default () => {
  useEffect(() => {
    const { pathname } = location;
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, [location.pathname]);
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
      <div className="team-grid">
        <div className="col">
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/bigspecky.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Mohit Jain</h3>
              <p className="role">Traveller living by the words "Carpe Diem"</p>
              <a
                href="https://www.linkedin.com/in/mohit-jain-5bab30ab/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/samyadh.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Samyadh Jain</h3>
              <p className="role">
                Spontaneous techie on a bike in search of perfect designs.
              </p>
              <a
                href="https://www.linkedin.com/in/samyadhjain/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://reckonsys.com/team/subho.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Subhajit Mukherjee</h3>
              <p className="role">The Chaotic,pragmatic protagonist</p>
              <a
                href="https://in.linkedin.com/in/subhajitmukherjee"
                className="team-linkedin"
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
        </div>
        <div className="col">
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/anu.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Anu Paul</h3>
              <p className="role">Simple and happy!</p>
              <a
                href="https://www.linkedin.com/in/anu-paul-4300a9100/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/kartik.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Kartik S Dhanidariya</h3>
              <p className="role">Being oneself. Striving to be better. </p>
              <a
                href="https://www.linkedin.com/in/kartik-danidhariya-66b74282/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://reckonsys.com/team/sandeep.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Sandip Rabi Das</h3>
              <p className="role">
                Creativity is an underestimate for the work,I have to do between
                now and tomorrow
              </p>
              <a
                href="https://www.linkedin.com/in/sandip-das-356719107/"
                className="team-linkedin"
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
        </div>
        <div className="col">
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/deeraj.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Dheeraj Kumar</h3>
              <p className="role">The competent Techie </p>
              <a
                href="https://www.linkedin.com/in/dheeraj-kumar-770118126/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/guru.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Gururaj Dharani</h3>
              <p className="role">
                Designer, developer and rider - Multitasker united with passion.
              </p>
              <a
                href="https://www.linkedin.com/in/gururaj-dharani-13901055/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://reckonsys.com/team/dinesh.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Dinesh Murali</h3>
              <p className="role">
                I don't get lucky,
                <br />I make my own luck.
              </p>
              <a
                href="https://www.linkedin.com/in/dinesh-murali-81856512b/"
                className="team-linkedin"
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
        </div>
        <div className="col">
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/mohan.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Mohana Sundaram S</h3>
              <p className="role">
                Hardcore Rahmaniac , Designs Occassionally.
              </p>
              <a
                href="https://www.linkedin.com/in/mohana-sundaram-s-065542a8"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://www.reckonsys.com/team/neha.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Neha Sahu</h3>
              <p className="role">
                Win or lose, keep looking up.That's the secret of life.
              </p>
              <a
                href="https://www.linkedin.com/in/neha-sahu-400b4777/"
                className="team-linkedin"
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
          <div className="team-list-item">
            <img src="https://reckonsys.com/team/raghu.jpg" alt="" />
            <div className="overlay">
              <h3 className="name">Raghu Raju Guntimadugu</h3>
              <p className="role">Digital Geek of Reckonsys</p>
              <a
                href="https://in.linkedin.com/in/graghuraju"
                className="team-linkedin"
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
        </div>
      </div>
    </div>
  );
};
