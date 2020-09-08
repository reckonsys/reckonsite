import React, { useEffect } from "react";
import whatWeDoBg from "../assets/images/what-we-do/what-we-do-hero-bg.png";
import uxDesign from "../assets/images/what-we-do/ui-ux-design.png";
import mobileApplication from "../assets/images/what-we-do/web-mobile-application.png";
import webMobile from "../assets/images/what-we-do/web-mobile-2.png";
import dataScience from "../assets/images/what-we-do/data-science.png";
import blockChain from "../assets/images/what-we-do/block-chain.png";
import iot from "../assets/images/what-we-do/iot.png";
import appDev1 from "../assets/images/what-we-do/app-dev-1.png";
import appDev2 from "../assets/images/what-we-do/app-dev-2.png";
import appDev3 from "../assets/images/what-we-do/app-dev-3.png";
import appDev4 from "../assets/images/what-we-do/app-dev-4.png";
import cloud1 from "../assets/images/what-we-do/cloud-1.png";
import cloud2 from "../assets/images/what-we-do/cloud-2.png";
import cloud3 from "../assets/images/what-we-do/cloud-3.png";
import cloud4 from "../assets/images/what-we-do/cloud-4.png";
import dataScience1 from "../assets/images/what-we-do/data-science-1.png";
import dataScience2 from "../assets/images/what-we-do/data-science-2.png";

export default () => {
  useEffect(() => {
    const { pathname } = location;
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, [location.pathname]);
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="title">Enterprise Maturity with Start Up Agility</h1>
        </div>
        <div className="hero-image-container">
          <img src={whatWeDoBg} alt="" className="hero-bg" />
        </div>
      </section>
      <section className="article-section">
        <div className="container">
          <h6 className="title">OUR EXPERTISE</h6>
          <p className="description">
            We bring to the table a rich experience in a multitude of Services
            that can help your organisation add value to its bottom line. We
            partner with you and share your passion in creating comprehensive
            and meaningful digital experiences that are results-oriented.
          </p>
        </div>
      </section>
      <section className="our-expertise">
        <div className="container d-flex-space-center">
          <div className="key-expertise">
            <img src={uxDesign} alt="" />
            <div className="card">
              <h4>UI/UX Design</h4>
              <p>
                Employ industry standard techniques to ensure development is in
                line with production and to support day-to-day operations.
              </p>
            </div>
          </div>
          <div className="key-expertise">
            <img src={mobileApplication} alt="" />
            <div className="card">
              <h4>Web Mobile Application Development</h4>
              <p>
                Develop amazing apps that are fast, secure and scalable for your
                MVP by leveraging design frameworks and cloud Infrastructure.
              </p>
            </div>
          </div>
          <div className="key-expertise">
            <img src={webMobile} alt="" />
            <div className="card">
              <h4>Web Mobile Application Development</h4>
              <p>
                Employ industry standard techniques to ensure development is in
                line with production and to support day-to-day operations.
              </p>
            </div>
          </div>
          <div className="key-expertise">
            <img src={dataScience} alt="" />
            <div className="card">
              <h4>Data Sciences</h4>
              <p>
                Develop systems that are intelligent and self-learning through
                the use of big data and machine learning.
              </p>
            </div>
          </div>
          <div className="key-expertise">
            <img src={blockChain} alt="" />
            <div className="card">
              <h4>Block Chain</h4>
              <p>
                Develop systems that are intelligent and self-learning through
                the use of big data and machine learning.
              </p>
            </div>
          </div>
          <div className="key-expertise">
            <img src={iot} alt="" />
            <div className="card">
              <h4>IOT</h4>
              <p>
                Build your next gen IoT solutions with efficient programs on the
                device and with seamless connectivity across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-success">
        <div className="container">
          <h2 className="title m-b-75">Our Approach For Product Success</h2>
          <div className="success-card-wrap d-flex">
            <div className="line"></div>
            <div className="success-card">
              <svg
                width="48"
                height="45"
                viewBox="0 0 48 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1435 21.7626V33.7501H24.6218L22.0194 31.2501H14.7458V24.2626L12.1435 21.7626Z"
                  fill="white"
                />
                <path
                  d="M45.8049 40.3624L42.0705 36.7249V39.9999H5.63762V34.8124H8.23997V32.8124H5.63762V24.4999H8.23997V22.4999H5.63762V14.4999H8.23997V12.4999H5.63762V5.51245L26.3784 25.3249V21.7999L5.26028 1.61245C5.07828 1.43616 4.84576 1.31593 4.59236 1.2671C4.33896 1.21826 4.07616 1.24302 3.83747 1.33823C3.59878 1.43344 3.395 1.59478 3.25213 1.80168C3.10926 2.00858 3.03377 2.25166 3.03527 2.49995V41.2499C3.03527 41.5815 3.17236 41.8994 3.41638 42.1338C3.66039 42.3683 3.99135 42.4999 4.33645 42.4999H44.8811C45.1395 42.5014 45.3926 42.4289 45.6079 42.2916C45.8233 42.1544 45.9912 41.9586 46.0903 41.7293C46.1895 41.5 46.2152 41.2475 46.1644 41.0041C46.1136 40.7607 45.9884 40.5373 45.8049 40.3624Z"
                  fill="white"
                />
                <path
                  d="M31.6611 37.4999H36.8658C37.556 37.4999 38.2179 37.2365 38.706 36.7677C39.194 36.2988 39.4682 35.6629 39.4682 34.9999V10.8749L36.4755 5.5874C36.244 5.20218 35.9098 4.88325 35.5072 4.66352C35.1046 4.44379 34.6483 4.33121 34.1854 4.3374C33.712 4.34101 33.2485 4.46863 32.845 4.70652C32.4414 4.9444 32.1131 5.28354 31.8953 5.6874L29.0588 10.8999V34.9999C29.0588 35.6629 29.3329 36.2988 29.821 36.7677C30.309 37.2365 30.9709 37.4999 31.6611 37.4999ZM31.6611 11.4999L34.1854 6.7874L36.8658 11.5124V29.9999H31.6611V11.4999ZM31.6611 32.0374H36.8658V35.0874H31.6611V32.0374Z"
                  fill="white"
                />
              </svg>
              <h6 className="m-b-15">Lay a Tech & UX Foundation</h6>
              <p>
                We ensure architecture and user experience come together which
                is critical to build successful user adoptable products
              </p>
            </div>
            <div className="success-card">
              <svg
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.524 4.21875C21.3798 4.21875 18.8331 6.73594 18.8331 9.84375H10.2969V16.875C7.15271 16.875 4.60606 19.3922 4.60606 22.5C4.60606 25.6078 7.15271 28.125 10.2969 28.125V35.1562H18.8331C18.8331 38.2641 21.3798 40.7812 24.524 40.7812C27.6681 40.7812 30.2148 38.2641 30.2148 35.1562H38.751V25.3125H35.9056C34.2126 25.3125 33.0602 24.1734 33.0602 22.5C33.0602 20.8266 34.2126 19.6875 35.9056 19.6875H38.751V9.84375H30.2148C30.2148 6.73594 27.6681 4.21875 24.524 4.21875ZM24.524 7.03125C26.217 7.03125 27.3694 8.17031 27.3694 9.84375V12.6562H35.9056V16.875C32.7614 16.875 30.2148 19.3922 30.2148 22.5C30.2148 25.6078 32.7614 28.125 35.9056 28.125V32.3438H27.3694V35.1562C27.3694 36.8297 26.217 37.9688 24.524 37.9688C22.8309 37.9688 21.6786 36.8297 21.6786 35.1562V32.3438H13.1423V25.3125H10.2969C8.60387 25.3125 7.45148 24.1734 7.45148 22.5C7.45148 20.8266 8.60387 19.6875 10.2969 19.6875H13.1423V12.6562H21.6786V9.84375C21.6786 8.17031 22.8309 7.03125 24.524 7.03125Z"
                  fill="white"
                />
              </svg>
              <h6 className="m-b-15">Apply Best Fit Dev Frameworks</h6>
              <p>
                We employ technologies, frameworks, 3rd party components and
                cloud services to build secure and fast apps
              </p>
            </div>
            <div className="success-card">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.70679 30.5708L20.2674 20.0747L22.136 21.9306L11.5741 32.4266L9.70679 30.5708Z"
                  fill="white"
                />
                <path
                  d="M22.532 39.375C22.3648 39.3754 22.199 39.3442 22.0434 39.2831C21.8271 39.1974 21.6374 39.0563 21.4936 38.8742C21.3498 38.6921 21.257 38.4754 21.2247 38.2462L19.9041 29.0587L22.5452 28.6912L23.5357 35.6081L27.8143 32.1825V22.3125C27.8133 22.1397 27.8466 21.9685 27.9123 21.8086C27.978 21.6487 28.0749 21.5032 28.1973 21.3806L33.572 16.0387C34.6795 14.9455 35.5578 13.6448 36.1562 12.212C36.7546 10.7791 37.0612 9.24258 37.0583 7.69121V5.24996H34.602C33.0411 5.24701 31.4951 5.55173 30.0535 6.14649C28.6118 6.74126 27.3032 7.61425 26.2032 8.71496L20.8285 14.0568C20.7051 14.1785 20.5588 14.2747 20.3979 14.34C20.237 14.4053 20.0647 14.4385 19.8909 14.4375H9.96024L6.51356 18.7162L13.4729 19.7006L13.1032 22.3256L3.85922 21.0131C3.62857 20.9809 3.41059 20.8887 3.22737 20.7458C3.04415 20.6029 2.90222 20.4144 2.81597 20.1993C2.72866 19.9828 2.70099 19.7471 2.7358 19.5164C2.77062 19.2857 2.86667 19.0684 3.01406 18.8868L8.29633 12.3243C8.41798 12.1672 8.57385 12.0396 8.75225 11.9509C8.93064 11.8623 9.12693 11.8149 9.32637 11.8125H19.3495L24.328 6.85121C25.6739 5.50603 27.2751 4.4398 29.0387 3.71432C30.8023 2.98885 32.6933 2.61857 34.602 2.62496H37.0583C37.7587 2.62496 38.4305 2.90152 38.9258 3.3938C39.4211 3.88609 39.6994 4.55377 39.6994 5.24996V7.69121C39.7058 9.58825 39.3333 11.4677 38.6033 13.2206C37.8734 14.9734 36.8006 16.5648 35.4472 17.9025L30.4554 22.8506V32.8125C30.4545 33.0096 30.4089 33.204 30.3221 33.3812C30.2352 33.5585 30.1093 33.714 29.9536 33.8362L23.3508 39.0862C23.1184 39.2715 22.8299 39.3732 22.532 39.375Z"
                  fill="white"
                />
              </svg>
              <h6 className="m-b-15">Go Live In Sight all Through</h6>
              <p>
                We employ agile development methodologies supported by DevOps
                and emerging techniques in code management
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="container">
          <h2 className="title m-b-100">
            We share your vision in any engagement model
          </h2>
          <div className="vision-wrap d-flex-space-center">
            <div className="vision-item">
              <h5>IDEATION</h5>
              <p>
                Validate and enhance your business idea at the proof of concept
                stage before making major investments in a development track
              </p>
            </div>
            <div className="vision-item">
              <h5>EXTENDED TEAM</h5>
              <p>
                Execute with a team dedicated to your project and shared
                responsibility of building your solution
              </p>
            </div>
            <div className="vision-item">
              <h5>FULL PROJECT</h5>
              <p>
                Execute with a team dedicated to your project and shared
                responsibility of building your solution
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies">
        <div className="container">
          <h2 className="title m-b-75">Technologies we use</h2>
          <div className="tech-wrap m-b-50">
            <p className="tech-title">Application Development</p>
            <div className="tech-holder">
              <div className="d-flex">
                <img src={appDev1} alt="" />
                <img src={appDev2} alt="" />
              </div>
              <div className="d-flex">
                <img src={appDev3} alt="" />
                <img src={appDev4} alt="" />
              </div>
            </div>
          </div>
          <div className="tech-wrap m-b-50">
            <p className="tech-title">Cloud & DevOps</p>
            <div className="tech-holder">
              <div className="d-flex">
                <img src={cloud1} alt="" />
                <img src={cloud2} alt="" />
              </div>
              <div className="d-flex">
                <img src={cloud3} alt="" />
                <img src={cloud4} alt="" />
              </div>
            </div>
          </div>
          <div className="tech-wrap m-b-50">
            <p className="tech-title">AI/ML Frameworks</p>
            <div className="tech-holder">
              <div className="d-flex">
                <img src={dataScience1} alt="" />
                <img src={dataScience2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
