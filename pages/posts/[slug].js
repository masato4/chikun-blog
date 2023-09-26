import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import { Fragment, createElement, useEffect, useState } from 'react'
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import Link from 'next/link';
import { toc } from 'mdast-util-toc';
import gfm from 'remark-gfm';



export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  const checkAST = () => {
    return (tree) => {
      visit(tree, (node) => {
        console.log(node);
      });
    };
  };


  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkToc,{
      heading: '目次',
    })
    .use(checkAST) //mdastにアクセス
    .use(remarkRehype)
    .use(customCode)
    .use(rehypeSlug)
    .use(checkAST) //hastにアクセス
    .use(rehypeStringify)
    .process(content);

  const toc = await unified()
    .use(remarkParse)
    .use(GetToc, {
      heading: '目次',
      tight: true,
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    props: {
      frontMatter: data,
      content: result.toString(),
      toc: toc.toString(),
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

function ToReactNode(content) {
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    const processor = unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          a: MyLink,
          img: MyImage,
        },
      })
      .processSync(content);

    setContent(processor.result);
  }, [content]);

  return Content;
}

function MyLink({ children, href }) {
  if (href === '') href = '/';
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
const MyImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} width="1200" height="700" />;
};

const GetToc = (options) => {
  return (node) => {
    const result = toc(node, options);
    node.children = [result.map];
  };
};

const customCode = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'p' && node.children[0].type === 'text') {
        if (node.children[0].value.startsWith('[comment]')) {
          node.tagName = 'div';
          node.properties = {
            className: ['alert'],
          };
          const value = node.children[0].value.replace(/\[\/?comment\]/g, '');
          node.children = [
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['alert-2'] },
              children: [{ type: 'text', value }],
            },
          ];
        }
      }
    });
  };
};

const Post = ({ frontMatter, content, slug,toc}) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          // url: `http:localhost:3000/posts/${slug}`,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/${frontMatter.image}`,
              // url: `https://localhost:3000/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <div className="prose prose-lg max-w-none">
        <div className="border">
          <Image
            src={`/${frontMatter.image}`}
            width={1200}
            height={700}
            alt={frontMatter.title}
          />
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        <div className="space-x-2">
          {frontMatter.categories.map((category) => (
            <span key={category}>
              <Link href={`/categories/${category}`}>
                {category}
              </Link>
            </span>
          ))}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-9">{ToReactNode(content)}</div>
          <div className="col-span-3">
            <span>目次</span>
            <div
              className="sticky top-[50px]"
              dangerouslySetInnerHTML={{ __html: toc }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
