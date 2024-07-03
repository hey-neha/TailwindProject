import React from "react";

const OurStudent = () => {
  return (
    <>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center ">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork, No Shortcuts!!"
          </p>
          <div className="w-60 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4"></div>
        </div>
        {/*------------------------    card section -----------------------*/}
        <div className="w-full md:flex md:flex-row mt-6 ">
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-44 flex flex-col items-center mb-12 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://st2.depositphotos.com/1345122/5556/i/450/depositphotos_55563695-stock-illustration-book-character-with-jumping-pose.jpg"
                alt=""
              />
              <p className="text-3xl font-bold text-white">600+</p>
              <p className="text-2xl font-bold text-gray-500">
                Different Courses
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-44 flex flex-col items-center mb-12 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://st2.depositphotos.com/1345122/5546/i/600/depositphotos_55468515-stock-illustration-book-character-with-degree.jpg"
                alt=""
              />
              <p className="text-3xl font-bold text-white">6000+</p>
              <p className="text-2xl font-bold text-gray-500">
                Students Enrolled
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-44 flex flex-col items-center mb-12 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://st2.depositphotos.com/1345122/5556/i/450/depositphotos_55563695-stock-illustration-book-character-with-jumping-pose.jpg"
                alt=""
              />
              <p className="text-3xl font-bold text-white">1000+</p>
              <p className="text-2xl font-bold text-gray-500">
                Successful Transition
              </p>
            </div>
          </div>
        </div>
      </div>
     <hr />
    </>
  );
};

export default OurStudent;
