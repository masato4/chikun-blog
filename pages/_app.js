import Layout from '../components/Layout';
import '../styles/globals.css';
// import '../styles/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { GA_TRACKING_ID } from '../lib/gtag'; // トラッキング ID を追加
import Head from 'next/head'
import Script from "next/script";



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);




  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel='apple-touch-icon' href='/favicon.png' />
        </Head>
        <Component {...pageProps} />
      </Layout>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}

export default MyApp;
