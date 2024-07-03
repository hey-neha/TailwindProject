import React from "react";

const OurProject = () => {
  return (
    <>
      <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center ">
          <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Our Prodcuts"
          </p>
          <div className="w-60 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4"></div>
        </div>
        {/*------------------------    card section -----------------------*/}
        <div className="w-full md:flex md:flex-row mt-5 ">
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://img.freepik.com/free-vector/cartoon-laboratory-room-with-equipment_52683-58496.jpg"
                alt=""
              />
              <p className="text-3xl font-bold text-white">PW Skills lab</p>
              <p className="text-xl font-bold text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7gozHRjEJ08JA6S3y8mwKdguR-_lokguiog&s"
                alt=""
              />
              <p className="text-3xl font-bold text-white">Job Portal</p>
              <p className="text-xl font-bold text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://cdni.iconscout.com/illustration/premium/thumb/searching-for-job-online-4487043-3738450.png"
                alt=""
              />
              <p className="text-3xl font-bold text-white">Experience Portal</p>
              <p className="text-xl font-bold text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 ">
              <img
                className="w-[120px] h-[120px] rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/002/111/965/original/affiliate-marketing-by-a-cartoon-character-vector.jpg"
                alt=""
              />
              <p className="text-3xl font-bold text-white">Affiliate</p>
              <p className="text-xl font-bold text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProject;
