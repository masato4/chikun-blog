// Categories.js


const categories = [
  {
    name: 'チーズ',
    subcategories: [
      {
        name: 'フレッシュタイプ',
      },
      {
        name: '白カビタイプ',
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
  {
    name: 'ワイン',
    subcategories: [
      {
        name: '赤ワイン',
        subcategories: [
          { name: 'カベルネ・ソーヴィニヨン', },
          { name: 'メルロー', },
          { name: 'ピノ・ノワール', },
          { name: 'マスカット・べーリーA', },
          { name: 'シラー', },
          { name: 'テンプラニーリョ', },
          { name: 'カルメネール', },
          { name: 'ガメイ', },
          { name: 'ネッビオーロ', },
          { name: 'サンジョヴェーゼ', },
          { name: 'サンジョヴェーゼ', },
          { name: 'マルベック', },
        ]
      },
      {
        name: '白ワイン',
        subcategories: [
          { name: 'シャルドネ', },
          { name: 'ソーヴィニヨン・ブラン', },
          { name: '甲州', },
          { name: 'リースリング', },
          { name: 'ピノ・グリ', },
          { name: 'セミヨン', },
          { name: 'ヴィオニエ', },
          { name: 'マスカット・オブ・アレキサンドリア', },
          { name: 'ミュスカデ', },
          { name: 'マカベオ', },
          { name: 'バロミノ', },
          { name: 'フルミント', },
        ]
      },
      {
        name: 'ロゼ',
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
  {
    name: 'ビール',
    subcategories: [
      {
        name: 'エールビール（上面発酵ビール）',
        subcategories: [
          { name: 'ペールエール（イギリス）' },
          { name: 'ヴァイツェン（ドイツ）' },
          { name: 'ケルシュ（ドイツ）' },
          { name: 'アルト（ドイツ）' },
          { name: 'スタウト（イギリス）' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
      {
        name: 'ラガービール（下面発酵ビール）',
        subcategories: [
          { name: 'ピルスナー（チェコ）' },
          { name: 'アメリカビール（アメリカ）' },
          { name: 'ヘレス（ドイツ）' },
          { name: 'メルツェン（ドイツ）' },
          { name: 'デュンケル（ドイツ）' },
          { name: 'ボック（ドイツ）' },
          // 他のフロントエンドのサブカテゴリを追加
        ]
      },
      // 他の技術のサブカテゴリを追加
    ]
  },
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
