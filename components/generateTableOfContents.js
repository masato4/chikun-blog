import { toc } from 'mdast-util-toc';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

const generateTableOfContents = (content) => {
  const tree = unified().use(remarkParse).parse(content);
  const result = toc(tree);
  return result.map;
};

export default generateTableOfContents;
