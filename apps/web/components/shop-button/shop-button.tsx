import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const ShopButton: React.FC = () => {
  return (
    <div className='fixed inset-x-auto bottom-6 z-30 rounded-3xl  bg-primaryDark md:bottom-8 lg:bottom-10'>
      <a
        href='https://oh.supply/'
        target='_blank'
        className='flex h-10 w-24 items-center justify-center space-x-2'
      >
        <div className='z-40 flex h-3 w-3 items-center justify-center'>
          <FontAwesomeIcon icon={faAsterisk} style={{ color: '#fff' }} />
        </div>
        <h3 className='flex h-6 items-center text-[13px] text-white'>Shop</h3>
      </a>
    </div>
  );
};

export default ShopButton;
