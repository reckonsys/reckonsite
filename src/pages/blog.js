import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

import bigga from "../assets/images/home/bigga.png";

export default function Blog() {
  const { posts } = useRouteData();
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="title">Our Write ups</h1>
        </div>
        <div className="blog-carousel">
          <img src={bigga} alt="" className="hero-bg" />
          <div className="blog-container d-flex">
            <div className="nav-arrow nav-arrow-left d-flex-center">
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1" fill="white">
                  <path d="M11.9688 2.1163V0.304578C11.9688 0.147547 11.7883 0.0608283 11.6664 0.156922L1.10081 8.40926C1.01105 8.47908 0.938407 8.56847 0.88844 8.67062C0.838474 8.77278 0.8125 8.885 0.8125 8.99872C0.8125 9.11244 0.838474 9.22466 0.88844 9.32681C0.938407 9.42897 1.01105 9.51836 1.10081 9.58817L11.6664 17.8405C11.7907 17.9366 11.9688 17.8499 11.9688 17.6929V15.8811C11.9688 15.7663 11.9149 15.6561 11.8258 15.5858L3.38832 8.99989L11.8258 2.41161C11.9149 2.3413 11.9688 2.23114 11.9688 2.1163Z" />
                </mask>
                <path
                  d="M11.6664 0.156922L15.9753 5.67361L15.9879 5.66374L16.0005 5.65381L11.6664 0.156922ZM1.10081 8.40926L5.39805 13.935L5.40386 13.9305L5.40966 13.926L1.10081 8.40926ZM0.8125 8.99872H7.8125H0.8125ZM1.10081 9.58817L5.40966 4.07148L5.40386 4.06695L5.39805 4.06243L1.10081 9.58817ZM11.6664 17.8405L7.3576 23.3572L7.37044 23.3672L7.38334 23.3772L11.6664 17.8405ZM11.8258 15.5858L16.1633 10.0916L16.1482 10.0797L16.1329 10.0678L11.8258 15.5858ZM3.38832 8.99989L-0.919765 3.4826L-7.98692 9.00087L-0.918813 14.5179L3.38832 8.99989ZM11.8258 2.41161L16.1339 7.9289L16.1486 7.91738L16.1633 7.90579L11.8258 2.41161ZM18.9688 2.1163V0.304578H4.96878V2.1163H18.9688ZM18.9688 0.304578C18.9688 -5.69121 12.0514 -9.06077 7.33236 -5.33996L16.0005 5.65381C11.5252 9.18243 4.96878 5.98631 4.96878 0.304578H18.9688ZM7.3576 -5.35977L-3.20803 2.89257L5.40966 13.926L15.9753 5.67361L7.3576 -5.35977ZM-3.19642 2.88353C-4.12774 3.60779 -4.88131 4.53519 -5.39967 5.59497L7.17655 11.7463C6.75812 12.6017 6.14983 13.3504 5.39805 13.935L-3.19642 2.88353ZM-5.39967 5.59497C-5.91804 6.65475 -6.1875 7.81894 -6.1875 8.99872H7.8125C7.8125 9.95106 7.59498 10.8908 7.17655 11.7463L-5.39967 5.59497ZM-6.1875 8.99872C-6.1875 10.1785 -5.91804 11.3427 -5.39967 12.4025L7.17655 6.25115C7.59498 7.10663 7.8125 8.04638 7.8125 8.99872H-6.1875ZM-5.39967 12.4025C-4.88129 13.4623 -4.12771 14.3897 -3.19642 15.1139L5.39805 4.06243C6.1498 4.64705 6.75811 5.39565 7.17655 6.25115L-5.39967 12.4025ZM-3.20803 15.1049L7.3576 23.3572L15.9753 12.3238L5.40966 4.07148L-3.20803 15.1049ZM7.38334 23.3772C12.0689 27.0019 18.9688 23.7161 18.9688 17.6929H4.96878C4.96878 11.9837 11.5124 8.87132 15.9495 12.3038L7.38334 23.3772ZM18.9688 17.6929V15.8811H4.96878V17.6929H18.9688ZM18.9688 15.8811C18.9688 13.616 17.9276 11.4845 16.1633 10.0916L7.48831 21.08C5.90213 19.8278 4.96878 17.9166 4.96878 15.8811H18.9688ZM16.1329 10.0678L7.69544 3.48186L-0.918813 14.5179L7.51869 21.1039L16.1329 10.0678ZM7.6964 14.5172L16.1339 7.9289L7.51774 -3.10568L-0.919765 3.4826L7.6964 14.5172ZM16.1633 7.90579C17.9276 6.51292 18.9688 4.38139 18.9688 2.1163H4.96878C4.96878 0.0808866 5.90212 -1.83032 7.48831 -3.08257L16.1633 7.90579Z"
                  fill="#FB0330"
                  mask="url(#path-1-inside-1)"
                />
              </svg>
            </div>
            <div className="blog-content">
              <h6 className="title">
                We recently started using Figma. How did it turn to be better
                than sketch?
              </h6>
              <p className="by-date">By Chaiti , Apr 2020</p>
            </div>
            <div className="nav-arrow nav-arrow-right d-flex-center">
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1" fill="white">
                  <path d="M0.0312157 2.1163V0.304578C0.0312157 0.147547 0.211685 0.0608283 0.33356 0.156922L10.8992 8.40926C10.989 8.47908 11.0616 8.56847 11.1116 8.67062C11.1615 8.77278 11.1875 8.885 11.1875 8.99872C11.1875 9.11244 11.1615 9.22466 11.1116 9.32681C11.0616 9.42897 10.989 9.51836 10.8992 9.58817L0.33356 17.8405C0.209341 17.9366 0.0312157 17.8499 0.0312157 17.6929V15.8811C0.0312157 15.7663 0.0851212 15.6561 0.174184 15.5858L8.61168 8.99989L0.174184 2.41161C0.0851212 2.3413 0.0312157 2.23114 0.0312157 2.1163Z" />
                </mask>
                <path
                  d="M0.0312157 2.1163V0.304578C0.0312157 0.147547 0.211685 0.0608283 0.33356 0.156922L10.8992 8.40926C10.989 8.47908 11.0616 8.56847 11.1116 8.67062C11.1615 8.77278 11.1875 8.885 11.1875 8.99872C11.1875 9.11244 11.1615 9.22466 11.1116 9.32681C11.0616 9.42897 10.989 9.51836 10.8992 9.58817L0.33356 17.8405C0.209341 17.9366 0.0312157 17.8499 0.0312157 17.6929V15.8811C0.0312157 15.7663 0.0851212 15.6561 0.174184 15.5858L8.61168 8.99989L0.174184 2.41161C0.0851212 2.3413 0.0312157 2.23114 0.0312157 2.1163Z"
                  fill="#FB0330"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="other-posts">
        <div className="container">
          <h5 className="title m-b-30">Other posts</h5>
          <div className="row">
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    We recently started using Figma. How did it turn to be
                    better than sketch?
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    Reckonsys Named a Leader in Development Industry on Clutch
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    We recently started using Figma. How did it turn to be
                    better than sketch?
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    We recently started using Figma. How did it turn to be
                    better than sketch?
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    We recently started using Figma. How did it turn to be
                    better than sketch?
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-card">
                <img src={bigga} alt="" />
                <div className="blog-info">
                  <h6>
                    We recently started using Figma. How did it turn to be
                    better than sketch?
                  </h6>
                  <p>By Chaiti , Apr 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
