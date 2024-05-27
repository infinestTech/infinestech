import React, { useState, useEffect } from "react";
import MyVideo from "../Videos/test.mp4";
import down from "../images/down-arrow-svgrepo-com.svg";
import Footer from "./Footer";
import FlipCard from "./FlipCard";
import "../css/index.css";
import Combine from "./Combine";
import { useNavigate } from "react-router-dom";
import img2 from "../images/digital3.webp";
import img3 from "../images/test1.webp";
import img4 from "../images/client1.webp";
import img5 from "../images/24x7.webp";
import ParticleBackground from "./ParticleBackground";
import SocialSidebar from "./SocialSideBar";
import NavSlider from "./NavSlider";
import ItemsGrid from "./ItemsGrid";
import NavBar from "./NavBar";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  // Effect for controlling the page scroll
  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "auto";
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    navigate("/");
  };

  return (
    <div>
      <ParticleBackground />
      <SocialSidebar />
      <NavBar />
      <div className=" font-poppins">
        {isPopupOpen && (
          <div className="popup-overlay">
            <Combine />
          </div>
        )}
        <div className="home-content">
          {/* <div className='flex justify-center pt-8'>
                        <div className='flex justify-center items-center h-full'>
                            <div style={{ position: 'relative' }}>
                                <div className='rounded-b-lg bg-slate-300 w-16 h-12 md:w-20 md:h-16 lg:w-30 lg:h-12 flex items-center justify-center' onClick={togglePopup}>
                                    <img src={down} alt="Down arrow" className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10' />
                                </div>
                            </div>
                        </div>

                    </div> */}
          {!isPopupOpen && (
            <div>
              <div className="mb-[5rem] md:mb-[10rem]">
                <div>
                  <div class="md:p-10 p-5 text-center back-gro-und">
                    <h1 class="text-2xl md:text-5xl lg:text-8xl mb-5 font-bold bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent">
                      Where Vision Meets Precision
                    </h1>
                    <h3 class="text-xl text-yellow-500 md:text-yellow-800">
                      Transforming ideas into immersive digital experiences. Let
                      us build your online vision with precision and creativity.
                    </h3>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4  md:mt-0">
                  <div class="md:mt-20">
                    <div class="flex flex-col justify-center p-10 items-start md:mt-24">
                      <h1 class="font-bold text-2xl md:text-4xl lg:text-6xl bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent">
                        Welcome Experts
                      </h1>
                      <p class=" pt-10 text-xl font-mono text-yellow-500">
                        Explore the dynamic world of IT development with
                        Infinest. From software engineering to cybersecurity and
                        cloud computing, witness our commitment to excellence
                        and innovation. Ready to elevate your business? Contact
                        Infinest today and unlock the power of technology for
                        your company.
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-[6rem]">
                    <video
                      width="100%"
                      height="100%"
                      className="p-1 md:rounded-l-[5rem]"
                      autoPlay
                      muted
                      loop
                    >
                      <source src={MyVideo} type="video/mp4" autoplay />
                    </video>
                  </div>
                </div>
              </div>

              <div>
              <h1 class="font-bold text-4xl text-center md:w-1/3  mx-auto mb-10 md:mb-20 md:text-4xl lg:text-6xl bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent">
                        Our Services
                      </h1>

                <div class="flex justify-centent items-center md:ml-10">
                  <div>
                    <NavSlider />
                    <ItemsGrid />
                  </div>
                </div>

                <div className="flex flex-wrap justify-center mb-20 mt-14 md:ml-20 sm:ml-0 ">
                  <FlipCard
                    frontImage={img2}
                    title="Digital ideas"
                    content="In the rapidly evolving landscape of the digital age, the concept of digital ideas represents the cornerstone of innovation and transformation."
                  />
                  <FlipCard
                    frontImage={img4}
                    title="Client Satisfaction"
                    content="Client satisfaction stands as a pivotal benchmark for the success of any business."
                  />
                  <FlipCard
                    frontImage={img3}
                    title="Testing"
                    content="Testing involves rigorous evaluation under various conditions to identify potential issues."
                  />
                  <FlipCard
                    frontImage={img5}
                    title="24x7 Daily support"
                    content="Providing unparalleled 24x7 support to our clients."
                  />
                </div>
              </div>
              <Footer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
