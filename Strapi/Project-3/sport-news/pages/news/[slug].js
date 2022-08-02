import Router, {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import {API_URL} from "../../config/index"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/News.module.css'
import moment from 'moment'

import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function singleNews({news}) {
    
    const deleteNews = async (e) => {
        if (window.confirm("Are you sure that you wanted to delete news?")) {
            const res = await fetch(`${API_URL}/sports/${news.id}`, {
                method: "DELETE"
            })
            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message)
            } else {
                Router.push("/news")
            }
        }
    }
    
    return (
        <Layout>
            <div className={styles.news}>
                <div className={styles.controls}>
                    <Link href={`/news/edit/${news.id}`}>
                        <button className='btn-edit'>Edit News</button>
                    </Link>
                    <Link href={`/news/edit/${news.id}`}>
                        <button className='btn-delete' onClick={deleteNews}>Delete News</button>
                    </Link>
                </div>
                <span>{moment(news.attributes.date).format("yyyy-MM-DD")} {news.attributes.time}</span>
            </div>
            <h1>{news.attributes.name}</h1>
            <ToastContainer></ToastContainer>
            {news.attributes.image && (
                <div className={styles.image}>
                    <img src={news.attributes.image.data.attributes.formats.medium.url}></img>
                </div>
            )}
            <p>{news.attributes.detail}</p>
            <Link href="/news">
                <a className={styles.back}>Go Back</a>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/sports?populate=*`)
    var news = await res.json()

    const paths = news.data.map(item => ({
        params: {slug: item.attributes.slug}
    }))
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params: {slug}}) {
    const res = await fetch(`${API_URL}/sports?filters[slug][$eq]=${slug}&populate=*`)
    var singleNews = await res.json()
    singleNews = singleNews.data

    return {
        props: {
            news: singleNews[0]
        },
        revalidate: 1
    }
}