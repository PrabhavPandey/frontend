import React, { useState } from "react";
import InfoComponent__Desktop from "~/Components/InfoComponent__Desktop/InfoComponent__Desktop";
import InfoComponent__Mobile from "~/Components/InfoComponent__Mobile/InfoComponent__Mobile";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import Header from "~/Components/Header/Header";
import SearchBar from "~/Components/SearchBar/SearchBar";
import Banner from "~/Components/Banner/Banner";
import styleSheet from "~/styles/routes/LandingPage.css";
import "~/styles/root/global.css";
import arrow from "../Assets/Img/Arrow.svg";
import darkModeArrow from "../Assets/Img/darkModeArrow.svg"
import blueArrow from "../Assets/Img/blueArrow.svg";
import instagramLogo from "../Assets/Img/instagramLogo.svg";

const Sections = [
  {
    className: "aboutSection__View1",
  },
  {
    className: "aboutSection__View2",
  },
  {
    className: "aboutSection__View3",
  },
];

import { useMediaQuery } from "react-responsive";
import useScrollEffect from "~/Hooks/Observer";
import Footer from "~/Components/Footer/Footer";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function LandingPage() {
  const [theme, setTheme] = useState("");
  const toggleTheme = (value) => {
    setTheme(value);
  };
  const callToAction = useMediaQuery({
    query: "(max-width: 1095px)",
  });

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });

  const references = React.useRef([]);
  references.current = [];

  const { view } = useScrollEffect(Sections[0].className, references.current);

  const addRef = (element) => {
    if (element && !references.current.includes(element)) {
      references.current.push(element);
    }
  };

  return (
    <div className="LandingPage">
      <Header />
      <main className="LandingPage__mainContainer">
        <section className="heroSection">
          <div className="heroSection__top">
            <div className="heroSection__top--left">
              <img className="heroSection__arrow" src={arrow} alt="Arrow" />
              <div className="heroSection__title">
                <h1>
                  Your <b className="heroSection__title--unhighlight">guide</b>,
                </h1>
                <h1>
                  To all <b className="heroSection__title--unhighlight">things</b> <b className="heroSection__title--highlight">SNU</b>
                </h1>
              </div>
              <div className="heroSection__desc">
                <p>
                  We get it, life is hard. Navigating through campus and keeping
                  track of events and info shouldn't be. Unlock everything SNU
                  has to offer. All just a search away!
                </p>
              </div>
              {!callToAction && (
                <div className="heroSection__callToAction">
                  <ButtonLink
                    href="/#learn-more"
                    content="Learn More"
                    onClick={() => {
                      window.scrollTo({
                        top: document.querySelector(".aboutSection").offsetTop,
                        behavior: "smooth",
                      });
                    }}
                  />
                  <ButtonLink href="/about" content="Contact Us" fill />
                </div>
              )}
            </div>
            <div className="heroSection__top--right">
              <div className="heroSection__funFact">
                <span>Fun Fact:&nbsp;</span>
                <p>Absolutely fixed relatively broken coordinates</p>
              </div>
              <SearchBar />
              <div className="heroSection__instagramDiv">
                <p className="heroSection__instagramDiv--text">
                  Don’t forget to follow our instagram for regular updates!
                </p>
                <div className="heroSection__instagramDiv--instaHandle">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/snu.xplore/"
                  >
                    <img
                      className="heroSection__instagramDiv--instaHandle--instaLogo"
                      src={instagramLogo}
                      alt="instagram icon"
                    />
                    @snu.xplore
                  </a>
                  <img
                    className="heroSection__instagramDiv--blueArrow"
                    src={blueArrow}
                    alt="blueArrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="heroSection__bottom">
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">Clubs on our Platform</p>
              <p className="heroSection__stats--stat">60+</p>
            </div>
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">
                Locations on SNUxplore
              </p>
              <p className="heroSection__stats--stat">50+</p>
            </div>
            <div className="heroSection__stats">
              <p className="heroSection__stats--title">Number of Members</p>
              <p className="heroSection__stats--stat">14</p>
            </div>
          </div>
        </section>
        <section className="aboutSection">
          <InfoComponent__Desktop
            indicatorState={
              view === Sections[0].className
                ? 1
                : view === Sections[1].className
                  ? 2
                  : 3
            }
          />
          <InfoComponent__Mobile />
          {Sections.map((section, index) => {
            return (
              <section
                key={index}
                className={section.className}
                ref={addRef}
              ></section>
            );
          })}
        </section>
      </main>
      <Banner
        title1="Still have"
        title2="Questions?"
        desc='"These features are cool and all, but I have another question about campus and the credit system"
          Feels like you? Click below!'
        href="/faqs"
        fillType="fill2"
        redirectContent="Checkout the FAQ"
      />
      <Footer />
    </div>
  );
}
