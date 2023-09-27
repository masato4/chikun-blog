export default {
  title: 'なじなれブログ',
  description: 'Next.jsなどの技術情報を発信するブログです。',
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
