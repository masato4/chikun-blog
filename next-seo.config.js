export default {
  title: 'なっじブログ',
  description: 'Apple製品や周辺ガジェットのレビュー、またMacを使用していて困ったことなどを投稿します',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '${process.env.NEXT_PUBLIC_BASE_URL}',
    site_name: 'BLOG',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
