// Categories.js


const categories = [
  {
    name: '技術系ブログ',
    subcategories: [
      {
        name: 'その他(技術系)',
        subcategories: [
          { name: 'macOS' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
  {
    name: '商品レビュー',
    subcategories: [
      {
        name: 'Apple',
        subcategories: [
          { name: 'Mac' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
  // 他の大カテゴリを追加
];



// 一次元のデータを生成するコード
const flattenCategories = (categories) => {
  const flattened = [];

  const flatten = (category) => {
    flattened.push(category.name);
    if (category.subcategories) {
      category.subcategories.forEach(flatten);
    }
  };

  categories.forEach(flatten);

  return flattened;
};

// 大カテゴリを抽出するコード
const extractMainCategories = (categories) => {
  return categories.map(category => category.name);
};

export const categoriesData = flattenCategories(categories);
export const mainCategories = extractMainCategories(categories);


export default categories;
