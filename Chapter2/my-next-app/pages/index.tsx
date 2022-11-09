import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my e-learning site
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href="/learn/next" className={styles.card}>
            <h2>learn Next.js &rarr;</h2>
 
          </Link>
          <Link href="/learn/react" className={styles.card}>

            <h2>Learn React &rarr;</h2>


          </Link>
          <Link href="/learn/angular" className={styles.card}>

            <h2>Learn angular &rarr;</h2>


          </Link>
          <Link href="/learn/vue" className={styles.card}>
            <h2>Learn vue&rarr;</h2>

          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </Layout>
  )
}