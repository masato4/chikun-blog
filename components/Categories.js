// Categories.js


const categories = [
  {
    name: '日常ほのぼの',
    subcategories: [
      {
        name: '一人暮らし',
        subcategories: [
          { name: '学生生活' },
          { name: '新卒社会人' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
    ]
  },
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
          { name: 'Mac book Air' },
          { name: 'ipad' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
      {
        name: 'ガジェット',
        subcategories: [
          { name: 'ウェブカメラ' },
          { name: 'ドッキングステーション' },
          // 他のバックエンドのサブカテゴリを追加
        ]
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
  {
    name: 'おすすめスポット',
    subcategories: [
      {
        name: '名古屋',
        subcategories: [
          { name: '鶴舞線' },
          { name: '名城線' },
          // 他の名古屋のサブカテゴリを追加
        ]
      },
      // 他の地域のサブカテゴリを追加
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
