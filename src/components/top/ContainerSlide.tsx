/* =======================================
 * TOPページ スライド
 * URL: src/components/top/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-08
 * Last updated: 2025-05-08
 * ======================================= */

import styles from '@/styles/components/top/ContainerSlide.module.scss';
import Image from 'next/image';
const ContainerSlide = () => {
  return (
    <section className={styles.containerSlide}>
      <div className={styles.wrapTitle}>
        <div className={styles.itemTitle}>
          <span>浄土真宗本願寺派</span>
          亀原山 西養寺
        </div>
      </div>
      <article>
        <ul className={styles.slideImages}>
          <li>
            <Image
              src="/images/top/slide01.webp"
              alt="Slide 1"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </li>
          <li>
            <Image
              src="/images/top/slide02.webp"
              alt="Slide 2"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </li>
          <li>
            <Image
              src="/images/top/slide03.webp"
              alt="Slide 3"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </li>
        </ul>
      </article>
    </section>
  );
};
export default ContainerSlide;
