import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='tracking-tight flex h-full w-full max-w-7xl flex-col items-center justify-center space-y-2 pb-20 font-medium md:flex-row md:justify-between md:space-y-0 md:px-10 md:pb-10 xl:px-16 2xl:px-0'>
        {/* Logo & Copyright */}
        <div className='flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-3 md:space-y-0'>
          <div className='z-40 flex h-6 w-6 items-center justify-center'>
            <FontAwesomeIcon icon={faStarOfLife} />
          </div>
          <h3 className='flex h-6 items-center text-sm'>© Oil Harris 2023</h3>
        </div>

        {/* Links */}
        <div>
          <ul className='flex items-center justify-center space-x-2 text-sm'>
            <li>
              <a
                href='https://twitter.com/olvhrs'
                target='_blank'
                className='md:hover:text-customDarkGrey'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/oliiharris/'
                target='_blank'
                className='md:hover:text-customDarkGrey'
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href='mailto:oli@oh.studio'
                target='_blank'
                className='md:hover:text-customDarkGrey'
              >
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
