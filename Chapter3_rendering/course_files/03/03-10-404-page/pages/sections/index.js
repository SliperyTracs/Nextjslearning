import Head from 'next/head'
import Layout from "../../components/Layout"
import { handler } from "../api"
import Link from 'next/link'
function Sections({ results, title }) {
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
            {results?.map(result => {
                return(
                <>
                    -<Link href={`sections/${result.section}`}><a>{result.display_name}</a></Link><br/>
                </>
                )
            })}
          </ul>
        </main>
    </Layout>);
}



const API_KEY = "vaYs0xFG0zm9SMEL06P4JqYd60rjc2E4"
export async function getStaticProps({ params }) {

  const URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
      return {
        props: {
          results : await handler(URL),
          title: "Sections" 
        }
      }
}
export default Sections;
