// interface Props {
//   className?: string;
//   src: string;
//   height?: number;
//   width?: number;
//   alt: string;
// }
// reflow, repaint ====================================================================================================
export default function Divider() {
  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(recipe.summary),
  // });
  return (
    <div className='relative -bottom-12 top-0 mb-32 -mt-12 h-80 md:-top-10 md:mt-24 md:mb-32 lg:-top-32'>
      <div className=' bottom-24 w-full md:-top-16'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#12837c'
            fillOpacity='1'
            d='M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,117.3C672,96,768,128,864,149.3C960,171,1056,181,1152,160C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='absolute top-32 left-[10%] z-30 w-96 rounded-md bg-gray-100 bg-opacity-90 py-10 px-8 hover:bg-opacity-100 md:-top-8 md:left-44 lg:top-[14rem]'>
        <p className='mb-1 text-xs md:text-base'>JOKES SPOT</p>
        <h2 className=' text-base font-bold line-clamp-4 md:text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis
          aspernatur nam error dolorum, laborum expedita officia at saepe
          adipisci tenetur eligendi illo veritatis corrupti, praesentium,
          corporis magnam voluptatem quibusdam?
        </h2>
        {/* <h2 className=' text-2xl font-bold'>
          Any salad can be a Caesar salad if you stab it enough.
        </h2> */}
        {/* <Image
          className={`${className} hidden`}
          src={src}
          height={height}
          width={width}
          alt={alt}
        /> */}
      </div>
      <div className='custom-shape-divider-top-1678015577  top-56 w-full md:top-24 lg:top-[22rem]'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      {/* <div className='absolute top-[6rem] w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#F7A4A4'
            fillOpacity='1'
            d='M0,224L60,240C120,256,240,288,360,272C480,256,600,192,720,165.3C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>
      </div> */}
    </div>
  );
}
