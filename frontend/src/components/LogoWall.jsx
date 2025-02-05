import React from 'react';

const logoImgs = [
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  },
  { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  },
];


const LogoWall = () => {
  return (
    <section className="py-10 md:py-13 relative bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-35">
          {logoImgs.map((logo, index) => (
            <div 
              key={index} 

              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <img 
                src={logo.imgUrl} 
                alt={logo.altText} 
                className="w-[45px] h-[45px] md:w-[60px] md:h-[60px]" 
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;

