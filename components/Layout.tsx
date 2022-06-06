import React from 'react';
import Header from './Header';
import NavMenu from './NavMenu';
import Footer from './Footer'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children }) => (
  <>
  <Head>
  <title>byTech Blog</title>
        <link rel="icon" type="image/x-icon" href="https://bytech.rs/img/logo.png"></link>
 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossOrigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossOrigin="anonymous"></script>
  </Head>
    <NavMenu />
      <Header />
    {children}
    <Footer />
  </>
);

export default Layout;