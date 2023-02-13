function Footer({loaded, instanceRef, currentSlide}: {
    loaded: boolean,
    instanceRef: any,
    currentSlide: number
}) {
  return (
    <div className="absolute justify-center items-center ml-[36.563rem]">
      {loaded && instanceRef.current && (
        <div className="flex m-5 p-1 cursor-pointer">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`border-none w-2 h-2 rounded-2xl m-2 p-2 cursor-pointer ${currentSlide == idx ? `bg-[#FF8E35]` : `bg-[#c5c5c5]`}`}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Footer
