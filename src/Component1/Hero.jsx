import React from "react";

const Hero = () => {
  return (
    <>
      <header className="w-full h-auto my-20 ">
        <div className="md:flex md:justify-evenly ">
          <div className="text-white md:mt-20 p-10 font-bold mt-4 ">
            {" "}
            <h1 className="text-4xl px-5 line-clamp-3 font-mono">
              {" "}
              THE INDUSTRY REQUIRES <br /> SKILLS.
              <span className="font-extrabold text-pink-300">
                GET IT THE SMART WAY.
              </span>
            </h1>
            <p className="px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              accusamus quod ipsam esse.
            </p>
          </div>
          <div>
            <img
              className="w-[340px] h-[340px] rounded-full"
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yODUtcC5wbmc.png"
              alt=""
            />
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Hero;
