import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Menu(){
    return(
        <ul>
            <Link href="/"> <a>Home</a> </Link>
            <Link href="/contacts"> <a>Contacts</a> </Link>
        </ul>
    )
}

export default function Layout({children }) {
    return (
        <div className={styles.container}>
            <Menu/>
            {children}   
        </div>
    )
}