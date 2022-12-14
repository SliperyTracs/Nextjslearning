import Head from 'next/head'
import Layout from "../../components/Layout"
import { handler } from "../api";

function News({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>{title}</h1>
          <ul>
            {results?.map(result => <li><a href={result.url} rel="noreferrer nofollower">{result.title}</a></li>)}
          </ul>
        </main>
    </Layout>);
}

const API_KEY = "vaYs0xFG0zm9SMEL06P4JqYd60rjc2E4"
export async function getStaticPaths() {
    const results = await handler(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`)
  return {
    paths: results.map(result =>{
        return {params : {section : result.section }}
    }),
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const results=await handler(`https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`)



   // The value of the `props` key will be
  //  passed to the `Home` component
      return {
        props: {
          results,
          title:params.section
        }
      }


}
export default News;
