import Link from 'next/link';
import categories from '../components/Categories';



// const CategoryList = () => {
//   return (
//     <div>
//       <h1>カテゴリ一覧</h1>
//       <ul>
//         {categories.map((category) => (
//           <li key={category}>
//             <Link href={`/categories/${category}`}>
//               {category}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const CategoryList = () => {
  return (
    <div className="max-w-prose mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">カテゴリ一覧</h1>
      <ul className="list-disc pl-4">
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <Link href={`/categories/${category}`} className="text-blue-500 hover:underline">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
