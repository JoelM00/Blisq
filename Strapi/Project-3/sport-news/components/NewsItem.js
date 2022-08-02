import Link from "next/link";
import Image from "next/image";
import styles from '../styles/NewsItem.module.css'
import moment from "moment";

export default function NewsItem({news}) {

    var img = null

    if (news.image.data != null) {
        img = (
            <div className={styles.img}>
                <img src={news.image.data.attributes.formats.thumbnail.url}/>
            </div>
        )
    }

    return (
        <div className={styles.news}>
            {img}
            <div className={styles.info}>
                <span>
                    {moment(news.date).format("yyyy-MM-DD")} {news.time}
                </span>
                <h3>{news.name}</h3>
            </div>
            <div className={styles.link}>
                <Link href={`/news/${news.slug}`}>
                    <a className="btn">
                        Read More
                    </a>
                </Link>
            </div>
        </div>
    )
}
