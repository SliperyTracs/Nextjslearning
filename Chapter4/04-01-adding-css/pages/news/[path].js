import Head from 'next/head'
import Layout from "../../components/Layout"
import { handler, results } from "../api";
import List from "../../components/list"

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


export async function getStaticPaths() {
  return {
    paths: [
      { params: { path: 'top-stories' } }, 
      { params: { path: 'popular' } }
    ],
    fallback: true // false or 'blocking'
  };
}
const API_KEY = "vaYs0xFG0zm9SMEL06P4JqYd60rjc2E4"
export async function getStaticProps({ params }) {
  const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  const POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`


   // The value of the `props` key will be
  //  passed to the `Home` component
  switch(params.path) {
    case 'top-stories':
      return {
        props: {
          results : await results(TOP_STORIES_URL),
          title: "Top Stories" 
        }
      }
    case 'popular':
      return {
        props: {
          results : await results(POPULAR_URL),
          title: "Popular" 
        }
      }

      default : {
        return {
          props: null
        }
      }
  }
}
export default News;
