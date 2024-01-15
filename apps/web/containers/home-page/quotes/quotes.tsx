'use client';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Quotes: React.FC = () => {
  return (
    <div className='flex max-w-sm animate-fade-up flex-col items-center justify-center py-32 animate-delay-[3000ms] animate-once md:max-w-md md:py-40 lg:mb-10'>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1.5}>
        <h1 className='animate-fade-up text-[28px] font-medium leading-tight text-primaryDark md:text-4xl'>
          Let's work together
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeInUp'
        animateOnce={true}
        duration={1.5}
        delay={1500}
      >
        <h1 className='animate-fade-up text-[28px] font-medium text-customDarkGrey md:text-4xl'>
          Get in touch.
        </h1>
      </ScrollAnimation>
    </div>
  );
};

export default Quotes;
