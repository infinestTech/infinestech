import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    // Fetch the particles.json configuration from the public directory
    fetch('/particles.json')
      .then((response) => response.json())
      .then((data) => {
        // Once the configuration is loaded, initialize particles.js with it
        if (window.particlesJS) {
          window.particlesJS('particles-js', data);
        }
      })
      .catch((error) => console.error('Error loading particles.js config:', error));
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0,  zIndex: 0 }}></div>;
};

export default ParticleBackground;
