import Head from 'next/head'
import Layout from "../../components/Layout"
import List from '../../components/list';
import { handler, results } from "../api";

function News( props ) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <List {...props}/>
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
  const results=await results(`https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`)



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
