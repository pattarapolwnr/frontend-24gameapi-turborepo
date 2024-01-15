'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className='fixed top-0 z-30 flex h-24 w-full items-center justify-center'>
      <nav className='my-5 flex w-[280px] items-center justify-center rounded-3xl bg-littleGrey bg-opacity-75 text-[13px] font-medium backdrop-blur-md md:w-[324px]'>
        <ul className='flex flex-row items-center justify-center px-1 py-[15px]'>
          <li>
            <Link
              href='/'
              className={`link ${pathname === '/' ? 'w-1/3 rounded-3xl bg-white px-6 py-3 md:w-16 md:px-8' : 'px-6 py-3 md:px-8'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/profile'
              className={`link ${pathname === '/profile' ? 'w-1/3 rounded-3xl bg-white px-6 py-3 md:px-8' : 'px-6 py-3 md:px-8'}`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={`link ${pathname === '/contact' ? 'w-1/3 rounded-3xl bg-white px-6 py-3 md:px-8' : 'px-6 py-3 md:px-8'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
