import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import Footer from "./Footer";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slides: {
        origin: "center",
        perView: 2,
        spacing: 45,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10 * 1000);
        }
        slider.on("created", () => {
          setLoaded(true);
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("slideChanged", (slider) => {
          setCurrentSlide(slider.track.details.rel);
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const images = [
    "https://kiniga.com/wp-content/uploads/2017/10/New-Slide-Sangue-do-Dragao-Ancestral.jpg",
    "https://kiniga.com/wp-content/uploads/2021/03/New-Slide-Dahlia.jpg",
    "https://kiniga.com/wp-content/uploads/2020/02/New-Slide-Depois-de-Salvarem-um-Mundo.jpg",
    "https://kiniga.com/wp-content/uploads/2017/10/A-Voz-das-Estrelas-Slide.jpg",
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div ref={sliderRef} className="keen-slider cursor-grab">
          {images.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center items-center mt-10"
            >
              <a href="#" className="cursor-pointer">
                {index == currentSlide ? (
                  <img
                    src={img}
                    key={index}
                    className="lg:h-[24rem] lg:w-[40rem] md:h-[16rem] md:w-[30rem] sm:h-[11rem] sm:w-[20rem] h-[6rem] w-[15rem] transition-all ease-out duration-300"
                    alt="cover"
                  />
                ) : (
                  <img
                    src={img}
                    key={index}
                    className="lg:h-[23rem] lg:w-[39rem] md:h-[15rem] md:w-[29rem] sm:h-[10rem] sm:w-[19rem] h-[5rem] w-[11rem] transition-all ease-out duration-300"
                    alt="cover"
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer loaded instanceRef={instanceRef} currentSlide={currentSlide} />
    </div>
  );
};

export default Slider;
