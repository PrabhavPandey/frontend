import Feature3Img from "../../Assets/Img/Feature-3.svg";
import Feature2Img from "../../Assets/Img/Feature-2.svg";
import Feature1Img from "../../Assets/Img/Feature-1.svg";
import Feature1Blue from "../../Assets/Img/navigateCampus_Blue.svg";
import Feature1Pink from "../../Assets/Img/navigateCampus_Pink.svg";
import Feature2Blue from "../../Assets/Img/happeningSnu_Blue.svg";
import Feature2Pink from "../../Assets/Img/happeningSnu_Pink.svg";
import Feature3Blue from "../../Assets/Img/adminContact_Blue.svg";
import Feature3Pink from "../../Assets/Img/adminContact_pink.svg";
import arrowLeft from "../../Assets/Img/arrowLeft.svg";
import arrowRight from "../../Assets/Img/arrowRight.svg";
import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function InfoComponent__Mobile() {
  const [infoIndex, setInfoIndex] = React.useState(0);
  const [theme, setTheme] = React.useState("");
  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });
  ``;
  const indicatorScrollRight = () => {
    infoIndex < 2 ? setInfoIndex(infoIndex + 1) : 2;
  };

  const indicatorScrollLeft = () => {
    infoIndex > 0 ? setInfoIndex(infoIndex - 1) : 0;
  };

  return (
    <div className="MobileContainer">
      <h1 className="MobileContainer__title">
        {infoIndex === 0
          ? "Navigate"
          : infoIndex === 1
          ? "Happening"
          : "Admin &"}{" "}
        <span>
          {infoIndex === 0 ? "Campus" : infoIndex === 1 ? "@SNU" : "Info"}
        </span>
      </h1>
      <p className="MobileContainer__desc">
        We get it, life is hard. Navigating through campus shouldn't be.
        All resources to unlock everything SNU has
        to offer all in one place. Just a search away.
      </p>
      <ButtonLink
        href={`
      ${infoIndex === 0 ? "/navigate" : ""} 
      ${infoIndex === 1 ? "/events" : ""}
      ${infoIndex === 2 ? "/admin" : ""}
      `}
        content={
          infoIndex === 0
            ? "Explore now"
            : infoIndex === 1
            ? "Find an Event"
            : "Admin & Info"
        }
      />
      <div className="MobileContainer__ImageContainer">
        <img
          className="MobileContainer__ImageContainer__image"
          src={
            infoIndex === 0
              ? theme == "light"
                ? Feature1Img
                : theme == "dark"
                ? Feature1Blue
                : Feature1Pink
              : infoIndex === 1
              ? theme == "light"
                ? Feature2Img
                : theme == "dark"
                ? Feature2Blue
                : Feature2Pink
              : theme == "light"
              ? Feature3Img
              : theme == "dark"
              ? Feature3Blue
              : Feature3Pink
          }
        ></img>
      </div>
      <div className="MobileContainer__scrollerContainer">
        <img
          className="MobileContainer__scrollerContainer__arrow"
          src={arrowLeft}
          onClick={() => indicatorScrollLeft()}
        />
        <div className="MobileContainer__scrollerContainer__indicators">
          <div className={infoIndex === 0 ? "circle active" : "circle"}></div>
          <div className={infoIndex === 1 ? "circle active" : "circle"}></div>
          <div className={infoIndex === 2 ? "circle active" : "circle"}></div>
        </div>
        <img
          className="MobileContainer__scrollerContainer__arrow"
          src={arrowRight}
          onClick={() => indicatorScrollRight()}
        />
      </div>
    </div>
  );
}
