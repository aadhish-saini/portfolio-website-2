import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Journey 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started My Development Journey</h4>
                <h5>Learning & Building</h5>
              </div>
              <h3>FOUNDATION</h3>
            </div>
            <p>
              Started building websites with HTML and CSS, then explored
              JavaScript to make them interactive. Since then, I've been
              strengthening my programming fundamentals and exploring
              modern frontend development.
            </p>
          </div>

          {/* Journey 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exploring Real-World Projects</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>BUILDING</h3>
            </div>
            <p>
              Working on projects that combine web development, creative
              interfaces, and practical problem-solving. Projects like
              DhruvNetra have helped me explore digital twins and operational
              dashboards for Antarctic research stations.
            </p>
          </div>

          {/* Journey 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Team Collaboration</h4>
                <h5>Smart India Hackathon & College Hackathon</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Participated in hackathon projects, including DhruvNetra,
              submitted under Smart India Hackathon problem statement
              PS26060. I also secured 7th place among 63 teams in an
              internal college hackathon. Currently focused on learning,
              building better projects, and growing as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
