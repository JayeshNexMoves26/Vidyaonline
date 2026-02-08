import RevealAnimation from '../animation/RevealAnimation';
import { cn } from '../../utils/cn';
import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import StepCard from './StepCard';

const stepsData = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Write or paste script',
    description:
      "Quickly draft your message or drop in your ready-to-go text to get started instantly. Whether you're crafting a new idea, refining existing",
    mainImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    overlayImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    overlayImagePosition: 'right',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Choose your voice style',
    description:
      'Select from natural human-like voices, accents, and tones that fit your content. Browse through our extensive library of professional voices, each designed to match',
    mainImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Customize the delivery',
    description:
      'Adjust speed, pitch, pauses, and emotions for a perfect performance. Fine-tune every aspect of your voiceover to create the exact tone and pacing you need for your project.',
    mainImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Generate & download',
    description:
      "Get studio-quality audio in seconds and download instantly. Your professional voiceover is ready to use in any format, whether you're creating content for videos, podcasts, or presentations.",
    mainImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    overlayImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop',
    overlayImagePosition: 'center',
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepCardRefs = useRef([]);
  const lenis = useLenis();

  useEffect(() => {
    const stepCards = stepCardRefs.current.filter((ref) => ref !== null);

    if (stepCards.length === 0) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-400px 0px -50% 0px',
      threshold: [0, 0.1, 0.5, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const stepNumber = Number.parseInt(entry.target.dataset.step || '1', 10);
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleStepClick = (stepNumber) => {
    const targetCard = document.getElementById(`step-${stepNumber}`);

    if (targetCard) {
      // Check if Lenis is available (for smooth scrolling)
      if (lenis) {
        lenis.scrollTo(`#step-${stepNumber}`, {
          offset: -156, // Account for sticky header offset
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        // Fallback for when Lenis is not available (mobile devices)
        const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - 156;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
      setActiveStep(stepNumber);
    }
  };

  return (
    <section className="py-[80px] md:py-[120px] lg:py-[156px] bg-white dark:bg-black">
      <div className="main-container">
        <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
          {/* heading  */}
          <RevealAnimation delay={0.1}>
            <h2 className="top-[156px] max-w-[44rem] text-center text-4xl font-semibold md:text-5xl lg:text-6xl leading-[0.9] lg:sticky lg:text-left text-gray-900 dark:text-white">
              Beyond Development We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Transformation</span>
            </h2>
          </RevealAnimation>

          {/* bar  */}
          <RevealAnimation delay={0.1}>
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 sticky top-[156px] hidden h-[564px] w-px lg:block" />
          </RevealAnimation>

          {/* cards  */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-8 lg:space-y-60">
              {stepsData.map((step) => (
                <StepCard
                  key={step.id}
                  step={step}
                  cardRef={(el) => {
                    stepCardRefs.current[step.stepNumber - 1] = el;
                  }}
                />
              ))}
            </div>
          </RevealAnimation>

          {/* cards number  */}
          <RevealAnimation delay={0.3}>
            <div className="top-[312px] ml-10 hidden flex-col gap-y-2 lg:sticky lg:top-[156px] lg:ml-0 lg:flex">
              {stepsData.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.stepNumber)}
                  className={cn(
                    'step-number text-heading-6 flex h-15 w-[44px] cursor-pointer items-center justify-center rounded-full px-4 py-[15px] font-normal transition-colors duration-300 ease-in-out',
                    activeStep === step.stepNumber ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-400',
                  )}
                  data-step-number={step.stepNumber}
                  aria-label={`Go to step ${step.stepNumber}`}>
                  {step.stepNumber}
                </button>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Steps;
