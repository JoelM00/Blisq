import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import {useRouter} from 'next/router'
import Hero from './Hero'

export default function Layout({title,keywords,description,children}) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="descriptions" content={description}></meta>
                <meta name="keywords" content={keywords}></meta>
            </Head>
            <Header></Header>
            { router.pathname === "/" && <Hero></Hero>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

Layout.defaultProps = {
    title: "Sport News | Find Latest Sport News",
    description: "A Website that brings you latest news about sports",
    keywords: "cricket, football, f1, tennis, badminton, golf",
}