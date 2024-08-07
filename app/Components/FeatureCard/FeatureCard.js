import React from "react";
import styleSheet from "~/styles/routes/LandingPage.css";
import NavigationMadeEasyCardImg from "../../Assets/Img/NavigationMadeEasyCardImg.svg";
// import appLogo from "../../Assets/Img/xploreLogo.svg";

function FeatureCard({
    img: imgSrc,
    title = 'Navigation Made Easy',
    desc = 'Find detailed information on all buildings and locations on campus. Locate the Dargaah, call your warden. All of it is here, just for you.',
    // link = { to: 'something', text: 'Learn More' }
    link = '/'
}) {
  return (
    <div className="FeatureCardWrapper">
        <div className="FeatureCardWrapper__imgContainer">
            <img src={imgSrc} className="FeatureCardWrapper__imgContainer--img" />
        </div>
        <div className="FeatureCardWrapper__content">
            <h4 className="FeatureCardWrapper__content--title">{title}</h4>
            <p className="FeatureCardWrapper__content--desc">{desc}</p>
            <a href={link} className="FeatureCardWrapper__content--link">Learn more</a>
        </div>
    </div> 
  );
}

export default FeatureCard;
