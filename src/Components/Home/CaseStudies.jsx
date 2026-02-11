import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const caseStudiesData = [
  {
    id: 1,
    title: 'Skiper OSS 001',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 2,
    title: 'NeonSync Pro',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 3,
    title: 'PixelForge Studio',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 4,
    title: 'TaskFlow Sonet',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 5,
    title: 'CloudVibe Bruh',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  }
];

function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageReady, setIsImageReady] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const loadedImagesRef = useRef(new Set());
  const imageContainerRef = useRef(null);
  const titlesContainerRef = useRef(null);
  const detailsRef = useRef(null);
  const timelineRef = useRef(null);
  const activeStudy = caseStudiesData[activeIndex];

  useEffect(() => {
    if (loadedImagesRef.current.has(activeIndex)) {
      setIsImageReady(true);
      return;
    }

    setIsImageReady(false);
  }, [activeIndex]);

  useEffect(() => {
    caseStudiesData.forEach((study, index) => {
      const image = new Image();
      image.src = study.image;
      image.onload = () => {
        loadedImagesRef.current.add(index);
        if (index === activeIndex) {
          setIsImageReady(true);
        }
      };
    });
  }, [activeIndex]);

  // Create GSAP timeline once
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Set initial states
    gsap.set(imageContainerRef.current, { transformOrigin: 'center center' });
    gsap.set(titlesContainerRef.current, { transformOrigin: 'right bottom' });

    // Animate image to center
    tl.fromTo(
      imageContainerRef.current,
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
      },
      {
        xPercent: -50,
        yPercent: -50,
        left: '49%',
        top: '55%',
        scale: 1.2,
        duration: 0.6,
        ease: 'power3.inOut',
      },
      0
    );

    // Animate titles container to center (from right-bottom to center-top)
    tl.fromTo(
      titlesContainerRef.current,
      {
        xPercent: 0,
        yPercent: 0,
      },
      {
        xPercent: -50,
        yPercent: 0,
        left: '45%',
        right: 'auto',
        top: '0%',
        bottom: 'auto',
        duration: 0.6,
        ease: 'power3.inOut',
        width: '100%',
        padding: '2rem',
        borderRadius: '1rem',
        display: 'flex',
      },
      0
    );

    // Fade out other titles
    const buttons = titlesContainerRef.current.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
      if (idx !== activeIndex) {
        tl.to(
          btn,
          {
            opacity: 0,
            display: 'none',
            pointerEvents: 'none',
            duration: 0.3,
            ease: 'power2.out',
          },
          0
        );
      }
    });

    // Fade in details
    tl.to(
      detailsRef.current,
      {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.5,
        top: '103%',
        ease: 'power2.out',
      },
      0.3
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  // Play or reverse timeline based on isExpanded
  useEffect(() => {
    if (timelineRef.current) {
      if (isExpanded) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isExpanded]);

  const handleTitleClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <RevealAnimation>
      <section className="relative min-h-[100vh] overflow-hidden">
        <div className="main-container relative min-h-screen py-16 px-6 md:px-20 lg:py-20">
        <div className="relative min-h-[640px]">
          {/* Image Section */}
          <div
            ref={imageContainerRef}
            className="absolute w-[27rem] h-[17rem] lg:max-w-xl"
            style={{ left: 0, top: 0 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className={`h-[14rem] w-full object-cover md:h-[14rem] transition-opacity duration-500 ${
                  isImageReady ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="async"
                onLoad={() => {
                  loadedImagesRef.current.add(activeIndex);
                  setIsImageReady(true);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/10"></div>
            </div>
            {!isExpanded && (
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-blue-300/30 blur-2xl"></div>
            )}
          </div>

          {/* Titles Section */}
          <div
            ref={titlesContainerRef}
            className="absolute mt-10 w-full lg:max-w-md"
            style={{ right: 0, bottom: 0, textAlign: 'right' }}
          >
            {!isExpanded && (
              <div className="flex items-center justify-end gap-4 text-xs uppercase tracking-[0.25em] text-gray-500">
                <span>My Projects</span>
                <span className="h-px w-20 bg-gray-300"></span>
              </div>
            )}

            <div className="mt-6 space-y-4">
              {caseStudiesData.map((study, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={study.id}
                    type="button"
                    onClick={() => handleTitleClick(index)}
                    onMouseEnter={() => !isExpanded && setActiveIndex(index)}
                    onFocus={() => !isExpanded && setActiveIndex(index)}
                    className={`block w-full transition-colors duration-200 whitespace-nowrap ${
                      isExpanded && isActive ? 'text-5xl md:text-5xl lg:text-7xl font-bold' : 'text-2xl md:text-3xl lg:text-5xl font-light'
                    } ${
                      isActive
                        ? 'text-gray-900 cursor-default'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    aria-current={isActive ? 'true' : 'false'}
                    disabled={isExpanded && !isActive}
                  >
                    {study.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description & Buttons - Show only when expanded */}
          <div
            ref={detailsRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl text-center pointer-events-none z-50"
            style={{ opacity: 0 }}
          >
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

            {/* Description */}
            <p className="text-gray-600 text-left pl-16 text-base leading-tight mb-8 px-6">
              {activeStudy.description}
            </p>

            {/* Call to action */}
            <p className="text-gray-500 text-left pl-16 text-sm mb-8 px-6">
              Want to create something cool together? Let's do it!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 justify-start  pl-16 px-6">
              <LinkButton
                href={activeStudy.livePreviewUrl}
                className="bg-gray-100 text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium">Live Preview</span>
              </LinkButton>
              <button
                onClick={handleClose}
                className="px-8 py-4 cursor-pointer bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <line x1="12" y1="19" x2="5" y2="12" />
                  <line x1="12" y1="5" x2="5" y2="12" />
                </svg>
                <span> Back to Projects</span>

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RevealAnimation>
  );
}

export default CaseStudies;