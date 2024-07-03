import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="w-full h-80 bg-gray-900  px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap
      justify-between md:px-12 "
      >
        <div>
          <img
            className="w-40 h-16 rounded-full"
            src="https://qph.cf2.quoracdn.net/main-qimg-d6a5648cc8a3a831f11b41a7389498bb"
            alt=""
          />
          <p className="my-4">Email us:support@pwskills.com</p>
        </div>

        <div>
          <h2 className="font-bold text-xl mt-4">PW Skills</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 round-2xl my-2"></div>
          <div>
            <p>About us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 round-2xl my-2"></div>
          <div>
            <p>Pw Skill Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an affiliate</p>
            <p>Hall of fame</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-32 h-1 border-b-2 border-yellow-400 round-2xl my-2"></div>
          <div>
            <p>Discord Channel</p>
            <p>PW Youtube</p>
            <p>Carrers</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
