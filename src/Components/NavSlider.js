  import React, { useState, useRef, useEffect } from 'react';
  import "../css/Navslidercss.css"

  const items = [
    { id: 1, heading: 'Web Development', content: 'Infinest Tech boasts a seasoned team proficient in a wide array of web development technologies including HTML5, CSS3, JavaScript, PHP, and more. We specialize in crafting responsive, user-friendly websites tailored to meet the unique needs of each client.' },
    { id: 2, heading: 'UX/UI Design', content: 'Our UX/UI designers are experts in creating intuitive, visually appealing interfaces that enhance user engagement and satisfaction. Utilizing industry-standard tools like Adobe XD and Figma, we focus on seamless navigation and immersive experiences across all devices.' },
    { id: 3, heading: 'Logo Design', content: 'At Infinest Tech, our graphic designers possess a keen eye for detail and a deep understanding of branding principles. They craft captivating logos that encapsulate your brands essence, ensuring memorability and instant recognition across various marketing channels.' }
  ];
  const items2 = [
    { id: 4, heading: 'Penetration Testing', content: "Security is paramount in today's digital landscape. Our certified penetration testers conduct thorough assessments of your web applications, identifying vulnerabilities and providing actionable insights to fortify your defenses against cyber threats." },
    { id: 5, heading: 'Graphic Design', content: "From eye-catching banners to engaging social media graphics, our graphic design team brings creativity and expertise to every project. We leverage the latest design trends and tools to deliver visually stunning assets that amplify your brand's message and drive engagement." },
    { id: 6, heading: 'WordPress Management', content: 'Managing a WordPress website can be complex. Our experts handle everything from plugin updates and security patches to content management and performance optimization, ensuring your site remains secure, up-to-date, and running smoothly at all times.' }
  ];

  // Duplicate the items for seamless looping effect
  const duplicatedItems = [...items, ...items];
  const duplicatedItems2 = [...items2, ...items2];

  export const NavSlider = () => {
    const [active, setActive] = useState({
      content: 'Had a great experience while purchasing Term insurance with Ditto. They never forced to buy any product. On the contrary they encouraged to take own decisions by providing as much as information as possible. @thakurr_karann clarified each and every query. Thanks you @joinditto !',
      heading: 'Customer Feedback' 
    });

    // Refs for scroll boxes
    const scrollBoxRefs = useRef([]);

    // Scroll each scroll box to the top when the component mounts
    
    useEffect(() => {
      scrollBoxRefs.current.forEach(box => {
        if (box) { // Add a null check here
          box.scrollTop = 0;
        }
      });
    }, []);

    const handleClick = (item) => {
      setActive({ content: item.content, heading: item.heading });
    };

    const handleItemMouseEnter = (index) => {
      // Stop scrolling animation for the specific scroll box
      scrollBoxRefs.current[index].style.animationPlayState = 'paused';
    };

    const handleItemMouseLeave = (index) => {
      // Resume scrolling animation for the specific scroll box
      scrollBoxRefs.current[index].style.animationPlayState = 'running';
    };

    return (
    <div className='md:mb-[5rem] font-poppins'>
      <div className="md:flex hidden justify-around relative overflow-hidden  items-center p-0 ">
        <div className="w-[40%] flex-shrink-0 p-10 rounded-xl flex-grow-0 serv-two">
          <h1 className='text-xl font-bold mb-4 bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-800 bg-clip-text text-transparent'>{active.heading}</h1>
          <p className='text-yellow-900'>{active.content}</p>
        </div>
        <div className="flex items-center flex-grow-0 gap-x-10">
          <div className="scrollBox" ref={el => scrollBoxRefs.current.push(el)}>
            {duplicatedItems.map((item, index) => (
              <div className='p-8 mt-10 innerBox w-[16rem] rounded-xl bg-yellow-500' key={item.id} onClick={() => handleClick(item)} onMouseEnter={() => handleItemMouseEnter(0)} onMouseLeave={() => handleItemMouseLeave(0)}>
                <h1 className='text-lg font-bold mb-3 '>{item.heading}</h1>
                <p className='text-sm'>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="scrollBox" ref={el => scrollBoxRefs.current.push(el)}>
            {duplicatedItems2.map((item, index) => (
              <div className='p-8 mt-10 innerBox w-[16rem] rounded-xl bg-yellow-500' key={item.id} onClick={() => handleClick(item)} onMouseEnter={() => handleItemMouseEnter(1)} onMouseLeave={() => handleItemMouseLeave(1)}>
                <h1 className='text-lg font-bold mb-3'>{item.heading}</h1>
                <p className='text-sm '>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>
    )
  }

  export default NavSlider;
