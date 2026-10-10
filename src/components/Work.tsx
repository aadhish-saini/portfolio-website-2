import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export interface Project {
  title: string;
  category: string;
  tools: string;
  link?: string;
  video?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Interactive Developer Portfolio",
    category: "Creative Development",
    tools: "React, TypeScript, CSS, GSAP, Three.js, Vite",
    image: "/images/projects/portfolio-preview.jpg",
  },
  {
    title: "DhruvNetra",
    category: "Antarctic Station Digital Twin",
    tools: "React, JavaScript, Tailwind CSS, Three.js",
    image: "/images/projects/dhruvnetra-preview.jpg",
    video: "/work_videos/DhruvNetra - The Eye of Polar Region.mp4",
  },
  {
    title: "AI Voice Guard",
    category: "AI-Powered Application",
    tools: "HTML, CSS, JavaScript, Python, FastAPI, HuggingFace",
    link: "https://github.com/aadhish-saini/AI-Voice-Guard",
    image: "/images/projects/ai-voice-guard-preview.jpg",
    video: "/work_videos/AI Voice Guard.mp4",
  },
  {
    title: "KisaanRakshak",
    category: "Agriculture Technology",
    tools: "React, JavaScript, Tailwind CSS, Prototype",
    link: "https://github.com/yuvrajsingla1701/kisaanrakshak017",
    image: "/images/projects/kisaanrakshak-preview.jpg",
  },
  {
    title: "Library Management System",
    category: "Database Application",
    tools: "HTML, CSS, JavaScript, Python, FastAPI",
    link: "https://github.com/aadhish-saini/Library-Management-System",
    image: "/images/projects/library-preview.jpg",
    video: "/work_videos/LibraryOS Management System.mp4",
  },
];

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement | null;
    const workContainer = document.querySelector(".work-container") as HTMLElement | null;

    if (!workFlex || !workContainer) return;

    function getDistance() {
      if (!workFlex || !workContainer) return 0;
      return Math.max(
        0,
        workFlex.scrollWidth - workContainer.clientWidth + 100
      );
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -getDistance(),
        ease: "none",
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    data-cursor="disable"
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>

              <WorkImage
                title={project.title}
                category={project.category}
                video={project.video}
                link={project.link}
                image={project.image}
                alt={`${project.title} project preview`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

