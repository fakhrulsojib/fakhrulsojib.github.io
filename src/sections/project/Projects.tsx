import React, { useRef, useEffect } from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import portfolioData from "../../assets/data/projects.json";
import defaultProjectImage from "../../assets/images/project_placeholder.png";
import { Project } from "../../types/data.types";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Keyboard, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";
import { useInView } from "../../hooks/useInView";

const Projects: React.FC = () => {
  const [contentRef, contentInView] = useInView();
  const projects: Project[] = portfolioData.projects;
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (contentInView && swiperRef.current) {
      const timer = setTimeout(() => {
        swiperRef.current?.autoplay.start();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [contentInView]);

  return (
    <section id="projects" className="projects">
      <div ref={contentRef} className="projects-content">
        <h2
          className={`section-heading ${contentInView ? "animate__animated animate__fadeInDown" : ""
            }`}
        >
          My Projects
        </h2>
        <div
          className={`projects-carousel ${contentInView ? "animate__animated animate__fadeIn" : ""}`}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop();
            }}
            modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} defaultImage={defaultProjectImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
