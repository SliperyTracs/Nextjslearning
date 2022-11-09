import Image from "next/image"
import gif from "../public/not-found.gif"
import Layout from "../components/Layout"
import { useRouter } from "next/router"

export default function NotFound(){
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return(
        <Layout>
        <br/>
        <a href="#" onClick={goBack}>Back</a>
        <div className="container">
            
            <h1>Sorry we could not find what you are looking for</h1>
            <Image className="img"src={gif} alt="not found" />
            <style jsx>
                {`
                .container{
                    
                    background:black;
                    text-align:center;
                    align-items:center
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                }
                    h1{
                        color:chocolate;
                    }
                    .img{
                        height:60%:
                        width:60%;
                    }
                `}
            </style>
        </div>
        </Layout>
    )
}