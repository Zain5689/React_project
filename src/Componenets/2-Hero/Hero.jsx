import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../Animation/developer.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function Hero() {
  return (
    <>
      <section
        id="hero"
        className="hero flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className="side-left ">
          <div className="aveter flex">
            <img src="zainab.jpg" alt="Avter" className="avert" />
            <div className="icon-checkmark-outline icon"></div>
          </div>
          <h1>Hi, I'm Zainab Hilal , </h1>
          <h1>Front-End Developer</h1>
          <p>
            Aspiring Front-End Developer with expertise in React, Next.js,
            TypeScript, and Tailwind CSS. dedicated to creating engaging user
            experiences and continuously enhancing web application performance.
          </p>
        </div>
        <div className="side-right">
          <Lottie animationData={devAnimation} loop={true} className="anim" />
        </div>
      </section>
      <div className="bodder_div" />
      <div className="education">
        <div className=" flex gap-10">
          <FontAwesomeIcon icon={faGraduationCap} className="icon_educ" />
          <h2>Education</h2>
        </div>
        <p>Faculty of Computer and Artificial Intelligence - FCAI</p>
      </div>
    </>
  );
}

export default Hero;
