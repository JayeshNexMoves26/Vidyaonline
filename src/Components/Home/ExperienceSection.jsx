import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import RevealAnimation from '../animation/RevealAnimation';

const ExperienceSection = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const tweenRef = useRef(null);

  const experienceCards = [
    {
      id: 1,
      number: '15+',
      label: 'GLOBAL RECOGNITIONS\n& AWARDS',
      description:
        "acknowledging Appinventiv's engineering excellence, growth, and enterprise delivery capability",
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=500&fit=crop',
      alt: 'Global Recognitions and Awards',
    },
    {
      id: 2,
      number: '10+',
      label: 'YEARS OF\nEXPERIENCE',
      description:
        'as an enterprise technology consulting and digital engineering services firm',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      alt: 'Years of Experience',
    },
    {
      id: 3,
      number: '500+',
      label: 'SUCCESSFUL\nPROJECTS',
      description:
        'delivering innovative solutions across multiple industries and global markets',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      alt: 'Successful Projects',
    },
    {
      id: 4,
      number: '200+',
      label: 'TEAM\nEXPERTS',
      description:
        'highly skilled professionals dedicated to transforming ideas into reality',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      alt: 'Team Experts',
    },
    {
      id: 5,
      number: '98%',
      label: 'CLIENT\nSATISFACTION',
      description:
        'committed to exceeding expectations and delivering measurable results',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      alt: 'Client Satisfaction',
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Get the width of one card set
    const cardWidth = content.offsetWidth / (experienceCards.length * 2);
    const totalWidth = content.offsetWidth;

    // Create a continuous loop animation
    const tween = gsap.to(content, {
      x: -totalWidth / 2,
      duration: 40,
      ease: 'none',
      repeat: -1,
      onRepeat: () => {
        // Reset position seamlessly
        gsap.set(content, { x: 0 });
      },
    });

    // Store tween reference for pause/resume
    tweenRef.current = tween;

    // Add mouse enter/leave event listeners
    const handleMouseEnter = () => {
      if (tweenRef.current) {
        tweenRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (tweenRef.current) {
        tweenRef.current.resume();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tween.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [experienceCards.length]);

  return (
    <section className="relative bg-transparent overflow-hidden flex items-center" style={{ minHeight: '710px' }}>
      {/* Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-hidden"
      >
          <div
            ref={contentRef}
            className="flex gap-0.5 w-fit"
            style={{ willChange: 'transform' }}
          >
            {/* Original Cards */}
            {experienceCards.map((card) => (
              <ExperienceCard key={`original-${card.id}`} card={card} />
            ))}
            {/* Duplicate Cards for seamless loop */}
            {experienceCards.map((card) => (
              <ExperienceCard key={`duplicate-${card.id}`} card={card} />
            ))}
          </div>
        </div>
      </section>
  );
};

const ExperienceCard = ({ card }) => {
  return (
    <div
      className="flex-shrink-0 w-[580px] h-[710px] overflow-hidden rounded-lg group transition-all duration-500 hover:shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Image Section */}
      <div className="relative h-[450px] overflow-hidden bg-black">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Shine Effect on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            transform: 'translateX(-100%)',
          }}
        />
      </div>

      {/* Content Section */}
      <div className="p-8 h-[240px] flex flex-col justify-between relative">
        {/* Number and Label */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <div
              className="text-6xl font-bold tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #b8b8b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {card.number}
            </div>
          </div>
          <div className="text-xs font-semibold text-gray-400 tracking-widest leading-relaxed whitespace-pre-line">
            {card.label}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{card.description}</p>
        </div>

        {/* Bottom Border Accent */}
        <div
          className="h-0.5 rounded-full transition-all duration-300"
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
