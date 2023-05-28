import GoProducts from '@/components/GoProducts';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

export const revalidate = 3; // 3초마다 새로고침 ISR 페이지로 만듬

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

export default async function ProductPage({ params: { slug } }: Props) {
  // if (params.slug === 'nothing') {
  //   notFound();
  // }
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    //notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width='300'
        height='300'
      />
      <GoProducts />
    </div>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지를 미리 만들어 둘 수 있게 해줄꺼임(SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
