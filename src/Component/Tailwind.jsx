import React from "react";

const Tailwind = () => {
  return (
    <>
      <div
        className="bg-slate-900 flex 
     h-screen  justify-center "
      >
        <h1
          className="text-yellow-500 text-4xl m-20
      "
        >
          Test
        </h1>
        <div className="my-auto">
          <div className="p-10  max-w-sm m-auto bg-white rounded-xl shadow-lg flex flex-col justify-center  space-x-4">
            <div>
              {" "}
              <img
                className="h-12 w-12  mx-10"
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg?20211017183441"
                alt=""
              />
            </div>
            <div>
              <div className="text-2xl  font-medium text-black">
                TailWind CSS
              </div>
              <p className="text-slate-500">By Hitesh</p>
            </div>
          </div>
        </div>
        <div className=" my-auto mx-5">
          <button className="bg-sky-500 text-white text-base rounded-xl text-center  mt-2 p-5 hover:bg-white hover:text-black  dark:bg-red-600 ">
            Buy now
          </button>
        </div>
        <div className="text-center">
          <p className="text-white md:text-green-400 sm:text-red-500">
            Lorem ipsum dolor sit!
          </p>
        </div>
        {/* card start from here  **********************************************/}
        <div className="mt-60">
          <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div>
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.pexels.com/photos/20170895/pexels-photo-20170895/free-photo-of-men-playing-guitars-sitting-at-a-bar-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wider text-sm text-indigo-500 font-semibold">
                  An awesome card
                </div>
                <a
                  className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                  href="#"
                >
                  TaiwindCSS is amazing once you understand the{" "}
                  <span className="bg-yellow-500 p-[2px] px-5">power</span> of
                  it.{" "}
                </a>
                <p className="mt-3 text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tailwind;
