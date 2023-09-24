---
title: 'React.jsチュートリアル'
date: '2022-08-13'
description: 'React.jsチュートリアルを初心者向けに解説します。'
image: react-start.png
categories: ['react']
---
## 目次

React.js を使って Markdown のブログサイトの構築を一から行なっていきます。

## React.js の準備

### プロジェクトの作成


npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。


//略
```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
//略
![Next.jsのWelcomeページ](http://localhost:3000/nextjs-welcome.png)

[記事一覧](/)
