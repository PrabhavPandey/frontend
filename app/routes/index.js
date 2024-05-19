import React from "react";
import InfoComponentDesktop from "~/Components/InfoComponentDesktop/InfoComponentDesktop";
import InfoComponentMobile from "~/Components/InfoComponentMobile/InfoComponentMobile";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import FeatureCard from "~/Components/FeatureCard/FeatureCard";
import Header from "~/Components/Header/Header";
import Navbar from "~/Components/Navbar/Navbar";
import SearchBar from "~/Components/SearchBar/SearchBar";
import Banner from "~/Components/Banner/Banner";
import styleSheet from "~/styles/routes/LandingPage.css";
import "~/styles/root/global.css";
import arrow from "../Assets/Img/Arrow.svg";
import instagramLogo from "../Assets/Img/instagramLogo.svg";
import hat from "../Assets/Img/hat.svg"
import starleft from "../Assets/Img/starleft.svg"
import starright from "../Assets/Img/starright.svg"
import cardsConvocation from "../Assets/Img/cardsConvocation.svg"
import HeroImage from "../Assets/Img/heroImage.png";
import UsersImage from "../Assets/Img/userPhotos.svg";
import NavigationMadeEasyCardImg from "../Assets/Img/NavigationMadeEasyCardImg.svg";
import SNUGPTGuideCardImg from "../Assets/Img/SNUGPTGuideCardImg.svg";
import AdminInfoCardImg from "../Assets/Img/AdminInfoCardImg.svg";
// import UsersImage from "../Assets/Img/userPhotos.svg";
// import UsersImage from "../Assets/Img/userPhotos.svg";
import UsersImageArrow from "../Assets/Img/userPhotosArrow.svg";
import { useMediaQuery } from "react-responsive";
import useScrollEffect from "~/Hooks/Observer";
import Footer from "~/Components/Footer/Footer";
import InquiryFeedbackSection from "~/Components/InquiryFeedbackSection/InquiryFeedbackSection";

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

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function LandingPage() {
  React.useEffect(() => {
    const getClubs = async () =>
      console.log(await (await fetch("/get-clubs")).json());
    const getEventsByClub = async () =>
      console.log(
        await (
          await fetch("/get-events-by-club?emailId=pa749@snu.edu.in")
        ).json()
      );

    // getClubs();
    // getEventsByClub();
  }, []);

  const callToAction = useMediaQuery({
    query: "(max-width: 1095px)",
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
      <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      {/* <main className="LandingPage__mainContainer">
        <section className="heroSection">
          <div className="heroSection__img">
            <img src={HeroImage} className="heroSection__img--img" />
          </div>
        </section>
      </main> */}
<Navbar />
      <main className="LandingPage__mainContainer">
        {/* <section className="heroSection">
          <div className="heroSection__top">
            <div className="heroSection__top--left">
              <div className="heroSection__title">
                <h1>
                  Experience SNU to the fullest with our <b className="heroSection__title--highlight">comprehensive guide</b>
                </h1>
              </div>
              <div className="heroSection__desc">
                <p>
                  We get it, life is hard. Navigating through campus shouldn't be. Unlock everything SNU has to offer. All just a search away!
                </p>
              </div>
              <div className="heroSection__buttons">
                <ButtonLink
                  content="Navigate"
                  href="/navigate"
                  className="heroSection__buttons--button heroSection__buttons--navigateButton"
                />
                <ButtonLink
                  content="SNU-GPT"
                  href="/snugpt"
                  className="heroSection__buttons--button heroSection__buttons--snugpt"
                />
              </div>
              
              
            </div>
            <div className="heroSection__top--right">
              <div className="heroSection--img">
                <img src={HeroImage} />
              </div>
              
            </div>
          </div>
          <div className="heroSection__bottom">
            <div className="heroSection__users">
              <div className="heroSection__users--left">
                <div className="heroSection__usersData">
                  <div className="heroSection__usersData--count">3.5k</div>
                  <div className="heroSection__usersData--text">users already use snuxplore</div>
                </div>
              </div>
              <div className="heroSection__users--right">
                  <img className="heroSection__users--userImage" src={UsersImage} />
                  <img className="heroSection__users--userImageArrowImg" src={UsersImageArrow} />
              </div>
            </div>
          </div>
          
        </section> */}

     <section className="convocation">
     <div className="convocation__left">
        <div className="convocation__left--img">
                <img src={starleft}/>
        </div>
      </div>
      <div className="convocation__middle">
        <div className="convocation__hat">
          <img src={hat} />
        </div>
        <div className="convocation__title">
          <h1>
          Welcome to the <br/>10th Annual SNIoE<br/><b className="convocation__title--highlight">Convocation!</b>
          </h1>
        </div>
        <div className="convocation__desc">
          <p>
          We get it, life is hard. Navigating through the 286 acre campus shouldn't be. Unlock everything SNU has to offer. All just a search away!
          </p>
        </div>
        <div className="convocation__buttons">
          <ButtonLink
            content="Begin Tour"
            href="/navigate"
            className="convocation__buttons--button convocation__buttons--navigateButton"
           />
          <ButtonLink
            content="SNU-GPT"
            href="/snugpt"
            className="convocation__buttons--button convocation__buttons--snugpt"
          />
        </div>
        <div className="heroSection__bottom">
        <div className="heroSection__users">
              <div className="heroSection__users--left">
                <div className="heroSection__usersData">
                  <div className="heroSection__usersData--count">5.5k</div>
                  <div className="heroSection__usersData--text">users already use snuxplore</div>
                </div>
              </div>
              <div className="heroSection__users--right">
                  <img className="heroSection__users--userImage" src={UsersImage} />
                  <img className="heroSection__users--userImageArrowImg" src={UsersImageArrow} />
              </div>
            </div>
      </div>
      </div>

      <div className="convocation__right">
        <div className="convocation__right--img">
                <img src={starright} />
      </div>
      <div className="convocation__right--cards">
                <img src={cardsConvocation} />
      </div>
    </div>

      


    </section>

        
        
        <section className="featureSection" id="features">
            <div className="featureSection__top">
              <ButtonLink 
                content="Our Features 🔥"
                className="featureSection__top--button"/>
              <div className="featureSection__title">
                <h1 className="featureSection__title--unhighlight">Your Gateway to our<br/><b className="featureSection__title--highlight">Unique Features!</b></h1>
              </div>
              <p className="featureSection--desc">
                We get it, life is hard. Navigating through campus shouldn't be. Unlock everything SNU has to offer. All just a search away!
              </p>
            </div>
            <div className="featureSection__bottom">
              <FeatureCard img={NavigationMadeEasyCardImg} title="Navigation Made Easy" link="/navigate" /> 
              <FeatureCard img={SNUGPTGuideCardImg} title="SNU GPT: Your AI Guide" link="/snugpt" /> 
              <FeatureCard img={AdminInfoCardImg} title="Admin Info" link="/admin" /> 
              {/* <FeatureCard img={NavigationMadeEasyCardImg} ttitle="Navigation Made Easy" />  */}
            </div>
        </section>
        <InquiryFeedbackSection />
        
        {/* <section className="aboutSection">
          <InfoComponentDesktop
            indicatorState={
              view === Sections[0].className
                ? 1
                : view === Sections[1].className
                ? 2
                : 3
            }
          />
          <InfoComponentMobile />
          {Sections.map((section, index) => {
            return (
              <section
                key={index}
                className={section.className}
                ref={addRef}
              ></section>
            );
          })}
        </section> */}
      </main>
      {/* <Banner
        title1="Still have"
        title2="Questions?"
        desc='"These features are cool and all, but I have another question about campus and the credit system"
          Feels like you? Click below!'
        href="/faqs"
        fillType="bannerFill"
        redirectContent="Checkout the FAQ"
      /> */}
      <Footer />
    </div>
  );
}