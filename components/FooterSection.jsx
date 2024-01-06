import React from "react";
import ReactIcon from "../public/react-2.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-transparent text-white mb-0 flex items-center justify-between">
      <div className="container flex items-center m-5">
        <span>
          LOGO
        <p className="text-slate-600">All rights reserved.</p>
        </span>
      </div>
      <div className="m-5 flex">
          <p className="text-slate-600">Built using:</p>
          <Link href="https://react.dev/" className="ml-5 sm: w-10">
            {/* <h2 className=" text-slate-600">Built using:
            
            </h2> */}
              <Image src={ReactIcon} alt="React Icon" className="w-7 animate-bounce" />
          </Link>

      </div>
    </footer>
  );
};

export default Footer;