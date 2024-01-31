import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the scroll-to-top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page with smooth animation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <div className=" bg-footer">
          <div className="flex justify-between p-5 bg-footer pt-20 pl-10 pr-10 text-white">
            <div className="  p-5 rounded-3xl px-10">
              <p className="text-2xl font-bold ">Get In Touch</p>
              <p className="flex items-center gap-3 my-4 "><FaCar size={30}/><span className="text-3xl font-bold text-yellow-400">Drivin</span></p>
              <p className="flex items-center gap-3 mb-2"><FaLocationDot/>123 Street, New York, USA</p>
              <p className="flex items-center gap-3 mb-2"><FaPhone/>+012 345 67890</p>
              <p className="flex items-center gap-3"><IoMdMail />info@example.com</p>
            </div>

            <div className=" p-5 rounded-3xl px-10 text-white">
              <p className="text-2xl font-bold mb-4">Quick Links</p>
              <ul className="text-left flex flex-col gap-1">
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> About Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Contact Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Our Services
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Terms & Condition
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Support
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" p-5 rounded-3xl px-10 text-white">
              <p className="text-2xl font-bold mb-4">Popular Links</p>
              <ul className="text-left flex flex-col gap-1">
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27}  /> About Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Contact Us
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Our Services
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Terms & Condition
                  </li>
                </Link>
                <Link>
                  <li className="flex gap-1 items-center">
                    <MdKeyboardArrowRight size={27} /> Support
                  </li>
                </Link>
              </ul>
            </div>

            <div className=" p-5 rounded-3xl px-10 text-left">
              <p className="text-2xl font-bold mb-4">News Letter</p>
              <div className="flex items-center">
                <input
                  className="p-3 w-36"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="bg-yellow-400 text-white px-5 p-3 font-semibold">
                  Sign Up
                </button>
              </div>
              <div className="my-4">
                <p className="font-bold text-xl">Follow us</p>
                <ul className="flex mt-4 gap-1">
                  <li  className="border border-white p-3 hover:bg-white hover:text-black">< FaTwitter /></li>
                  <li  className="border border-white p-3 hover:bg-white hover:text-black">< FaFacebookF /></li>
                  <li  className="border border-white p-3 hover:bg-white hover:text-black">< FaYoutube /></li>
                  <li  className="border border-white p-3 hover:bg-white hover:text-black">< FaLinkedinIn /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-last flex justify-between px-16 py-7">
          <div className="flex gap-1">
            <span className="text-white">© </span>
            <span className="text-yellow-400">Your Site Name,</span>
            <span className="text-white">All Right Reserved.</span>
          </div>
          <div>
            <span className="flex justify-end gap-1">
              <p className="text-white">Designed By </p>
              <p className="text-yellow-400"> HTML Codex</p>
            </span>
            <span className="flex gap-1 ">
              <p className="text-white">Distributed By: </p>
              <p className="text-yellow-400"> ThemeWagon</p>
            </span>
          </div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-yellow-400 text-white p-4 fixed bottom-7 right-6 z-50  transition-opacity duration-300 ease-in-out hover:opacity-75 "
            >
              <FaArrowUp size={19} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
