/* =======================================
 * ページヘッド
 * URL: src/components/common/PageHead.tsx
 * Created: 2025-05-09
 * Last updated: 2025-05-09
 * ======================================= */

import styles from '@/styles/components/common/PageHead.module.scss';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
type PageHeadProps = {
  title: string;
  backgroundImage?: StaticImageData;
};

const PageHead = ({ title, backgroundImage }: PageHeadProps) => {
  return (
    <section className={styles.containerPageHead}>
      <article
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage.src})`
            : undefined,
        }}
      >
        <h2>{title}</h2>
      </article>
      <div className={styles.breadcrumb}>
        <Link href="/" className={styles.itemLink}>
          トップ
        </Link>
        <span>{title}</span>
      </div>
    </section>
  );
};
export default PageHead;
