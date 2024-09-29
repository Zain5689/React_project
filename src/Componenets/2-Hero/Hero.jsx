import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../Animation/developer.json";
function Hero() {
  return (
    <>
      <section
        className="hero flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className="side-left ">
          <div className="aveter flex">
            <img src="/public/img.jpg" alt="Avter" className="avert" />
            <div className="icon-checkmark-outline icon"></div>
          </div>
          <h1>Software designer, founder, and amateur astronaut.</h1>
          <p>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="icon-all flex">
            <span className="icon icon-social-twitter"></span>
            <span className="icon icon-instagram1"></span>
            <span className="icon icon-github"></span>
            <span className="icon icon-linkedin-square"></span>
          </div>
        </div>
        <div className="side-right">
          <Lottie animationData={devAnimation} loop={true} className="anim" />
        </div>
      </section>
    </>
  );
}

export default Hero;
