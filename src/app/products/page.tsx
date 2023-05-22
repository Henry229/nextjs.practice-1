import Link from 'next/link';

const product = ['pants', 'shirts', 'shoes'];

export default function ProductsPage() {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {product.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
