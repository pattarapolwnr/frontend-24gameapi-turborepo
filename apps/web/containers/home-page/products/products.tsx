import Image from 'next/image';
import { Cat } from '../../../Types/types';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

interface ProductsProps {
  data: Cat[];
}

const Products: FC<ProductsProps> = (props): JSX.Element => {
  const data: Cat[] = props.data;
  return (
    <div className='mt-28 grid animate-fade-up grid-cols-1 items-center justify-items-center gap-y-4 px-4 md:max-w-3xl md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:mt-14 lg:max-w-6xl xl:mt-36 xl:max-w-7xl'>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <a href={item.url} target='_blank'>
              <div className='group relative h-44 max-w-sm overflow-hidden rounded-xl lg:h-64 lg:max-w-lg xl:max-w-xl'>
                <Image
                  src={item.url}
                  width={700}
                  height={400}
                  alt={`cat_id_${item.id}`}
                  className='md:backdrop-grayscale'
                  priority
                />

                <div className='absolute right-4 top-4 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-white transition duration-300 ease-in-out md:group-hover:flex md:group-hover:animate-slideTopRight'>
                  <div className='h-4 w-4'>
                    <FontAwesomeIcon icon={faLocationArrow} />
                  </div>
                </div>
                <p className=' absolute left-4 top-4 z-20 hidden h-6 text-lg text-white transition duration-300 ease-in-out md:group-hover:flex'>
                  {item.id}
                </p>

                <div className='absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden rounded-xl opacity-0 backdrop-blur-md backdrop-filter transition duration-300 ease-in-out md:group-hover:cursor-pointer md:group-hover:opacity-100'></div>
              </div>
              <p className='mt-4 md:hidden'>{item.id}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
