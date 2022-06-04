import React from 'react';
import "./portfolio.scss";
import { Link } from 'react-router-dom';
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

export default function Portfolio() {
  return (
    <div className='portfolio' id="portfolio">
      <span class="Title title-position">
        TRUSTED<br />
        BY MANY<span class="Dashes">//</span>
      </span>

      <div class="Red-highlighting red-highlight-position">
        I believe good design is where art, community, and technology fuse to create magic.
      </div>

      <span class="Quotation quotation-position-1">
        Jump down the rabbit hole with me and lets get started on a new project together.<br />
        Contact me through any of the following.<br />
        <br />
        I’ve designed for the following companies. However, when I’m not pixel pushing, you<br />
        can catch me working on web3 stealth startups or personal projects.
      </span>

      <div className="portfolio-section">
        <div className="left-pad"></div>

        <div className="box blockpoly-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/blockpoly-icon.PNG" alt="Blockpoly" className="image blockpoly-image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/blockpoly-icon.PNG" alt="Blockpoly" className="image blockpoly-image"/>
          </div>
          <span className="portfolio-title">
            BLOCKPOLY
          </span>
          <span className="portfolio-position">
            FOUNDING DESIGNER
          </span>
          <span className="portfolio-description">
            Currently a work in<br />
            progress. Metaverse loan<br />
            marketplace.
          </span>
        </div>

        <div className="box double-jump-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/double-jump-icon.PNG" alt="Double Jump" className="double-jump-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/double-jump-icon.PNG" alt="Double Jump" className="double-jump-image image"/>
          </div>
          <span className="portfolio-title">
            DOUBLE JUMP
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
            Designed their responsive<br />
            website and lite page.<br />
            Web3 gaming startup.
          </span>
        </div>

        <div className="box mongodb-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/mongodb-icon.PNG" alt="Mongodb" className="mongodb-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/mongodb-icon.PNG" alt="Mongodb" className="mongodb-image image"/>
          </div>
          <span className="portfolio-title">
            MONGODB
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
            Redesigned the feedback<br />
            widget on Docs + improved<br />
            design system components.
          </span>
        </div>

        <div className="box mcafee-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/mcafee-icon.PNG" alt="Mcafee" className="mcafee-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/mcafee-icon.PNG" alt="Mcafee" className="mcafee-image image"/>
          </div>
          <span className="portfolio-title">
            MCAFEE
          </span>
          <span className="portfolio-position">
            PRODUCT DESIGNER
          </span>
          <span className="portfolio-description">
            Improved the <span class="italics">Pegasus</span><br />
            design system + their<br />
            post purchase experience.
          </span>
        </div>

        <div className="box go-invo-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/goinvo-icon.PNG" alt="Go Invo" className="goinvo-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/goinvo-icon.PNG" alt="Go Invo" className="goinvo-image image"/>
          </div>
          <span className="portfolio-title">
            GOINVO
          </span>
          <span className="portfolio-position">
            UX DESIGNER
          </span>
          <span className="portfolio-description">
            Created a patient<br />
            timeline for OncoHealth +<br />
            ASD task app.
          </span>
        </div>

        <div className="box aeromates-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/aeromates-icon.PNG" alt="Aeromates" className="aeromates-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/aeromates-icon.PNG" alt="Aeromates" className="aeromates-image image"/>
          </div>
          <span className="portfolio-title">
            AEROMATES
          </span>
          <span className="portfolio-position">
            UX DESIGNER
          </span>
          <span className="portfolio-description">
            Designed the iOS and web<br />
            MVP of the aviation<br />
            marketplace.
          </span>
        </div>

        <div className="box haus-of-golf-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/haus-of-golf-icon.PNG" alt="Haus of Golf" className="haus-of-golf-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/haus-of-golf-icon.PNG" alt="Haus of Golf" className="haus-of-golf-image image"/>
          </div>
          <span className="portfolio-title">
            HAUS OF GOLF
          </span>
          <span className="portfolio-position">
            UX DESIGNER
          </span>
          <span className="portfolio-description">
            Created their logo +<br />
            branding guidelines for<br />
            the VR golf startup.
          </span>
        </div>

        <div className="box vrillar-position">
          <div className="image-box">
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/black-portfolio-images/vrillar-icon.PNG" alt="Vrillar" className="vrillar-image image image-hover"/>
            <img src="https://raw.githubusercontent.com/jacksonx9/jacksonx9.github.io/gh-pages/images/white-portfolio-images/vrillar-icon.PNG" alt="Vrillar" className="vrillar-image image"/>
          </div>
          <span className="portfolio-title">
            VRILLAR
          </span>
          <span className="portfolio-position">
            DESIGNER
          </span>
          <span className="portfolio-description">
            Designed the framework<br />
            for their NFT<br />
            marketplace.
          </span>
        </div>

      <span class="Quotation quotation-position-2">
        Curious about my work? Fall into the
        <div onClick={function(e) {
          const anchor = document.querySelector('#contact')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }} class="Black-button black-button-sizing">Rabbit Hole ↓</div>
      </span>
      </div>
    </div>
  )
}
