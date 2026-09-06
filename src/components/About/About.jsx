import { useState, useEffect, useRef } from "react";
import "./About.css";

const sectionsData = [
  {
    id: "who-we-are",
    title: "Who we are",
    description:
      "The Computer Science Association (CSA) is the official student body of the Department of Computer Science and Engineering.",
    isCircleTop: true,
    icon: "team",
  },
  {
    id: "what-we-do",
    title: "What we do",
    description:
      "We organize workshops, coding competitions, hackathons, technical talks, and community events that encourage collaboration and learning beyond the classroom.",
    isCircleTop: false,
    icon: "gear",
  },
  {
    id: "our-vision",
    title: "Our vision",
    description:
      "To create a vibrant technical community where students can explore new technologies, develop practical skills, and grow into future innovators and leaders.",
    isCircleTop: true,
    icon: "vision",
  },
  {
    id: "our-mission",
    title: "Our mission",
    description:
      "To foster a culture of learning and innovation by creating opportunities that empower students to develop technical skills, explore new ideas, and grow beyond the classroom.",
    isCircleTop: false,
    icon: "mission",
  },
];

function SectionIcon({ type }) {
  if (type === "team") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="20" r="7.5" />
        <path d="M19 46c0-6.5 5.8-11.5 13-11.5s13 5 13 11.5" />
        <circle cx="16" cy="24" r="5.5" />
        <path d="M7 46c0-4.5 4.2-8 9-8 1.6 0 3.1.4 4.3 1" />
        <circle cx="48" cy="24" r="5.5" />
        <path d="M43.7 39c1.2-.6 2.7-1 4.3-1 4.8 0 9 3.5 9 8" />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M28.4 11.2a2 2 0 0 1 3.2-1.2h.8a2 2 0 0 1 3.2 1.2l.6 2.8a17.2 17.2 0 0 1 4.5 1.9l2.7-1.1a2 2 0 0 1 2.8 1.7l.4.8a2 2 0 0 1-.9 3.3l-2.4 1.6a17.2 17.2 0 0 1 1.8 4.6l2.8.6a2 2 0 0 1 1.6 2.3v.8a2 2 0 0 1-1.6 2.3l-2.8.6a17.2 17.2 0 0 1-1.8 4.6l2.4 1.6a2 2 0 0 1 .9 3.3l-.4.8a2 2 0 0 1-2.8 1.7l-2.7-1.1a17.2 17.2 0 0 1-4.5 1.9l-.6 2.8a2 2 0 0 1-3.2 1.2h-.8a2 2 0 0 1-3.2-1.2l-.6-2.8a17.2 17.2 0 0 1-4.5-1.9l-2.7 1.1a2 2 0 0 1-2.8-1.7l-.4-.8a2 2 0 0 1 .9-3.3l2.4-1.6a17.2 17.2 0 0 1-1.8-4.6l-2.8-.6a2 2 0 0 1-1.6-2.3v-.8a2 2 0 0 1 1.6-2.3l-2.8-.6a17.2 17.2 0 0 1 1.8-4.6l-2.4-1.6a2 2 0 0 1-.9-3.3l.4-.8a2 2 0 0 1 2.8-1.7l2.7 1.1a17.2 17.2 0 0 1 4.5-1.9l.6-2.8z" />
        <circle cx="32" cy="32" r="7.5" />
      </svg>
    );
  }

  if (type === "vision") {
    return (
      <svg
        viewBox="0 0 64 64"
        className="section-svg-icon"
        fill="none"
        stroke="#443741"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 32s9-16 24-16 24 16 24 16-9 16-24 16S8 32 8 32z" />
        <circle cx="32" cy="32" r="8.5" />
        <circle cx="34" cy="30" r="2.5" fill="#443741" />
        <path d="M47 16l4-4M51 16h-4v-4" strokeWidth="2" />
      </svg>
    );
  }

  // default: mission
  return (
    <svg
      viewBox="0 0 64 64"
      className="section-svg-icon"
      fill="none"
      stroke="#443741"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 10v4M32 50v4M10 32h4M50 32h4" strokeWidth="2" />
    </svg>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const circleRefs = useRef([]);
  const [lines, setLines] = useState([]);
  const [svgSize, setSvgSize] = useState({ w: 3000, h: 800 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      if (window.innerWidth <= 768) {
        trackRef.current.style.transform = "none";
        return;
      }
      const container = containerRef.current;
      const track = trackRef.current;
      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      // Progress goes from 0 when container top hits viewport top to 1 when container bottom reaches viewport bottom
      const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth);
      const translate = progress * maxTranslate;
      track.style.transform = `translate3d(-${translate}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const computeLines = () => {
      if (!trackRef.current || window.innerWidth <= 768) return;

      const trackEl = trackRef.current;

      // Temporarily reset transform so positions are measured at rest (x=0)
      const prevTransform = trackEl.style.transform;
      trackEl.style.transform = "translate3d(0, 0, 0)";

      // Force reflow
      void trackEl.offsetLeft;

      const trackRect = trackEl.getBoundingClientRect();
      const scrollW = trackEl.scrollWidth;
      const scrollH = trackEl.clientHeight || window.innerHeight;

      setSvgSize({ w: scrollW, h: scrollH });

      const newLines = [];
      const circles = circleRefs.current.map((el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: r.left - trackRect.left + r.width / 2,
          y: r.top - trackRect.top + r.height / 2,
          r: r.width / 2,
        };
      });

      for (let i = 0; i < circles.length - 1; i++) {
        const c1 = circles[i];
        const c2 = circles[i + 1];
        if (c1 && c2) {
          const dx = c2.x - c1.x;
          const dy = c2.y - c1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0) {
            const x1 = c1.x + (dx / dist) * (c1.r + 8);
            const y1 = c1.y + (dy / dist) * (c1.r + 8);
            const x2 = c2.x - (dx / dist) * (c2.r + 8);
            const y2 = c2.y - (dy / dist) * (c2.r + 8);
            newLines.push({ id: `line-${i}`, x1, y1, x2, y2 });
          }
        }
      }

      setLines(newLines);

      // Restore the actual scroll transform
      trackEl.style.transform = prevTransform;
    };

    // Fire immediately, then retry after layout has fully settled
    computeLines();
    const t1 = setTimeout(computeLines, 100);
    const t2 = setTimeout(computeLines, 400);
    const t3 = setTimeout(computeLines, 800);

    window.addEventListener("resize", computeLines);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", computeLines);
    };
  }, []);


  return (
    <section id="about" ref={containerRef} className="about-section-container">
      <div className="about-sticky-viewport">
        {/* Header Section matching Execom / Placements / Gallery */}
        <div className="csa-section-heading about-heading">
          <svg
            className="csa-heading-dino"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            title="Click me to jump!"
          >
            <path
              d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z"
              fill="currentColor"
            />
          </svg>
          <div className="csa-section-heading-frame">
            <span className="csa-section-heading-line" />
            <h1 className="csa-section-heading-title">About Us</h1>
            <span className="csa-section-heading-line" />
          </div>
        </div>

        {/* Horizontal Track Viewport */}
        <div className="about-track-viewport">
          <div ref={trackRef} className="about-track-content">
            {/* SVG for connecting dashed lines — spans full track scroll width */}
            <svg
              className="about-dashed-svg"
              aria-hidden="true"
              width={svgSize.w}
              height={svgSize.h}
            >
              {lines.map((l) => (
                <line
                  key={l.id}
                  x1={l.x1}
                  y1={l.y1}
                  x2={l.x2}
                  y2={l.y2}
                  stroke="rgba(255, 255, 255, 0.52)"
                  strokeWidth="2.2"
                  strokeDasharray="9 9"
                />
              ))}
            </svg>

            {/* Sections Cards */}
            {sectionsData.map((sec, idx) => (
              <div
                key={sec.id}
                className={`about-section-card ${
                  sec.isCircleTop ? "card-circle-top" : "card-circle-bottom"
                }`}
              >
                {sec.isCircleTop ? (
                  <>
                    <div
                      ref={(el) => {
                        circleRefs.current[idx] = el;
                      }}
                      className="about-circle-node"
                    >
                      <SectionIcon type={sec.icon} />
                    </div>
                    <div className="about-card-text">
                      <h2 className="about-card-heading">{sec.title}</h2>
                      <p className="about-card-desc">{sec.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="about-card-text">
                      <h2 className="about-card-heading">{sec.title}</h2>
                      <p className="about-card-desc">{sec.description}</p>
                    </div>
                    <div
                      ref={(el) => {
                        circleRefs.current[idx] = el;
                      }}
                      className="about-circle-node"
                    >
                      <SectionIcon type={sec.icon} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
