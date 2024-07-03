import React from "react";

const Navbar = () => {
  return (
    <>
      {/*  navbar goes here  */}
      <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div className="text-2xl text-indigo-700 font-bold ml-20 ">PW Skills</div>
        <ul className="md:flex hidden  font-semibold">
          <li className="mx-[10px] cursor-pointer">Home</li>
          <li className="mx-[10px] cursor-pointer">About</li>
          <li className="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
          Login/Signup
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
   {/*    navbar ends here  */}
    </>
  );
};

export default Navbar;
