import React from "react";
import Header from "~/Components/Header/Header";
import Footer from "~/Components/Footer/Footer";
import styleSheet from "~/styles/routes/SnuGPT.css";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import HerogptImage from "../Assets/Img/heroGPTImage.png";
import Gradientgpt from "../Assets/Img/Ellipsegpt.png";
import InquiryFeedbackSection from "~/Components/InquiryFeedbackSection/InquiryFeedbackSection";
import Navbar from "~/Components/Navbar/Navbar";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function SnuGPT() {
    return(
    <div className="SnuGPTPage">
    <Header />
    <Navbar />
    <main className="SnuGPTPage__mainContainer">
        <section className="heroSection">
        <div className="heroGPT">        
            <div className="heroGPT__left">
            <div className="heroGPT__title">
            <h1>
                  Introducing <span className="heroGPT__title--highlight">SNU-GPT</span>
                </h1>
                {/* <h1>
                  To all{" "}
                  <b className="heroSection__title--unhighlight">things</b>{" "}
                  <b className="heroSection__title--highlight">SNU</b>
                </h1> */}
              </div>
              <div className="heroGPT__desc">
                <p>
                Coming soon! Currently under development.
                </p>
              </div>
              {/* <div className="heroGPT__buttons">
                <ButtonLink
                  content="Try SNU-GPT"
                  className="heroGPT__buttons--button heroGPT__buttons--snugpt"
                />
              </div> */}
              {/* {<img className="heroGPT__left" src={Gradientgpt} />} */}
              </div>
              <div className="heroGPT__right">
                {<img className="heroGPT__right" src={HerogptImage} />}
                </div>
              
          </div>
        </section>
              <section className="chatbotGPTSection">
                <div className="chatbotGPTSection__chatbotGPT">
                  <div className="chatbotGPTSection__chatbotGPT__chatbox">
                {/* <iframe
                src="https://www.chatbase.co/chatbot-iframe/ZCA-Dkgh07PmpsbVhGweb"
                width="100%"
                className="chatbotGPTSection__chatbotGPT--iframe"
                //style="height: 100%; min-height: 700px"
                frameborder="0"
                ></iframe>   */}
  </div></div>
</section>

              </main>
              
              <InquiryFeedbackSection />
              <Footer />
              </div> 

  )}