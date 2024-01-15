const Hero: React.FC = () => {
  return (
    <div className='animate-fade-up mt-24 flex flex-col items-center justify-center px-2 py-24 leading-tight -tracking-4 antialiased md:mt-40 md:leading-relaxed lg:mt-10 xl:mt-48'>
      <h1 className='max-w-xl text-center text-[36px] font-medium md:max-w-[640px] md:text-5xl lg:max-w-3xl lg:text-7xl'>
        A brand and product designer working with cilents globally
      </h1>
      <ul className='mt-10 hidden items-center justify-center space-x-4 text-[14px] md:flex'>
        <li className='px-3 py-2'>Expertise</li>
        <li className='rounded-2xl bg-littleGrey px-3 py-2'>Branding</li>
        <li className='rounded-2xl bg-littleGrey px-3 py-2'>Product</li>
        <li className='rounded-2xl bg-littleGrey px-3 py-2'>Design Systems</li>
      </ul>
    </div>
  );
};

export default Hero;
