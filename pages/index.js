import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          不知从何时起,自拍杆变成了人手一件“必备”附件,最便宜的时候几块钱就能拿下,而我们今天要介绍的可不是什么地摊货。它身价高贵,是新娘子们在大喜之日的自拍利器。纽约时装品牌ReemAcra最近推出了一款价值500美元的自拍杆,上面镶嵌了施华洛世奇水晶和白玫瑰。《纽约邮报》评论它是一款“自恋杆。作为一款低科技产品,500美元的价格委实不便宜,但当它被摆上ReemAcra第五大道旗舰店后,很快就被准新娘们抢购一空。Acra表示,新娘自拍杆和耳机是表达幸福心声、增加欢乐的好工具。正式照片看起来严肃正经,而自。拍照则能让每个人都舒心一笑。
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
