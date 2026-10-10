import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import ThemeToggle from "./ThemeToggle";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;
if (typeof window !== "undefined") {
  (window as unknown as { ScrollSmoother?: typeof ScrollSmoother }).ScrollSmoother = ScrollSmoother;
}

const Navbar = () => {
  useEffect(() => {
    const existingSmoother = ScrollSmoother.get();
    if (existingSmoother) {
      existingSmoother.kill();
    }

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const onLinkClick = (e: MouseEvent) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        if (section && smoother) {
          smoother.scrollTo(section, true, "top top");
        }
      }
    };

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", onLinkClick as EventListener);
    });

    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", onLinkClick as EventListener);
      });
      window.removeEventListener("resize", onResize);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Aadhish
        </a>
        <a
          href="mailto:aadhishsainii@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          aadhishsainii@gmail.com
        </a>
        <div className="navbar-right">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
