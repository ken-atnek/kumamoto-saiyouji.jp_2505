/* =======================================
 * 納骨堂 無量寿堂
 * URL:src/app/noukotsudo/page.tsx
 * Created: 2025-05-10
 * Last updated: 2025-05-10
 * ======================================= */
import React from 'react';
import bgImage from '@/assets/images/common/title-noukotsudo.webp';
import HeadImage from '@/assets/images/noukotsudo/head.webp';
import PageHead from '@/components/common/PageHead';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/noukotsudo.module.scss';
import List01a from '@/assets/images/noukotsudo/list01a.webp';
import List01b from '@/assets/images/noukotsudo/list01b.webp';
import List02a from '@/assets/images/noukotsudo/list02a.webp';
import List02b from '@/assets/images/noukotsudo/list02b.webp';
import Item01 from '@/assets/images/noukotsudo/item01.webp';
import ImageLayout from '@/assets/images/noukotsudo/layout.webp';
import Image from 'next/image';
import Link from 'next/link';
export default function Noukotsudo() {
  return (
    <>
      <PageHead title=" 納骨堂 無量寿堂" backgroundImage={bgImage} />
      <PageTitle
        titleJp="俱会一処"
        titleJpSpan="～西養寺 無量寿堂について～"
        titleEn="reason"
        customClass={styles.containerPageTitle}
      />
      <section className={styles.containerNoukotsudo}>
        <article className={styles.blockHead}>
          <Image src={HeadImage} alt="納骨堂" className={styles.itemImage} />
          <div className={styles.wrapComment}>
            <p>
              「納骨堂」とは私たちにとっても、ご先祖や亡き両親、愛しい方々のご遺骨を形見として、ご生前の在りし日の面影を偲び、故人との心の交流をする大切な場です。
              <br />
              それと共に、仏様の尊い教えに触れ、自らの命の歩みを確認していく処でもあります。
              <br />
              <br />
              西養寺の無量寿堂は、単なる遺骨の安置所ではなく内観には阿弥陀如来の光に満ちた極楽浄土を表現。
              <br />
              お参りされる方々にとっての仏縁になれればと思います。
              <br />
              <br />
              お一人お一人の「いのち」と人生の歴史が後世に受け継がれていきますよう、西養寺が永く護持・管理を務めてまいります。
            </p>
            <span>浄土真宗本願寺派　亀原山　西養寺</span>
            <span>第十六世　住職　釋 了円</span>
          </div>
        </article>
        <ul>
          <li>
            <div className={styles.itemImage}>
              <Image src={List01a} alt="特別区画壇" />
            </div>
            <figure>
              <Image src={List01b} alt="特別区画壇" />
              <figcaption>完成予想写真（５基分）</figcaption>
            </figure>
            <div className={styles.wrapText}>
              <div className={styles.itemName}>
                <span>
                  <i>特別</i>区画壇
                </span>
                <span>（ 幅60㎝ ）</span>
              </div>
              <p className={styles.headComment}>
                天然木にこだわり扉もすべて手彫り彫刻にて仕上げた納骨壇最高峰の逸品モデルです。
              </p>
              <h4>●冥加金</h4>
              <dl>
                <div>
                  <dt>新規加入の方</dt>
                  <dd>
                    <em>200</em>万円
                  </dd>
                </div>
                <div>
                  <dt>既存納骨堂に加入済みの方</dt>
                  <dd>
                    <em>170</em>万円
                  </dd>
                </div>
              </dl>
              <p className={styles.notice}>●6寸壺収骨可能数…15個</p>
            </div>
          </li>
          <li>
            <div className={styles.itemImage}>
              <Image src={List02a} alt="普通区画壇" />
            </div>
            <figure>
              <Image src={List02b} alt="普通区画壇" />
              <figcaption>完成予想写真（５基分）</figcaption>
            </figure>
            <div className={styles.wrapText}>
              <div className={styles.itemName}>
                <span>
                  <i>普通</i>区画壇
                </span>
                <span>（ 幅50㎝ ）</span>
              </div>
              <h4>●冥加金</h4>
              <dl>
                <div>
                  <dt>新規加入の方</dt>
                  <dd>
                    <em>150</em>万円
                  </dd>
                </div>
                <div>
                  <dt>既存納骨堂に加入済みの方</dt>
                  <dd>
                    <em>120</em>万円
                  </dd>
                </div>
              </dl>
              <p className={styles.notice}>●6寸壺収骨可能数…12個</p>
            </div>
          </li>
        </ul>
        <article className={styles.blockMiddle}>
          <h3>お申込要項</h3>
          <div className={styles.boxContents}>
            <dl>
              <div>
                <dt>●お申込み資格</dt>
                <dd>
                  <p>・西養寺門信徒及び将来門信徒になりうる方。</p>
                  <p>・西養寺門信徒の方がご紹介する方。</p>
                  <span>※西養寺納骨堂管理規程を遵守できる方に限ります。</span>
                </dd>
              </div>
              <div>
                <dt>●年間維持管理費</dt>
                <dd>
                  <p>一基あたり：年間10,000円</p>
                  <p>※場所決め…納骨壇の希望区画は加入申込み順となります。</p>
                </dd>
              </div>
            </dl>
            <Image
              src={ImageLayout}
              alt="配置図"
              className={styles.itemImage}
            />
          </div>
        </article>
        <article className={styles.blockBottom}>
          <h3>永代壇</h3>
          <div className={styles.boxContents}>
            <Image src={Item01} alt="永代壇" className={styles.itemImage} />

            <div className={styles.wrapText}>
              <p>
                近年、核家族化や少子化、非婚化などの後継者の不在やお墓を守るという意識の希薄化がすすみ、個人によるお墓の管理は困難になってきます。
                そこで定期的なお参りが難しい方や、ご遺骨の一切の管理をお寺に引き継いでほしい方々の為に、お寺が護持・管理を行っていく永代壇を設置いたしました。
                <br />
                （詳細につきましては、お気軽にお寺までにご相談くださいませ）
                <br />
                <br />
                また長年の中で50年以上が経つご先祖や先立つ方のご遺骨を「土に還す」と表現いたしますが、西養寺では無量寿堂の阿弥陀如来像の元に収骨する収骨庫もご用意致しております。
                <br />
                ご遺骨がいっぱいになっておられる方や、お墓から移られる方方はご検討の上、そちらもお気軽にご相談ください。
              </p>
              <div className={styles.itemPrice}>
                <span>加入料(取得料)</span>30〜50万円
              </div>
            </div>
          </div>
        </article>
        <article className={styles.blockInfo}>
          <dl>
            <div>
              <dt>所在地</dt>
              <dd>
                <address>
                  〒864-0012
                  <span>熊本県荒尾市元井手1753番地</span>
                  浄土真宗本願寺派 西養寺
                </address>
              </dd>
            </div>
            <div>
              <dt>電話番号</dt>
              <dd>
                <a href="tel:096860850">0968-66-0850</a>
              </dd>
            </div>
            <div>
              <dt>メール</dt>
              <dd>
                <a href="mailto:info@saiyoji.com">info@saiyoji.com</a>
              </dd>
            </div>
          </dl>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24009.143530074227!2d130.43801254225792!3d32.99799274731627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x35404fe2bd696a71%3A0x8199fbead98240f7!2z6KW_6aSK5a-677yI5rWE5Zyf55yf5a6X5pys6aGY5a-65rS-77yJ!5e0!3m2!1sja!2sjp!4v1746700953788!5m2!1sja!2sjp"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
        <Link href="/contact/" className={styles.linkContact}>
          見学のお申し込みはこちら
        </Link>
      </section>
    </>
  );
}
