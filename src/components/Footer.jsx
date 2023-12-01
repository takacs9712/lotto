import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="flex flex-col items-center">
        <div className="flex justify-between pt-6 max-w-[200px] w-full mb-10 ">
          <a
            href="https://github.com/takacs9712"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="cursor-pointer hover:scale-110 ease-in duration-140"
              size={20}
              style={{ color: "white" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/takacs-viktor-650937230/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="cursor-pointer hover:scale-110 ease-in duration-140"
              size={20}
              style={{ color: "white" }}
            />
          </a>
          <a
            href="mailto:takacsv90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail
              className="cursor-pointer hover:scale-110 ease-in duration-140"
              size={20}
              style={{ color: "white" }}
            />
          </a>
        </div>
      </div>
      <p className="text-center">
        &copy; 2023 Lotto Game. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
