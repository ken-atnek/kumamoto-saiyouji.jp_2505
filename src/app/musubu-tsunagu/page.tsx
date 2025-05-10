/* =======================================
 * 結ぶ・紡ぐ
 * URL: src/app/musubu-tsunagu/page.tsx
 * Created: 2025-05-09
 * Last updated: 2025-05-09
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import React from 'react';
import bgImage from '@/assets/images/common/title-musubu.webp';
import PageHead from '@/components/common/PageHead';
import PageTitle from '@/components/common/PageTitle';
import styles from '@/styles/musubu-tsunagu.module.scss';
import ListImage01 from '@/assets/images/musubu-tsunagu/imageList01.webp';
import ListImage02 from '@/assets/images/musubu-tsunagu/imageList02.webp';
import ListImage03 from '@/assets/images/musubu-tsunagu/imageList03.webp';
import ListImage04 from '@/assets/images/musubu-tsunagu/imageList04.webp';
import Work01 from '@/assets/images/musubu-tsunagu/work01.webp';
import Work02 from '@/assets/images/musubu-tsunagu/work02.webp';
import Work03 from '@/assets/images/musubu-tsunagu/work03.webp';
import Work04 from '@/assets/images/musubu-tsunagu/work04.webp';
import Staff01 from '@/assets/images/musubu-tsunagu/staff01.webp';
import Staff02 from '@/assets/images/musubu-tsunagu/staff02.webp';
import Staff03 from '@/assets/images/musubu-tsunagu/staff03.webp';
import Image from 'next/image';
import { useMemo } from 'react';
export default function MusubuTsunagu() {
  const triggerA = useScrollTrigger<HTMLDivElement>();
  const workListData = useMemo(
    () => [
      {
        images: Work01,
        workTitle: '御取り越し',
        comment:
          '浄土真宗では開宗間もないときより、宗祖である親鸞聖人のご法事を1月9日から16日までの一週間にわたって京都の西本願寺で務めております。\n古くは浄土真宗の門信徒は新年を迎えたら、ご法事の為に京都にお参りに行く風習がありました。この一連のご法事を御取り越しといいます。\n現代では全国の真宗寺院が1月に京都に伺うのに先んじて、旧年中に一般の家庭でもご法事を行うことで続いています。御取り越しと言います。\n西養寺でも古くからのこの慣わしを今も紡ぎ続けています。',
      },
      {
        images: Work02,
        workTitle: '仏前結婚式',
        comment:
          '浄お寺で執り行う結婚式のことを「仏前結婚式」と言います。神前式とともに日本で古くから行われている挙式スタイルです。\n命と命が結ばれる結婚式。\n西養寺では仏様の教えを通して、新しい門出のお手伝いを行います。門徒ではない方も是非ご相談ください。',
      },
      {
        images: Work03,
        workTitle: '葬儀',
        comment:
          '仏教では死を涅槃または往生といい、極楽の世界に生まれ変わって赴くという意味を意味があります。\n愛しい人との別れは悲しいけど、別れから何も学べないのはもっと悲しい。これは仏教におけるお釈迦様の教えです。\n西養寺は当寺の会場を葬儀会場としてご利用頂くことができ、大切な方との最後の触れ合い・学びを、かけがえのないなものにするべくお手伝いをさせて頂きます。',
      },
      {
        images: Work04,
        workTitle: '御法要',
        comment:
          'ご法事は親しい方やご先祖様を偲ぶ場でもあり、仏様との尊いご縁を繋ぐ場でございます。\nただご自宅でのご法事となりますと、準備に気を取られがちになってしまいます。大事な時間をより確かなものにするために、西養寺では本堂を貸し切った形でのご法事もお手伝いいたします。',
      },
    ],
    []
  );
  const staffListData = useMemo(
    () => [
      {
        images: Staff01,
        staffName: '住職　亀原 了円',
        comment:
          '古くより「栄枯盛衰」「諸行無常」という言葉がります。\nどれだけ優れた会社や人物にも、おおよその場合において隆盛の果てに衰勢があり、これが時代の常だとも言えます。\nそんな中でも西養寺は430年間にわたって地域に存在し続けることができました。\n受け継がれてきたお寺には「生きた仏様の教え」とそれを守ってきた「地域の方々の魂」が宿っており、受け継いでいくことこそが私の使命だと感じています。\n今を生きる方々は、わからないものに対しては不必要にだととらえてしまう傾向があるように思います。それ故に宗教という存在自体に触れることに恐怖感があるのかもしれません。\nしかしながら今を生きる方々が人生の岐路にたっときには、仏様の教えは必ず大事な気付きを与えてくださるはずです。\nこれからも私どもは、人生における気付きや他者に生かされてはじめて自分が存在するということを、仏教の教えを通して次代にお伝えしていくために勤めて参ります。\n昭和30年生まれ。野球は、野球はホークスをこよなく愛し、その他スポーツ全般幅広く興味を持ってチェックしています。',
      },
      {
        images: Staff02,
        staffName: '副住職​　亀原 洸了',
        comment:
          '私は好きな言葉として常々「今を生きる」という一文を使わせていただきます。\nお釈迦様の教えに「過去を振り返らず、未来に悩まず、ただ今できることを精一杯生きる」というような教えがあります。それは日常生活すべてが仏の道へつながっており、私たちがどのように生きるのかが大切だということを諭されています。\nお寺の中だけでなく、様々なところで仏様の教えを、伝え、発信していきたいです。\nラグビー経験七年、車と音楽をこよなく愛し、身体を鍛えること怠らない昭和61年生まれ。妻は一人、子供は三人。',
      },
      {
        images: Staff03,
        staffName: '副住職​　亀原 渉海',
        comment:
          '仏様は、死後の世界を語っておられるのではなく、日々の生活に悩み、つまずいていくような私たちが「今を生きていく」為に説かれた教えです。\n皆さんとの何気ない会話の中で、少しでも仏様の教えを感じて頂けるのが一番じゃないかと考えます。\n平成元年生まれ。高校・大学、社会人までラグビーに熱中。\n書店では見た目だけでチョイス（大半が積読）、音楽も嗜む（釣鐘を鳴らしているだけじゃなく）。お寺のインスタグラムの更新も担当しているが、悪戦苦闘中。インスタやティックトックについて誰か教えてほしいと切に願う今日この頃です。\n皆様の触れ合いや、新しい価値観との出会いのお手伝いができますと幸いです。',
      },
    ],
    []
  );
  return (
    <>
      <PageHead title="結ぶ・紡ぐ" backgroundImage={bgImage} />
      <PageTitle titleJp="西養寺について" titleEn="about" />
      <section className={styles.containerMusubu} ref={triggerA.ref}>
        <div className={styles.blockHead}>
          <h3 className={`${triggerA.isVisible ? styles['is-active'] : ''}`}>
            地域にあること​<span>開寺以降の歴史​</span>
          </h3>
        </div>
        <p className={styles.h2Sidebar}>
          西養寺の歴史は古く、天正12年（1584年）当時住職が往生（死亡）下とする記録が現存する中では最も古く、
          <br />
          それから428年が経過しているので概ね創立されて450年になると思われます。
          江戸時代では寺社奉行があり今でいう町役場のような役割を果たしていました。
          <br />
          そういった経緯から古くよりお寺は地域と密接に関わり、長く見守り続けてまいりました。
          <br />
          現在では保育園も併設しており、様々な形で仏様の教えを現在にまで伝えております。
          <br />
          これからも仏様の教えと共に。地域の方々にとって身近なよりどころとして存在できるよう努めてまいります。
        </p>
        <div className={styles.boxImageList}>
          <Image src={ListImage01} alt="開寺以降の歴史の画像" />
          <Image src={ListImage02} alt="開寺以降の歴史の画像" />
          <Image src={ListImage03} alt="開寺以降の歴史の画像" />
          <Image src={ListImage04} alt="開寺以降の歴史の画像" />
        </div>
        <article className={styles.blockMiddle}>
          <h3>結ぶ・紡ぐのお手伝い</h3>
          <ul className={styles.workList}>
            {workListData.map((item, index) => {
              return (
                <li key={index}>
                  <figure>
                    <Image
                      src={item.images}
                      alt={item.workTitle}
                      className={styles.itemImage}
                      loading="lazy"
                    />
                    <figcaption>{item.workTitle}</figcaption>
                  </figure>
                  <p>
                    {item.comment.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
          <ul className={styles.staffList}>
            {staffListData.map((item, index) => {
              return (
                <li key={index}>
                  <div className={styles.itemName}>{item.staffName}</div>
                  <div className={styles.itemImage}>
                    <Image
                      src={item.images}
                      alt={item.staffName}
                      loading="lazy"
                    />
                  </div>
                  <p>
                    {item.comment.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
}
