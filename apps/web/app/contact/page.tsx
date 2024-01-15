import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import BigQuotes from '../../containers/contact-page/big-quotes/big-quotes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — OH.STUDIO',
  description: 'A brand and product designer working with clients globally',
};

export default async function Page() {
  return (
    <>
      <Navbar />
      <div className='relative flex flex-col items-center justify-center'>
        <BigQuotes />
      </div>
      <Footer />
    </>
  );
}
