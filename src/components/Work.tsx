import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Agrofinance",
    category: "Blockchain-based Decentralized Loan Solution",
    tools: "Ethereum, Solidity, Web3.js",
    github: "https://github.com/Jacousta/Agrofinance",
    description: [
      "Deployed a decentralized solution providing financial services to farmers’ loan-based needs using blockchain technology enabling 24/7 access to loans.",
      "Applied smart contracts and blockchain protocols to ensure transparency and security in financial transactions."
    ]
  },
  {
    title: "Xeno CRM",
    category: "Mini CRM Platform",
    tools: "Next.js, Node.js, MongoDB, RabbitMQ, Firebase",
    github: "https://github.com/Jacousta/Xeno-Completed",
    demo: "https://xenocrm.netlify.app/",
    description: [
      "Expanded a Mini-CRM with campaign management, scalable audience segmentation (AND/OR logic), and secure Google authentication.",
      "Designed pub-sub backend architecture for async data handling, personalized messaging, and optimized batch processing."
    ]
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>

                  <div className="carousel-content">

                    {/* LEFT SIDE */}
                    <div className="carousel-left">

                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tools & Features
                          </span>
                          <p>{project.tools}</p>
                        </div>

                        <div className="project-links">
                          <a href={project.github} target="_blank">
                            Github ↗
                          </a>

                          {project.demo && (
                            <a href={project.demo} target="_blank">
                              Demo ↗
                            </a>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="carousel-right">

                      <ul className="project-description">
                        {project.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>

                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex
                  ? "carousel-dot-active"
                  : ""
                  }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;