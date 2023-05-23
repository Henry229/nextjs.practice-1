import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `Product Name: ${params.slug}`,
  };
}

export default function PantsPage({ params: { slug } }: Props) {
  // if (params.slug === 'nothing') {
  //   notFound();
  // }
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1>{product} 제품 설명 페이지</h1>
    </div>
  );
}

export function generateStaticParams() {
  // 모든 제품의 페이지를 미리 만들어 둘 수 있게 해줄꺼임(SSG)
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
