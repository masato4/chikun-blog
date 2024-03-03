// import Link from 'next/link';
// import categories from '../components/Categories';

// const CategoryList = () => {
//   return (
//     <div className="max-w-prose mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">カテゴリ一覧</h1>
//       <ul className="list-disc pl-4">
//         {categories.map((category) => (
//           <li key={category} className="mb-2">
//             <Link href={`/categories/${category}`} className="text-blue-500 hover:underline">
//               {category}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryList;
// CategoryList.js

import Link from 'next/link';
import categories from '../components/Categories';

const renderCategories = (categories) => {
  return (
    <ul className="list-disc pl-4">
      {categories.map((category) => (
        <li key={category.name} className="mb-2">
          <Link
            href={`/categories/${encodeURIComponent(category.name)}`}
            className="text-blue-500 hover:underline"
          >
            {category.name}
          </Link>
          {category.subcategories && renderCategories(category.subcategories)}
        </li>
      ))}
    </ul>
  );
};

const CategoryList = () => {
  return (
    // <div className="max-w-prose mx-auto p-4">
    // <div className="max-w-4xl mx-auto h-12">
    <div className="max-w-4xl mx-auto px-2.5">
      <h1 className="text-2xl font-bold mb-4">カテゴリ一覧</h1>
      {renderCategories(categories)}
    </div>
  );
};

export default CategoryList;
