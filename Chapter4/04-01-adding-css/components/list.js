import Image from "next/image";
import styles from "../styles/List.module.css"

export default function List({results, title}){
    return(
        <main>
            <h1>{title}</h1>
            <ul className={styles.list}>
                {results?.map(({title, url, uri, img}) => {
                    return(
                        <li key={uri} className={styles.card}>
                            <Image src={img} alt={title} width="75" height="75"/>
                            <a href={url} rel="noreferrer nofollower">
                                {title}
                            </a>
                        </li>)
                })}

            </ul>
        </main>
    )
}