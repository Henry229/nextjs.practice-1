import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App | Check the whole products out',
  description: 'find out the whole products',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성옷</Link>
        <Link href='/products/men'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
