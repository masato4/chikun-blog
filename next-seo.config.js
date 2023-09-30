export default {
  title: 'なじなれブログ',
  description: '地方グルメ・スポットの紹介や、商品レビューを行います',
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
