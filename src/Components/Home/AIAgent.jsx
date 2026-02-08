import RevealAnimation from '../animation/RevealAnimation';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Data structure for how it works steps
const howItWorksData = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Cryptocurrency marketplace',
    description: 'A cryptocurrency marketplace is a digital platform where users can buy',
    delay: '0.5',
  },
  {
    id: 2,
    icon: 'ns-shape-5',
    title: 'Buy digital currency',
    description: 'Buying digital currency has become an increasingly popular way for individuals and',
    delay: '0.6',
  },
  {
    id: 3,
    icon: 'ns-shape-35',
    title: 'Generate income',
    description: 'Generating income is the process of earning money through various means such as',
    delay: '0.7',
  },
];

const AIAgent = () => {
  const boxRef = useRef(null);

    useGSAP(() => {
      if (boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { scale: 0.9 },
          {
            scale: 1.2,
            duration: 0.6,
            scrollTrigger: {
              trigger: boxRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }

    }, []);
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div ref={boxRef} className="bg-black dark:bg-background-8 relative -z-0 mx-5 max-w-[1290px] overflow-hidden rounded-4xl py-16 text-center lg:py-28 xl:mx-auto 2xl:max-w-[1440px]">
          {/* background image  */}

          <RevealAnimation delay={0.3} duration={2} useSpring={true} direction="right" offset={50}>
            <figure className="pointer-events-none absolute -top-[37%] -right-[40%] max-w-[530px] rotate-90 select-none max-[400px]:-top-[20%] max-[400px]:-right-[32%] sm:-right-[20%] md:-right-[28%] md:rotate-[108deg] lg:-right-[20%] xl:-right-[12%]">
              <img src={'../../../ns-img-508.png'} alt="how-to-work" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
          {/* Gradient  */}
          <div className="absolute -top-[22%] left-[28%] z-10 h-72 w-52 rotate-[50deg] bg-white/40 blur-[85px]" />
          <div className="absolute -top-[22%] right-[8%] z-10 h-72 w-52 -rotate-45 bg-white/30 blur-[85px]" />
          {/* Getting Started */}

          <RevealAnimation delay={0.3}>
            <span className="badge badge-blur text-[8vw] md:text-[5vw] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase mb-3.5 md:mb-5">How it works</span>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <h2 className="mb-16 text-center font-normal text-white/40 max-[400px]:mx-auto max-[400px]:!max-w-[250px] max-md:mx-auto max-md:max-w-[300px] md:mb-[70px]">
              Refer to the easy installation manual.
            </h2>
          </RevealAnimation>

          {/* Content */}
           <div className="mx-auto flex items-start justify-start gap-x-8 gap-y-10 max-[400px]:px-6 max-xl:px-8 max-md:flex-wrap max-md:items-center max-md:justify-center md:items-center md:justify-center">
            {howItWorksData.map((step) => (
                 <RevealAnimation key={step.id} duration={0.5} delay={Number(step.delay)}>
                   <div data-card className="text-left">
                  <span className={`${step.icon} text-[52px] text-white`} />
                  <h3 className="text-heading-6 md:text-heading-5 mt-4 mb-2 font-normal text-white">{step.title}</h3>
                  <p className="text-tagline-1 text-accent/60 max-w-[375px]">{step.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default AIAgent;
