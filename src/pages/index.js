import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                New Age is an gatsby starter for app landing page that will help
                you beautifully showcase your new mobile app, or anything else!
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  Start Now for Free!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Discover what all the buzz is about!
            </h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Unlimited Features, Unlimited Fun</h2>
          <p className="text-muted">
            Check out what you can do with this app theme!
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Device Mockups</h3>
                    <p className="text-muted">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Flexible Use</h3>
                    <p className="text-muted">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Free to Use</h3>
                    <p className="text-muted">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
