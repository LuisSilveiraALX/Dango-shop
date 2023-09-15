import '../styles/globals.css'
import '../components/card/card.css'
import '../components/home/home.css'
import '../components/navbar/navbar.css';
import { ShopcontextProvider } from '@/context/shop-context';

function MyApp({ Component, pageProps }) {
  return (
    <ShopcontextProvider>
      <Component {...pageProps} />
    </ShopcontextProvider>
  );
}

export default MyApp;

  