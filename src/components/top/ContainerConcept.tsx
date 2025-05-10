/* =======================================
 * TOPページ コンセプト
 * URL: src/components/top/ContainerConcept.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-08
 * Last updated: 2025-05-08
 * ======================================= */

import styles from '@/styles/components/top/ContainerConcept.module.scss';
import Concept01 from '@/assets/images/top/concept01.webp';
import Concept02 from '@/assets/images/top/concept02.webp';
import Concept03 from '@/assets/images/top/concept03.webp';
import Concept04 from '@/assets/images/top/concept04.webp';
import Image from 'next/image';
import Link from 'next/link';

const ContainerConcept = () => {
  return (
    <section className={styles.containerConcept}>
      <article>
        <ul>
          <li>
            <div className={styles.wrapText}>
              <h3>地域に寄り添う。</h3>
              <p>
                西養寺は天正12年（1584年）に開基以来、400年以上にわたって御仏の心と共に地域のよりどころとして存在してきました。
              </p>
              <Link href="/musubu-tsunagu/" className={styles.itemLink}>
                詳細はこちら
              </Link>
            </div>
            <div className={styles.wrapImage}>
              <Image src={Concept01} alt="地域によりそう" />
            </div>
          </li>
          <li>
            <div className={styles.wrapText}>
              <h3>結ぶ・紡ぐ。</h3>
              <p>
                西養寺では日常の暮らしや結婚式や葬儀などの人生の節目においても仏様のお教えに沿った形でお手伝いも行っております。これからも仏様の教えを地域の方と共に受け継いでいきます。
              </p>
              <Link href="/musubu-tsunagu/" className={styles.itemLink}>
                詳細はこちら
              </Link>
            </div>
            <div className={styles.wrapImage}>
              <Image src={Concept02} alt="結ぶ・紡ぐ。" />
            </div>
          </li>
          <li>
            <div className={styles.wrapText}>
              <h3>学ぶ。</h3>
              <p>
                お寺は地域の人にとって困りごとがある時に頼れるような、身近な場所です。気軽に集い、仏様の教えに触れらる。そのような機会を数多く設けております。
              </p>
              <Link href="/oteramanabi/" className={styles.itemLink}>
                詳細はこちら
              </Link>
            </div>
            <div className={styles.wrapImage}>
              <Image src={Concept03} alt="学ぶ。" />
            </div>
          </li>
          <li>
            <div className={styles.wrapText}>
              <h3>
                想う・偲ぶ。<span>～納骨堂　無量寿堂～</span>
              </h3>
              <p>
                西養寺では日常の暮らしや結婚式や葬儀などの人生の節目においても仏様のお教えに沿った形でお手伝いも行っております。これからも仏様の教えを地域の方と共に受け継いでいきます。
              </p>
              <Link href="/noukotsudo/" className={styles.itemLink}>
                詳細はこちら
              </Link>
            </div>
            <div className={styles.wrapImage}>
              <Image src={Concept04} alt="地域によりそう" />
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ContainerConcept;
