import { Navbar } from '@/components/navbar/navbar';
import Home from '@/components/home/home';
import Head from 'next/head';

const IndexPage = () => {
    return (
      <>
      <Head>
        <title>
          DangoShop 
        </title>
      </Head>
      <Navbar />
      <Home />
      </>
    )
  }

  export default IndexPage

