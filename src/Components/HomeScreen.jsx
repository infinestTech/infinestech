// import React, { useState, useEffect, useRef } from 'react';
// import '../css/HomeScreen.scss';
// import img from '../images/logobird.png';

// const HomeScreen = ({ onNavigate }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isAnimating, setIsAnimating] = useState(false);
//   const canvasRef = useRef(null);
//   const requestRef = useRef();

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const createParticles = (ctx, width, height) => {
//     const particles = [];
//     for (let i = 0; i < 100; i++) {
//       const x = Math.random() * width;
//       const y = Math.random() * height;
//       const size = Math.random() * 2;
//       const speed = Math.random() * 0.5 + 0.5;
//       particles.push({ x, y, size, speed });
//     }
//     return particles;
//   };

//   const drawParticles = (particles, ctx, width, height) => {
//     ctx.clearRect(0, 0, width, height);
//     particles.forEach(particle => {
//       particle.x -= particle.speed;
//       if (particle.x < 0) particle.x = width;
//       ctx.beginPath();
//       ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
//       ctx.fillStyle = 'white';
//       ctx.fill();
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       const canvas = canvasRef.current;
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//       const ctx = canvas.getContext('2d');
//       const width = canvas.width;
//       const height = canvas.height;
//       const particles = createParticles(ctx, width, height);
      
//       const render = () => {
//         drawParticles(particles, ctx, width, height);
//         if (isAnimating) {
//           requestRef.current = requestAnimationFrame(render);
//         }
//       };

//       render();
//     };

//     if (isAnimating) {
//       animate();
//     }

//     return () => {
//       cancelAnimationFrame(requestRef.current);
//     };
//   }, [isAnimating]); // Ensures animate function is called based on isAnimating state

//   const handleClick = () => {
//     setIsAnimating(true);

//     setTimeout(() => {
//       setIsAnimating(false);
//       if (onNavigate) {
//         onNavigate();
//       }
//     }, 3000);
//   };

//   return (
//     <div className="home-screen" style={{
//       backgroundPositionX: -mousePosition.x / 50 + 'px',
//       backgroundPositionY: -mousePosition.y / 50 + 'px',
//     }}>
//       <div className="content">
//         <img src={img} alt="Logo" className="logo" />
//         <button class="glow-button">
//          <span>Button</span>
//         </button>
//         <a class="twitter" target="_top" href="https://twitter.com/aaroniker_me"><svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg></a>
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;
import React, { useEffect, useRef } from 'react';
import '../css/HomeScreen.scss'; // Your CSS import
import img from '../images/logobird.png'; // Your image import
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomePage = () => {
  const galaxyButtonRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Make sure galaxyButtonRef.current is not null and has been rendered
    if (galaxyButtonRef.current) {
      const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      const PARTICLES = galaxyButtonRef.current.querySelectorAll('.star');
      PARTICLES.forEach(P => {
        P.style.setProperty('--angle', `${RANDOM(0, 360)}deg`);
        P.style.setProperty('--duration', `${RANDOM(6, 20)}s`);
        P.style.setProperty('--delay', `${RANDOM(1, 10)}s`);
        P.style.setProperty('--alpha', `${RANDOM(40, 90) / 100}`);
        P.style.setProperty('--size', `${RANDOM(2, 6)}px`);
        P.style.setProperty('--distance', `${RANDOM(40, 200)}px`);
      });
    }
  }, []);

  // Removed the focus useEffect as it's not applicable for divs by default

  return (
    <div className="home-screen font-poppins">
      <div className="content">
        <img src={img} alt="Logo" className="logo" />
        <div className="galaxy-button" ref={galaxyButtonRef} tabIndex="0"> {/* Added tabIndex to make it focusable if needed */}
          <button onClick={() => navigate('/home')}>
            <span className="spark"></span>
            <span className="backdrop"></span>
            <span className="galaxy__container">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="star star--static"></span>
              ))}
            </span>
            <span className="galaxy">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="galaxy__ring">
                  <span className="star"></span>
                </span>
              ))}
            </span>
            <span className="text-white">Let's Ignite</span>
          </button>
          <div className="bodydrop"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
