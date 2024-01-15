import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import ShopButton from '../components/shop-button/shop-button';
import Hero from '../containers/home-page/hero-section/hero';
import Products from '../containers/home-page/products/products';
import Quotes from '../containers/home-page/quotes/quotes';
import { Cat } from '../Types/types';

async function getCatsData() {
  try {
    const res = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10',
      { next: { revalidate: 3600 } }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  const cats_data: Cat[] = await getCatsData();
  return (
    <>
      <Navbar />
      <div className='relative flex flex-col items-center justify-center'>
        <Hero />
        <Products data={cats_data} />
        <Quotes />
        <ShopButton />
      </div>
      <Footer />
    </>
  );
}
