import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";

interface ItemProps {
  link: string;
  rounter: string;
}
function ListItem({ link, rounter }: ItemProps) {
  return (
    <div className="keen-slider__slide rounded">
      <a href={rounter}>
        <img src={link} alt="cover" className="animate-scaleDownCenter" />
      </a>
    </div>
  );
}

function Arrow({
  disabled,
  onClick,
  left,
  dark,
}: {
  disabled: boolean;
  left?: boolean;
  dark: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = disabled ? ` ${dark ? 'fill-zinc-700' : 'fill-gray-400'} cursor-not-allowed` : ` ${dark ? 'fill-zinc-200' : 'fill-gray-800'} cursor-pointer`;
  return (
    <svg
      onClick={onClick}
      className={`w-4 h-4 border-none shadow-sm box-border rounded-md absolute ${
        left ? "mr-40" : "ml-36 left-auto"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

interface Props {
  urls: string[];
  dark: boolean;
}

const Slider = ({ urls, dark }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "snap",
    renderMode: "precision",
    breakpoints: {},
    slides: {
      origin: "center",
      perView: 1,
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      {/*Slider*/}
      <div
        ref={sliderRef}
        className="keen-slider left-10 relative box-content flex w-full max-w-[45.7rem] rounded"
      >
        {urls.map((url) => (
          <ListItem key={url} link={url} rounter="#" />
        ))}
      </div>

      {/*Footer*/}
      {loaded && instanceRef.current && (
        <div className="flex justify-center items-center py-5">
          <Arrow
            dark={dark}
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "border-none mr-2 rounded-full p-1 cursor-pointer  " +
                  (currentSlide === idx
                    ? " bg-orange-400"
                    : " hover:bg-slate-400 bg-zinc-300")
                }
              ></button>
            );
          })}

          <Arrow
            dark={dark}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
