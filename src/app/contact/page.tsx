/* =======================================
 * コンタクト
 * URL: src/app/contact/page.tsx
 * Created: 2025-05-09
 * Last updated: 2025-05-09
 * ======================================= */
import bgImage from '@/assets/images/common/title-contact.webp';
import PageHead from '@/components/common/PageHead';
import styles from '@/styles/contact.module.scss';
export default function Contact() {
  return (
    <>
      <PageHead title="お問い合わせ" backgroundImage={bgImage} />
      <section className={styles.containerContact}>
        <article>
          <p>
            お問合せにつきましてはこちらのフォームにご入力の上で送信、もしくはお電話にて（0968-66-0850）頂きますようお願い致します。
          </p>
          <a href="https://zfrmz.jp/GmsUco69oKXxYb98begt" target="_blank">
            お問合せはこちら
          </a>
        </article>
      </section>
    </>
  );
}
