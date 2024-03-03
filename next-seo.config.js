export default {
  title: 'ちーくんブログ',
  description: '日々の生活での出来事や、購入品情報を共有するためのブログ',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '${process.env.NEXT_PUBLIC_BASE_URL}',
    site_name: 'ちーくんブログ',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
