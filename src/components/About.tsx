import "./styles/About.css";
import { TbNotes } from "react-icons/tb";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-scene-container" aria-hidden="true"></div>
      <div className="about-me">
        <h3 className="title">ABOUT ME</h3>
        <p className="para">
          I'm a Computer Science Engineering student who enjoys building
          interactive digital experiences and solving real-world problems
          through code.
        </p>
        <p className="para">
          I work with HTML, CSS, JavaScript, Python, C++, MySQL, and React, and
          I'm continuously improving my development skills through personal
          projects and hackathons.
        </p>
        <a
          href="Aadhish_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="about-resume-btn"
          data-cursor="disable"
        >
          <span>View Resume</span>
          <TbNotes className="about-resume-icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
