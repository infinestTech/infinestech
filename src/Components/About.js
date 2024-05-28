import React from "react";
import img1 from "../images/file6.webp";
import img2 from "../images/file5.webp";
import img3 from "../images/file4.webp";
import img4 from "../images/file3.webp";
import img5 from "../images/file2.webp";
import img6 from "../images/file1.webp";


import Footer from "./Footer";
import logo from "../images/logobird.png";
import ParticleBackground from "./ParticleBackground";

import "../css/About.css";
import SocialSidebar from "./SocialSideBar";
import Icon from "./Icon";
import NavBar from "./NavBar";

export const About = () => {
  const getFlipDirection = (index) => {
    return index % 2 === 0 ? "flip-right" : "flip-left";
  };

  const cardData = [
    {
      img: img1,
      title: "Discover",
      content:
        "We'll furnish you with a detailed project specification and brainstorm ideas.",
      // The flipDirection is determined by the getFlipDirection function
    },
    {
      img: img2,
      title: "Planning",
      content:
        "We'll analyze your business requirements and craft a responsive site or application tailored to your needs. 🧑🏻‍🏫",
      // The flipDirection is determined by the getFlipDirection function
    },
    {
      img: img3,
      title: "DESIGN",
      content:
        "We design wireframes so you can envision what your site or application will look like before it's built. 🧑🏻‍💻",
      // The flipDirection is determined by the getFlipDirection function
    },
    {
      img: img4,
      title: "TEST",
      content:
        "We understand the significance of your site or application and prioritize its quality above all else. Your satisfaction is our utmost priority.",
      // The flipDirection is determined by the getFlipDirection function
    },
    {
      img: img5,
      title: "DEPLOY",
      content:
        "It's time to unveil your creation to the world! Once we officially launch the site or application, let's make some noise.",
      // The flipDirection is determined by the getFlipDirection function
    },
    {
      img: img6,
      title: "SUPPORT",
      content:
        "We are here not just to build your dream site or application but also to provide support every step of the way.",
      // The flipDirection is determined by the getFlipDirection function
    },
    // ... other card data objects
  ];

  return (
    <div
    className=" font-poppins relative best-image about"
      style={{ position: "relative" }}
    >
      <ParticleBackground />
      <SocialSidebar />
      <NavBar />
      <div
        className="overflow-auto h-screen z-10 relative "
        style={{ backgroundColor: "transparent" }}
      >
        <div className="overflow-auto h-screen">
          {" "}
          {/* Set a fixed height and enable scrolling */}
          <div className="grid gap-x-8 gap-y-2 grid-cols-1 sm:grid-cols-2 m-4 poda rounded-md">
            <div className="flex     justify-center mt-5">
              <img src={logo} alt="" className="w-full mt-14" />
            </div>
            <div className="para mt-5 p-10  gap-10">
              <h1 className="text-4xl mb-5 text-yellow-500">Infinest Tech</h1>
              <div className=" text-lg ">
                <p className="mb-5 bg-gradient-to-r from-gray-600 via-yellow-500 to-gray-600 bg-clip-text text-transparent">
                  Welcome to Infinest Tech, where every line of code breathes
                  life into digital dreams! At Infinest Tech, we don't just
                  build websites; we craft immersive online experiences that
                  captivate, inspire, and engage. From seamless web development
                  to captivating UX/UI design, breathtaking graphic design,
                  rigorous testing, and expert WordPress management, we're your
                  one-stop destination for all things digital. Our team of
                  seasoned professionals blends creativity with technical
                  expertise to deliver solutions that exceed expectations and
                  set new standards in the digital sphere.
                </p>
                <p className="bg-gradient-to-r from-gray-500 via-yellow-600 to-gray-500 bg-clip-text text-transparent">
                  We understand that your brand is more than just a website it's
                  a story waiting to be told. That's why our talented designers
                  are here to breathe life into your vision, creating iconic
                  logos and visuals that resonate with your audience and leave a
                  lasting impression So whether you're a startup looking to make
                  your mark or an established brand ready to elevate your online
                  presence, Infinest Tech is here to turn your digital
                  aspirations into reality. Join us on a journey where
                  innovation knows no bounds, and together, let's shape the
                  future of the web.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 px-4 md:px-8 lg:px-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`md:flex ${
                  index % 2 === 0 ? "md:flex-row-reverse " : "md:flex-row"
                } md:justify-center md:mb-20 md:items-center`}
              >
                <div className="md:w-1/2">
                  <div className="flip-box">
                    <div
                      className="flip-box-front"
                      style={{ backgroundImage: `url(${card.img})` }}
                    ></div>
                    <div
                      className="flip-box-back"
                      style={{ backgroundImage: `url(${card.img})` }}
                    ></div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className={`card-content ${
                  index % 2 === 0 ? "" : "ml-auto"
                }`}>
                    <h3 className="text-yellow-500 text-2xl font-bold bg-gradient-to-r from-transparent to-yellow-500 bg-clip-text">
                      {card.title}
                    </h3>
                    <p className="text-yellow-500">{card.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-4xl m-5 text-center text-yellow-500 font-bold">
              {" "}
              Project
            </h1>
          </div>
          <div>
            {" "}
            <Icon />
          </div>
          <div className=" mb-20 text-4xl m-5 text-center p-1"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default About;
