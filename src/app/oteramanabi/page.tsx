/* =======================================
 * お寺学び
 * URL: src/app/oteramanabi/page.tsx
 * Created: 2025-05-10
 * Last updated: 2025-05-10
 * ======================================= */
'use client';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';
import React from 'react';
import bgImage from '@/assets/images/common/title-erabi.webp';
import Image01 from '@/assets/images/oteramanabi/image01.webp';
import Image02 from '@/assets/images/oteramanabi/image02.webp';
import PageHead from '@/components/common/PageHead';
import PageTitle from '@/components/common/PageTitle';
import ContainerSchedule from '@/components/common/ContainerSchedule';
import styles from '@/styles/oteramanabi.module.scss';

import Image from 'next/image';
export default function Oteramanabi() {
  const triggerA = useScrollTrigger<HTMLDivElement>();
  const triggerB = useScrollTrigger<HTMLDivElement>();
  const triggerC = useScrollTrigger<HTMLDivElement>();
  return (
    <>
      <PageHead title="お寺学び" backgroundImage={bgImage} />
      <PageTitle titleJp="浄土真宗について​" titleEn="Jodo Shinshu" />

      <section className={styles.containerOteramanabi} ref={triggerA.ref}>
        <div className={styles.blockHead}>
          <h3
            className={`${styles.slideIn} ${triggerA.isVisible ? styles['is-active'] : ''}`}
          >
            伝統を受け継ぎ、<span>時代に合わせて進化させる。</span>
          </h3>
        </div>
        <p className={styles.headText}>
          仏教は、紀元前5世紀頃のインドでおこりました。
          <br />
          仏教とは、仏＝ブッダ（悟った人という意味）が説いた教えを実践し、自らも悟りを得て仏となることを目的とした宗教であり、究極的には真実の幸せな生き方を目指すものです。
          <br />
          歴史上の人物であるブッダは、人間の苦しみや悲しみを乗り越えるにはどのようにしたらよいのかを思案し、6年間の苦行の末に覚り（さとり）を開きました。
          <br />
          その後、多くの人が同じ覚りを得る事を願い、ブッダは人々に教えを説く旅に出ます。仏教はこうして始まりました。
          <br />
          <br />
          その後、仏教は大乗仏教と小乗仏教という２つの大きな流れに考え方が別れてゆきます。
          <br />
          わかりやすく大きく分ければ、釈尊と同じように出家をして同じ体験、実践、修行を通して覚りを得ようとするのが小乗仏教で、
          <br />
          普通の家庭生活の中で釈尊の経典を中心に信仰生活を通して仏に迎えられていく道を歩むという考え方が大乗仏教です。
          <br />
          浄土真宗はこのうち大乗仏教の宗派の一つです。
          <br />
          <br />
          浄土真宗は、鎌倉時代の中頃に親鸞聖人によって開かれましたが、その後、室町時代に蓮如上人（れんにょしょうにん）によって民衆の間に広く深く浸透して発展し、
          <br />
          現在では、わが国における仏教諸宗の中でも代表的な教団の一つとなっています。
          <br />
          <br />
          浄土真宗の教えの特徴は、念仏です。念仏を唱えれば救われるという「専修念仏」の考えを基にしています。
          <br />
          また、善人だけではなく、悪人も救われる「悪人正機」という教えもあります。
        </p>
      </section>
      <PageTitle titleJp="学佛大非心について" titleEn="gakubutsudaihishin" />
      <section className={styles.containerMiddle} ref={triggerB.ref}>
        <article
          className={`${styles.slideIn} ${triggerB.isVisible ? styles['is-active'] : ''}`}
        >
          <p>
            「日々の暮らしの中で、「人間関係に疲れたとき」、「自分や家族が大きな病気になったとき」
            我々は「人生そのものへの問い」が起きる。例えば「いったい何のために生きているのか」というようなことです。
            <br />
            そんな時に仏教では、仏様の大いなる慈悲の心に包まれていることに気付き、私たちにもそれと同じように生きることが大事であると諭されました。この慈悲の本質を学ぶことが仏教の根幹であるという意味で“学佛大悲心”という言葉があります。
            <br />
            仏様が私たちに慈悲の心で接してくださるように、その慈悲に私が触れていくことで、これまで気づかなかった多くの支えに「おかげさま」と感謝を感じていくことで、より人生が豊かなものに変わってくるはずです。
          </p>
          <div className={styles.boxImage}>
            <Image src={Image01} alt="学佛大非心" />
          </div>
        </article>
      </section>
      <PageTitle titleJp="お寺勉強会" titleEn="study" />
      <section className={styles.containerBottom} ref={triggerC.ref}>
        <article
          className={`${styles.slideIn} ${triggerC.isVisible ? styles['is-active'] : ''}`}
        >
          <p>
            西養寺は、地域の皆様が誰でも気軽に立ち寄って、心の平安を感じられるお寺を目指しています。
            <br />
            その中心としてお気軽に仏様の御心に触れていただく為に、各種行事を執り行っております。
            <br />
            門徒の方のみならず、それ以外のお子様からでも参加できる行事もございます。
            <br />
            苦しみ、悲しみの中で人はどのように生きていくべきか、親鸞さまのみ教えを通じて真実の生き方を見つめましょう。
            <br />
            是非お立ち寄りください。
          </p>
          <div className={styles.boxImage}>
            <Image src={Image02} alt="勉強" />
          </div>
        </article>
      </section>

      <ContainerSchedule />
    </>
  );
}
