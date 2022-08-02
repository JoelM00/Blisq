import Link from 'next/link'
import Layout from '../../components/Layout'
import {API_URL} from "../../config/index"
import styles from '../../styles/News.module.css'
import NewsItem from 'components/NewsItem'

export default function News({news}) {
  return (
    <div>
      <Layout>
        <h1>News</h1>
        {news.length === 0 && <h3>No news</h3>}
        {news.map(item => (
          <NewsItem key={item.id} news={item.attributes}></NewsItem>
        ))}
        <Link href="/">
            <a className={styles.back}>Go Back</a>
        </Link>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sports`)
  var news = await res.json()
  news = news.data
  return {
    props: {news},
    revalidate: 1
  }
}

