import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import IntegrationCircle from './IntegrationCircle';

const Integration = () => {
  return (
    <section className="py-[80px] md:h-[750px] md:py-[120px] bg-gradient-to-b lg:py-[156px] xl:h-[956px]">
      <RevealAnimation delay={0.1}>
        <div className="relative mx-auto h-[620px] max-w-[1600px] overflow-hidden">
          <div className="main-container lp:pb-4 relative z-30">
            <div className="mt-[180px] space-y-[76px] md:mt-[200px] lg:mt-[280px]">
              <div className="space-y-4 text-center">
                <RevealAnimation delay={0.2}>
                  <span className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Our Clients
                  </span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Trusted by the <span className="text-blue-500">Disruptors</span> and Fortune 500s
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="mx-auto max-w-[500px] text-center text-gray-600 dark:text-gray-400">
                      Leading enterprises and innovative startups rely on our solutions to drive transformation and deliver exceptional results.
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.5} offset={10}>
                <div className="text-center">
                  <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span>View our case studies</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="19" cy="12" r="1"/>
                      <circle cx="5" cy="12" r="1"/>
                    </svg>
                  </button>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* circle  */}
          <div className="absolute top-2 left-1/2 -z-10 -translate-x-1/2">
            <div className="w-[800px] md:w-[750px] lg:w-[990px] xl:w-[1300px] 2xl:w-[1400px]">
              <IntegrationCircle />
            </div>
          </div>

          {/* bottom gradient overlay  */}
          <div
            className="lp:-bottom-5 absolute bottom-0 z-0 h-[258px] w-full rotate-180"
            style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 49.16%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Integration;
