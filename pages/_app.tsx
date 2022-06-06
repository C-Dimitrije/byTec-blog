import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import './styles.css'
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link> 

      </Head>
      <div className='jes'>
        <Layout>
          <Component {...pageProps} />
        </Layout></div>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossOrigin="anonymous"></script> 
    </>
  );
}

export default MyApp;