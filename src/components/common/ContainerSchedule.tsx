/* =======================================
 * 法要スケジュール
 * URL: src/components/common/ContainerSchedule.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-09
 * Last updated: 2025-05-09
 * ======================================= */

import styles from '@/styles/components/common/ContainerSchedule.module.scss';
import { useMemo } from 'react';
import Image from 'next/image';
import schedule01 from '@/assets/images/common/schedule/schedule01.webp';
import schedule02 from '@/assets/images/common/schedule/schedule02.webp';
import schedule03 from '@/assets/images/common/schedule/schedule03.webp';
import schedule04 from '@/assets/images/common/schedule/schedule04.webp';
import schedule05 from '@/assets/images/common/schedule/schedule05.webp';
import schedule06 from '@/assets/images/common/schedule/schedule06.webp';
import schedule07 from '@/assets/images/common/schedule/schedule07.webp';
import schedule08 from '@/assets/images/common/schedule/schedule08.webp';
import schedule09 from '@/assets/images/common/schedule/schedule09.webp';

const ContainerSchedule = () => {
  const listData = useMemo(
    () => [
      {
        images: schedule01,
        title: '3月：春のお彼岸',
      },
      {
        images: schedule02,
        title: '4月：豆じゃ桶',
      },
      {
        images: schedule03,
        title: '5月：永代経（総門と追悼法要）',
      },
      {
        images: schedule04,
        title: '7月：子ども会（小学3～6年生お寺お泊り会）',
      },
      {
        images: schedule05,
        title: '8月：お盆',
      },
      {
        images: schedule06,
        title: '9月：秋のお彼岸',
      },
      {
        images: schedule07,
        title: '12月：報恩講',
      },
      {
        images: schedule08,
        title: '12月31日：除夜会',
      },
      {
        images: schedule09,
        title: '1月：元旦会',
      },
    ],
    []
  );
  return (
    <section className={styles.containerSchedule}>
      <h2>法要スケジュール​</h2>
      <ul className={styles.listSchedule}>
        {listData.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles.boxImage}>
                <Image src={item.images} alt={item.title} loading="lazy" />
              </div>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ContainerSchedule;
