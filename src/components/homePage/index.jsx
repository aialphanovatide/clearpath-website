import React, { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./homePage.css";
import "@splidejs/react-splide/css";
import PageOne from "../pageOne";
import PageTwo from "../pageTwo";
import PageThree from "../pageThree";
import PageFour from "../pageFour";
import PageFive from "../pageFive";
import PageSix from "../pageSix";
import logo from "../../img/logo_desktop.svg";
import logo_mobile from "../../img/Clearpath Logo Black.svg";
import MenuIcon from "@mui/icons-material/Menu";

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const splideRef = useRef(null);
  const navRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(slideIndex);
    }
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(currentIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const unshowNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };
  const getNavItemClass = (index) => {
    return slideIndex === index ? "nav_item_active" : "nav_item";
  };

  const changeSlideIndex = (index) => {
    setSlideIndex(index);
    unshowNavbar();
  };

  return (
    <div>
      <span className="pagination_background"></span>
      <div className="navbar">
        <div className="navbar_container">
          <img
            src={logo}
            alt=""
            className="nav_logo desktop"
            onClick={() => changeSlideIndex(0)}
          />
          <img
            src={logo_mobile}
            alt=""
            className="nav_logo mobile"
            onClick={() => changeSlideIndex(0)}
          />
          <div ref={navRef} className="nav_items responsive_nav">
            <span
              onClick={() => changeSlideIndex(0)}
              className={getNavItemClass(0)}
            >
              Home
            </span>
            <span
              onClick={() => changeSlideIndex(1)}
              className={getNavItemClass(1)}
            >
              Vision
            </span>
            <span
              onClick={() => changeSlideIndex(2)}
              className={getNavItemClass(2)}
            >
              Tools
            </span>
            <span
              onClick={() => changeSlideIndex(3)}
              className={getNavItemClass(3)}
            >
              Flow
            </span>
            <span
              onClick={() => changeSlideIndex(4)}
              className={getNavItemClass(4)}
            >
              Impact
            </span>
            <span
              onClick={() => changeSlideIndex(5)}
              className={getNavItemClass(5)}
            >
              Begin
            </span>
          </div>
          <button className="nav_toggle" onClick={showNavbar}>
            <MenuIcon sx={{ color: "black", width: "60px", height: "50px" }} />
          </button>
        </div>
      </div>
      <div className="slide_container">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            autoHeight: true,
            height: "auto",
            width: "100%",
          }}
          onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
        >
          <SplideSlide className="splide-slide is-active">
            <PageOne isActive={currentIndex === 0} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <PageTwo isActive={currentIndex === 1} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <PageThree isActive={currentIndex === 2} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <PageFour isActive={currentIndex === 3} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <PageFive isActive={currentIndex === 4} />
          </SplideSlide>
          <SplideSlide className="splide-slide">
            <PageSix isActive={currentIndex === 5} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default HomePage;
