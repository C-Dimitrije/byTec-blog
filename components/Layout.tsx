import React from 'react';
import Header from './Header';
import NavMenu from './NavMenu';
import Footer from './Footer'
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>byTech Blog</title>
      
      <link rel="icon" type="image/x-icon" href="https://bytech.rs/img/logo.png"></link>

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet" />
      
      <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossOrigin="anonymous"></script>
    </Head>
    <NavMenu />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;