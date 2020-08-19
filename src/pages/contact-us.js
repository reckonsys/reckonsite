import React from "react";

export default () => (
  <div>
    <section className="hero-section">
      <div className="container">
        <h1 className="title">We are glad to hear from you</h1>
        <div className="contact-us-wrap m-t-90">
          <div className="row">
            <div className="col-6">
              <div className="input-wrap">
                <label for="">Name</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label for="">Email</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label for="">Company(Optional)</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label for="">Tell us about your Idea</label>
                <textarea name="" id="" cols="30" rows="6"></textarea>
              </div>
              <button className="btn btn--small">Send</button>
            </div>
            <div className="col-6">
              <div className="contact-info">
                <h6 className="title">Reach us at</h6>
                <address>
                  Enzyme Tech Park, <br />
                  1604 1st Floor, 22nd Cross, 25th Main Road, <br />
                  Sector 2, Hsr Layout, Bangalore - 560102
                </address>
                <div className="wrap m-b-40">
                  <p className="label">PHONE</p>
                  <p className="value">08061356100</p>
                </div>
                <div className="wrap m-b-40">
                  <p className="label">EMAIL</p>
                  <p className="value">info@reckonsys.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
