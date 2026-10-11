import { useEffect, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import ThemeToggle from "./ThemeToggle";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;
if (typeof window !== "undefined") {
  (window as unknown as { ScrollSmoother?: typeof ScrollSmoother }).ScrollSmoother = ScrollSmoother;
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const onResize = () => {
      ScrollSmoother.refresh(true);
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      if (window.innerWidth > 1024 && smoother) {
        smoother.scrollTo(targetId, true, "top top");
      } else {
        const elem = document.querySelector(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    []
  );

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
          {/* Desktop Navigation Links */}
          <ul className="navbar-desktop-links">
            <li>
              <a
                data-href="#about"
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a
                data-href="#work"
                href="#work"
                onClick={(e) => handleNavClick(e, "#work")}
              >
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a
                data-href="#contact"
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>

          <ThemeToggle />

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className={`navbar-hamburger ${mobileMenuOpen ? "is-active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            data-cursor="disable"
          >
            <span className="hamburger-line line-1" />
            <span className="hamburger-line line-2" />
            <span className="hamburger-line line-3" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-content">
          <nav className="mobile-menu-links">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="mobile-nav-item"
            >
              <span>01</span> ABOUT
            </a>
            <a
              href="#what-i-do"
              onClick={(e) => handleNavClick(e, "#what-i-do")}
              className="mobile-nav-item"
            >
              <span>02</span> SERVICES
            </a>
            <a
              href="#techstack"
              onClick={(e) => handleNavClick(e, "#techstack")}
              className="mobile-nav-item"
            >
              <span>03</span> TECH STACK
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="mobile-nav-item"
            >
              <span>04</span> WORK
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mobile-nav-item"
            >
              <span>05</span> CONTACT
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <a
              href="mailto:aadhishsainii@gmail.com"
              className="mobile-menu-email"
            >
              aadhishsainii@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

