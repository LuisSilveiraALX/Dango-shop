import Home from '@/components/home/home';
import Head from 'next/head';
import { Navbar } from '@/components/navbar/navbar';
import { ShopcontextProvider } from '@/context/shop-context';
import React from 'react';

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

