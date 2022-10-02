import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import lionsheart2 from "../../img/lionsheart2.png";
import mrpr2 from "../../img/mrpr2.png";
import covid from "../../img/covid.png";
import blogbook from "../../img/blogbook.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      {/* <span>Portfolio</span> */}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://lionsheartservice.org/lh2/" target="_blank" rel="noreferrer">
          <img src={lionsheart2} alt="https://lionsheartservice.org/lh2/" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mrprandco.com/" target="_blank" rel="noreferrer">
          <img src={mrpr2} alt="https://mrprandco.com/" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/Avezkhan" target="_blank" rel="noreferrer">
          <img src={blogbook} alt="https://github.com/Avezkhan" style={{width : 400}} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/Avezkhan" target="_blank" rel="noreferrer">
          <img src={covid} alt="https://github.com/Avezkhan"  style={{height : 203}} />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
