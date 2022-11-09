import Layout from "../../components/layout"

export default function News({results}) {
    return(
    <Layout>
    <h1>Top Stories</h1>
    <ul>
      {results.map(result=>{
        return (<li key={result.url}><a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a></li> )
      })}
    </ul>
    </Layout>
    )
}

const API_KEY = "G1GQ0J61bxe806vff0NKEJ0R08flhApE"
export async function getStaticProps() {
  const URL =`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.results)
  return {
    props: {
        results : data.results

    }
  }
}