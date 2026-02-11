import React, { useRef, useState } from 'react'
import RevealAnimation from '../animation/RevealAnimation'
import LinkButton from '../ui/button/LinkButton'

function Sectors() {
  const featuredImgRef = useRef(null);
  const featuredImageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleSectorMouseEnter = (imageUrl) => {
    setIsVisible(true);
    setCurrentImage(imageUrl);
  };

  const handleSectorsMouseLeave = () => {
    setIsVisible(false);
  };
  const sectors = [
    {
      id: 1,
      title: "Healthcare & Medical",
      organization: "Healthcare",
      category: "Digital Solutions",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 2,
      title: "Education & E-Learning",
      organization: "Education",
      category: "Learning Platforms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
    },
    {
      id: 3,
      title: "Retail & E-Commerce",
      organization: "Retail",
      category: "Digital Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      id: 4,
      title: "Finance & Banking",
      organization: "Financial Services",
      category: "FinTech Solutions",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
    },
    {
      id: 5,
      title: "Manufacturing & Industry",
      organization: "Manufacturing",
      category: "Industrial Tech",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      id: 6,
      title: "Hospitality & Tourism",
      organization: "Hospitality",
      category: "Travel Tech",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      id: 7,
      title: "Real Estate & Construction",
      organization: "Real Estate",
      category: "PropTech",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 8,
      title: "Transportation & Logistics",
      organization: "Logistics",
      category: "Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    }
  ];

  return (
    <div className="bg-transparent relative">
      <div 
        ref={featuredImgRef}
        id="featuredImg" 
        className={`w-[15vw] h-[38vh] rounded-3xl fixed z-40 top-[21%] left-1/2 object-cover overflow-hidden transition-opacity duration-300 ${isVisible ? 'block' : 'hidden'}`}
      >
        {currentImage && (
          <img 
            ref={featuredImageRef}
            src={currentImage}
            alt="Sector preview"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="w-full py-20 ">
        <RevealAnimation direction="up" offset={80} duration={0.8}>
          <div className="flex justify-between mb-[6rem] items-center px-[3vw]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
              Solving Complex Challenges<br />
              Across Every Major Sector
            </h2>
            <LinkButton 
              href="/industries" 
              ariaLabel="View all industries"
              className="bg-black border border-white/40 py-2 px-2 text-white hover:bg-gray-900"
            >
              Check All Industries
            </LinkButton>
          </div>
        </RevealAnimation>

        <RevealAnimation direction="up" offset={80} duration={0.8}>
          <div 
            id="sectors" 
            className="w-screen left-0 cursor-pointer sm:hidden md:block"
            onMouseLeave={handleSectorsMouseLeave}
          >
            {sectors.map((sector, index) => (
              <RevealAnimation 
                key={sector.id}
                direction="up" 
                offset={60} 
                duration={0.6}
                delay={index * 0.1}
              >
                <div 
                  data-image={sector.image} 
                  className="group sector relative border-b-[1px] border-white/50 w-full h-36 overflow-hidden"
                  onMouseEnter={() => handleSectorMouseEnter(sector.image)}
                >
                  <div className="h-full w-full absolute top-[-100%] left-0 bg-blue-600 transition-all duration-600 ease-in-out group-hover:top-0"></div>
                  <div className="h-full w-full relative flex justify-between items-center px-[3vw]">
                    <h1 className="font-bold text-5xl">{sector.title}</h1>
                    <div className={`${sector.organization.length > 15 ? 'w-72' : 'w-40'} text-right`}>
                      <h1 className="uppercase">{sector.organization}</h1>
                      <div className="text-stone-400 font-light">{sector.category}</div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </div>
  )
}

export default Sectors