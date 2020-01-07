import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import LogoSrc from "../images/logo-final.png"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <div id="content">
      <img src={LogoSrc} style={{ width: "35vh" }} />
      <br />
      <h1>We are under construction. We will be back soon!</h1>
      <p>For any queries please get in touch with us at </p>
      <p>
        {" "}
        <b>
          <a
            href="mailto:rd@tisgulf.com"
            style={{ color: "#262324", textDecoration: "none" }}
          >
            rd@tisgulf.com
          </a>
        </b>
      </p>
    </div>
    <div id="outerCraneContainer">
      <div className="buildings">
        <div></div>
        <div className="1"></div>
        <div className="2"></div>
        <div className="3"></div>
        <div className="4"></div>
      </div>
      <div className="crane craneThree">
        <div className="line lineOne"></div>
        <div className="line lineTwo"></div>
        <div className="line lineThree"></div>
        <div className="stand"></div>
        <div className="weight"></div>
        <div className="cabin"></div>
        <div className="arm"></div>
      </div>
      <div className="crane craneTwo">
        <div className="line lineOne"></div>
        <div className="line lineTwo"></div>
        <div className="line lineThree"></div>
        <div className="stand"></div>
        <div className="weight"></div>
        <div className="cabin"></div>
        <div className="arm"></div>
      </div>
      <div className="crane craneOne">
        <div className="line lineOne"></div>
        <div className="line lineTwo"></div>
        <div className="line lineThree"></div>
        <div className="stand"></div>
        <div className="weight"></div>
        <div className="cabin"></div>
        <div className="arm"></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
