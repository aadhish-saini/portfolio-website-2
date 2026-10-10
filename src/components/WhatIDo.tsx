import { useState } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const handleCardClick = (index: number) => {
    setActiveCard((prev) => (prev === index ? (index === 0 ? 1 : 0) : index));
  };

  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="var(--color-accent-soft)"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="var(--color-accent-soft)"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Card 1: BUILD */}
          <div
            className={`what-content what-noTouch ${
              activeCard === 0 ? "what-content-active" : "what-sibling"
            }`}
            onClick={() => handleCardClick(0)}
            onMouseEnter={() => setActiveCard(0)}
            role="button"
            tabIndex={0}
            aria-expanded={activeCard === 0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(0);
              }
            }}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="var(--color-accent-soft)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="var(--color-accent-soft)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BUILD</h3>
              <p>
                I build interactive web experiences and practical project
                interfaces using the technologies I'm learning, from JavaScript
                to React.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">Three.js</div>
                <div className="what-tags">React</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">PHP</div>
                <div className="what-tags">MySQL</div>
              </div>
            </div>
            <div className="what-arrow" aria-hidden="true"></div>
          </div>

          {/* Card 2: Problem Solving */}
          <div
            className={`what-content what-noTouch ${
              activeCard === 1 ? "what-content-active" : "what-sibling"
            }`}
            onClick={() => handleCardClick(1)}
            onMouseEnter={() => setActiveCard(1)}
            role="button"
            tabIndex={0}
            aria-expanded={activeCard === 1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(1);
              }
            }}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="var(--color-accent-soft)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Problem Solving</h3>
              <p>
                I explore programming and AI-powered project ideas to understand
                how technology can solve practical problems. Through projects
                and hackathons, I'm continuously learning and improving my
                development skills.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">Problem Solving</div>
                <div className="what-tags">AI Projects</div>
                <div className="what-tags">Hackathons</div>
                <div className="what-tags">3D Animation</div>
                <div className="what-tags">Modelling</div>
              </div>
            </div>
            <div className="what-arrow" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
