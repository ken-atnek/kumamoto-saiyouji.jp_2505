/* =======================================
 * ページタイトル
 * URL: src/components/common/PageTitle.tsx
 * Created: 2025-05-03
 * Last updated: 2025-05-03
 * ======================================= */

import styles from '@/styles/components/common/PageTitle.module.scss';

type PageTitleProps = {
  titleJp: string;
  titleEn: string;
  titleJpSpan?: string;
  customClass?: string;
};

const PageTitle = ({
  titleJp,
  titleJpSpan,
  titleEn,
  customClass,
}: PageTitleProps) => {
  return (
    <section className={`${styles.containerPageTitle} ${customClass || ''}`}>
      {' '}
      <article>
        <div>
          <h2>
            {titleJp}
            {titleJpSpan && <span>{titleJpSpan}</span>}
          </h2>
          {titleEn && <span>{titleEn}</span>}
        </div>
      </article>
    </section>
  );
};
export default PageTitle;
