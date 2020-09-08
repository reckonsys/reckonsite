import "./app.css";
import React, { useState } from "react";
import { Link, Router } from "components/Router";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import footerLogo from "../src/assets/images/reckonsys_logo_small.svg";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "active" : "",
      };
    }}
  />
);

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const clickHandler = () => {
    if (window.innerWidth < 998) {
      setIsChecked(!isChecked);
    }
  };
  return (
    <Root>
      <header className="d-flex-space-center header">
        <div className="brand-logo">
          <NavLink to="/">
            <svg
              width="161"
              height="29"
              viewBox="0 0 161 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.2853 6.53643V10.9574C41.7912 10.8395 41.3237 10.745 40.8901 10.81C38.3028 11.1982 37.2085 13.7365 37.0753 15.305C36.9866 16.3507 36.9866 18.3106 37.0753 21.1846L33.3086 22.552C32.6448 16.8956 33.0094 11.6143 34.8184 9.4426C37.5319 6.18513 39.96 6.38906 41.1227 6.38906C41.5586 6.38906 41.9946 6.44801 42.2853 6.53643ZM48.1928 12.3058H53.9975C53.9392 11.1783 53.1807 9.81346 51.0805 9.81346C49.2137 9.81346 48.2803 11.208 48.1928 12.3058ZM54.3252 16.0407L58.0007 17.1012C57.3061 19.6347 55.0198 21.7558 51.3733 21.7558C47.4085 21.7558 43.8777 18.8688 43.8777 13.9491C43.8777 9.23561 47.3216 6.23077 51.055 6.23077C55.5118 6.23077 58.2612 9.02939 58.2612 13.7429C58.2612 14.3615 58.2033 15.0391 58.1743 15.1274H48.1609C48.2477 16.7772 49.7237 17.9555 51.4312 17.9555C53.0229 17.9555 53.9201 17.1896 54.3252 16.0407ZM66.7025 10.3551C64.8788 10.3551 63.4026 11.6513 63.4026 14.008C63.4026 16.3353 64.9367 17.6315 66.7604 17.6315C68.4682 17.6315 69.4234 16.5415 69.7418 15.4515L73.6206 16.6593C72.9838 19.2223 70.6102 21.7558 66.7604 21.7558C62.4763 21.7558 59.0317 18.5447 59.0317 14.008C59.0317 9.44182 62.3895 6.23077 66.6156 6.23077C70.5813 6.23077 72.897 8.70534 73.5338 11.3272L69.5971 12.535C69.2787 11.4156 68.4103 10.3551 66.7025 10.3551ZM89.7889 6.69098L84.1734 12.8514L89.9047 21.3404H84.5207L81.134 16.1821L79.7156 17.7444V21.3404H75.3158V0H79.7156V11.6134L84.0865 6.69098H89.7889ZM96.9423 17.7058C98.6183 17.7058 100.179 16.5202 100.179 14.0304C100.179 11.5406 98.6183 10.3846 96.9423 10.3846C95.2953 10.3846 93.7061 11.5406 93.7061 14.0304C93.7061 16.4905 95.2953 17.7058 96.9423 17.7058ZM96.9166 6.23077C101.222 6.23077 104.545 9.44182 104.545 13.9785C104.545 18.5153 101.222 21.7558 96.9166 21.7558C92.6401 21.7558 89.2883 18.5153 89.2883 13.9785C89.2883 9.44182 92.6401 6.23077 96.9166 6.23077ZM110.808 12.9258V21.3404H106.394V6.66652H110.663V8.34943C111.447 6.96177 113.219 6.28269 114.7 6.28269C118.33 6.28269 119.956 8.91041 119.956 12.1286V21.3404H115.542V12.8963C115.542 11.4495 114.787 10.3571 113.19 10.3571C111.738 10.3571 110.808 11.4495 110.808 12.9258ZM121.446 17.1601L125.181 16.4826C125.239 17.4842 125.934 18.4563 127.44 18.4563C128.569 18.4563 129.119 17.8377 129.119 17.1896C129.119 16.6593 128.772 16.2174 127.701 15.9818L126.05 15.5988C122.98 14.9212 121.764 13.1537 121.764 11.0915C121.764 8.41075 124.081 6.23077 127.295 6.23077C131.465 6.23077 132.913 8.8821 133.058 10.5907L129.409 11.2683C129.293 10.2961 128.685 9.47128 127.353 9.47128C126.513 9.47128 125.789 9.97209 125.789 10.738C125.789 11.3567 126.282 11.7102 126.919 11.828L128.83 12.211C131.813 12.8296 133.261 14.6561 133.261 16.8066C133.261 19.3107 131.378 21.7558 127.527 21.7558C123.009 21.7558 121.561 18.7804 121.446 17.1601ZM140.473 27H135.837L139.111 19.3868L133.055 6.69808H137.981L141.487 14.5474L144.674 6.69808H149.339L140.473 27ZM149.185 17.1601L152.921 16.4826C152.979 17.4842 153.674 18.4563 155.179 18.4563C156.309 18.4563 156.859 17.8377 156.859 17.1896C156.859 16.6593 156.511 16.2174 155.44 15.9818L153.789 15.5988C150.72 14.9212 149.504 13.1537 149.504 11.0915C149.504 8.41075 151.82 6.23077 155.035 6.23077C159.205 6.23077 160.652 8.8821 160.797 10.5907L157.149 11.2683C157.033 10.2961 156.425 9.47128 155.093 9.47128C154.253 9.47128 153.529 9.97209 153.529 10.738C153.529 11.3567 154.021 11.7102 154.658 11.828L156.569 12.211C159.552 12.8296 161 14.6561 161 16.8066C161 19.3107 159.118 21.7558 155.266 21.7558C150.749 21.7558 149.301 18.7804 149.185 17.1601Z"
                fill="#27303C"
                id="reckonsys"
              />
              <path
                d="M16.7339 0.48009C23.3822 1.56087 28.5117 7.28356 28.6336 14.2712C28.7531 21.1152 24.0292 26.9142 17.6274 28.3825L11.1195 16.4488C15.3888 15.6056 18.5155 11.2505 18.4296 6.33189C18.3914 4.14241 17.7964 2.14128 16.7339 0.48009ZM12.0335 28.5363C6.34616 27.5587 1.7931 23.1798 0.577613 17.5326L0.576654 17.4777L5.95059 17.3839L12.0335 28.5363ZM0.251574 12.292L6.93489 12.1754C11.112 12.1025 13.5168 9.66723 13.4562 6.19807C13.3936 2.60929 10.9063 0.319281 6.72921 0.392192L0.0458984 0.50885L0.251574 12.292Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="26.6109"
                  y1="22.4696"
                  x2="0.309381"
                  y2="0.514015"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6D31" />
                  <stop offset="1" stopColor="#FB0389" />
                </linearGradient>
              </defs>
            </svg>
          </NavLink>
        </div>
        <div className="header-nav">
          <input type="checkbox" id="mobileToggle" checked={isChecked} />
          <label
            className="mobile-toggle"
            htmlFor="mobileToggle"
            onClick={() => clickHandler()}
          >
            <span className="mobile-toggle__icon"></span>
            <span className="mobile-toggle__icon"></span>
            <span className="mobile-toggle__icon"></span>
          </label>
          <div
            className={
              window.innerWidth < 998 && isChecked
                ? "nav-menu open"
                : "nav-menu"
            }
          >
            <NavLink to="/who-we-are" onClick={() => clickHandler()}>
              Who we are
            </NavLink>
            <NavLink to="/what-we-do" onClick={() => clickHandler()}>
              What we do
            </NavLink>
            <NavLink to="/our-works" onClick={() => clickHandler()}>
              Our Works
            </NavLink>
            <NavLink to="/careers" onClick={() => clickHandler()}>
              Careers
            </NavLink>
            <NavLink to="/blog" onClick={() => clickHandler()}>
              Blogs
            </NavLink>
            <NavLink to="/contact-us" onClick={() => clickHandler()}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </header>
      <div className="content" style={{ minHeight: "100vh" }}>
        <React.Suspense fallback={<em></em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <footer className="footer">
        <div className="lets-talk">
          <div className="container">
            <div className="lets-talk-content m-b-50">
              <p>
                Have an great idea & <br /> want it to come alive
              </p>
            </div>
            <Link to="/contact-us">
              <button className="btn btn--small">Lets Talk</button>
            </Link>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-nav d-flex-v-center m-b-60">
            <div className="footer-nav-left d-flex-v-center">
              <NavLink to="/who-we-are" to="/">
                <img src={footerLogo} alt="" />
              </NavLink>
              <NavLink to="/who-we-are">Who we are</NavLink>
              <NavLink to="/what-we-do">What we do</NavLink>
              <NavLink to="/our-works">Our Works</NavLink>
              <NavLink to="/careers">Careers</NavLink>
              <NavLink to="/blog">Blogs</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </div>
            <div className="social-links d-flex-v-center ml-auto">
              <a href="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9999 0.639893C7.51669 0.639893 0.639893 7.51669 0.639893 15.9999C0.639893 24.4831 7.51669 31.3599 15.9999 31.3599C24.4831 31.3599 31.3599 24.4831 31.3599 15.9999C31.3599 7.51669 24.4831 0.639893 15.9999 0.639893ZM12.2399 22.3663H9.12949V12.3567H12.2399V22.3663ZM10.6655 11.1279C9.68309 11.1279 9.04789 10.4319 9.04789 9.57109C9.04789 8.69269 9.70229 8.01749 10.7055 8.01749C11.7087 8.01749 12.3231 8.69269 12.3423 9.57109C12.3423 10.4319 11.7087 11.1279 10.6655 11.1279ZM23.5999 22.3663H20.4895V16.8191C20.4895 15.5279 20.0383 14.6511 18.9135 14.6511C18.0543 14.6511 17.5439 15.2447 17.3183 15.8159C17.2351 16.0191 17.2143 16.3071 17.2143 16.5935V22.3647H14.1023V15.5487C14.1023 14.2991 14.0623 13.2543 14.0207 12.3551H16.7231L16.8655 13.7455H16.9279C17.3375 13.0927 18.3407 12.1295 20.0191 12.1295C22.0655 12.1295 23.5999 13.5007 23.5999 16.4479V22.3663Z"
                    fill="#27303C"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4197 0.919678C7.41198 0.919678 0.919678 7.41198 0.919678 15.4197C0.919678 22.6559 6.22141 28.6537 13.1546 29.7457V19.612H9.47118V15.4197H13.1546V12.225C13.1546 8.58805 15.3196 6.58249 18.6303 6.58249C20.2168 6.58249 21.8786 6.86527 21.8786 6.86527V10.4312H20.0456C18.2475 10.4312 17.6848 11.5507 17.6848 12.6978V15.4168H21.7032L21.0607 19.6091H17.6848V29.7428C24.6179 28.6566 29.9197 22.6574 29.9197 15.4197C29.9197 7.41198 23.4274 0.919678 15.4197 0.919678Z"
                    fill="#27303C"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9999 0.639893C7.51669 0.639893 0.639893 7.51669 0.639893 15.9999C0.639893 24.4831 7.51669 31.3599 15.9999 31.3599C24.4831 31.3599 31.3599 24.4831 31.3599 15.9999C31.3599 7.51669 24.4831 0.639893 15.9999 0.639893ZM22.2479 13.2223C22.2543 13.3535 22.2559 13.4847 22.2559 13.6127C22.2559 17.6127 19.2143 22.2223 13.6495 22.2223C12.0052 22.225 10.395 21.7528 9.01269 20.8623C9.24789 20.8911 9.48949 20.9023 9.73429 20.9023C11.1519 20.9023 12.4559 20.4207 13.4911 19.6079C12.8602 19.5955 12.249 19.3866 11.7425 19.0103C11.236 18.634 10.8595 18.1091 10.6655 17.5087C11.1185 17.5948 11.5853 17.5768 12.0303 17.4559C11.3456 17.3174 10.7298 16.9464 10.2874 16.4058C9.84504 15.8651 9.60326 15.1881 9.60309 14.4895V14.4527C10.0111 14.6783 10.4783 14.8159 10.9743 14.8319C10.3324 14.4046 9.87795 13.7482 9.70396 12.9969C9.52998 12.2456 9.64957 11.4563 10.0383 10.7903C10.7982 11.7247 11.7459 12.4891 12.82 13.034C13.8941 13.5789 15.0706 13.8922 16.2735 13.9535C16.1206 13.3044 16.1864 12.6229 16.4607 12.0151C16.735 11.4073 17.2025 10.9071 17.7904 10.5923C18.3783 10.2776 19.0538 10.1658 19.7117 10.2746C20.3697 10.3833 20.9733 10.7063 21.4287 11.1935C22.1058 11.0595 22.7551 10.8112 23.3487 10.4591C23.123 11.1601 22.6506 11.7554 22.0191 12.1343C22.6188 12.0621 23.2045 11.9008 23.7567 11.6559C23.3511 12.2637 22.8401 12.7942 22.2479 13.2223Z"
                    fill="#27303C"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="d-flex-space-center copy-rights-wrap">
            <p className="copyrights">
              Copyright © 2020 Reckonsys Tech Labs Private Ltd. All Rights
              Reserved.
            </p>
            <p className="nasscomm">NASSCOMM</p>
          </div>
        </div>
      </footer>
    </Root>
  );
}

export default App;
