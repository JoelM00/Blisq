import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import {API_URL} from "../config/index"
import NewsItem from 'components/NewsItem'

export default function Home({news}) {
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No news</h3>}
        {news.map(item => (
          <NewsItem key={item.id} news={item.attributes}></NewsItem>
        ))}
        {news.length > 0 && (
          <Link href="/news">
            <a className='btn-secondary'>View All News</a>
          </Link>
        )}
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sports?populate=*`)
  var news = await res.json()
  news = news.data
  return {
    props: {news},
    revalidate: 1
  }
}

