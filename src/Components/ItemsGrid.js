import React from 'react';

const items = [
  { 
    id: 1, 
    heading: ' Development', 
    content: 'Infinest Tech boasts a seasoned team proficient in a wide array of web development technologies including HTML5, CSS3, JavaScript, PHP, and more. We specialize in crafting responsive, user-friendly websites tailored to meet the unique needs of each client.' 
  },
  { 
    id: 2, 
    heading: 'UX/UI Design', 
    content: 'Our UX/UI designers are experts in creating intuitive, visually appealing interfaces that enhance user engagement and satisfaction. Utilizing industry-standard tools like Adobe XD and Figma, we focus on seamless navigation and immersive experiences across all devices.' 
  },
  { 
    id: 3, 
    heading: 'Logo Design', 
    content: 'At Infinest Tech, our graphic designers possess a keen eye for detail and a deep understanding of branding principles. They craft captivating logos that encapsulate your brand’s essence, ensuring memorability and instant recognition across various marketing channels.' 
  },
  { id: 4, heading: 'Penetration Testing', content: "Security is paramount in today's digital landscape. Our certified penetration testers conduct thorough assessments of your web applications, identifying vulnerabilities and providing actionable insights to fortify your defenses against cyber threats." },
  { id: 5, heading: 'Graphic Design', content: "From eye-catching banners to engaging social media graphics, our graphic design team brings creativity and expertise to every project. We leverage the latest design trends and tools to deliver visually stunning assets that amplify your brand's message and drive engagement." },
  { id: 6, heading: 'WordPress Management', content: 'Managing a WordPress website can be complex. Our experts handle everything from plugin updates and security patches to content management and performance optimization, ensuring your site remains secure, up-to-date, and running smoothly at all times.' }
  // ... (other items)
];

const ItemCard = ({ heading, content, bgColor }) => {
  return (
    <div className="w-72 h-96 font-poppins md:hidden bg-yellow-400 rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
      <div className={`absolute inset-0 bg-cover bg-center ${bgColor} transition-opacity duration-500 ease-in-out hover:bg-opacity-30`}></div>
      <div className="p-6 z-10 relative">
        <h4 className="text-black w-full text-lg font-bold mb-2">{heading}</h4>
        <p className="text-slate-800  text-base font-medium text-justify">
          {content}
        </p>
      </div>
    </div>
  );
};

const ItemsGrid = () => {
  const bgColorClasses = [
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {items.map((item, index) => (
        <ItemCard
          key={item.id}
          heading={item.heading}
          content={item.content}
          bgColor={bgColorClasses[index % bgColorClasses.length]}
        />
      ))}
    </div>
  );
};

export default ItemsGrid;
