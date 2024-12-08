import FeaturedProduct from "./components/featuredproducts";
import Features from "./components/features";
import Hero from "./components/hero";
import { Footer, Header } from "./components/nav";
import Newsletter from "./components/newsletter";
import Proof from "./components/proof";


export default function HomePage() {
  return (
    <>
      <div>
        <Header/>
          <div>
            <div>
              <Hero />
            </div>
            <div style={{margin:"50px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderCollapse:"separate"}}>
              <Proof />
              <br />
              <br />
              <br />
              <br />
              <FeaturedProduct />
              <br />
              <br />
              <br />
              <br />
              <Features />
              <br />
              <br />
              <br />
            </div>
            <div>
              <Newsletter />
            </div>
          </div>
          <Footer />
      </div>
    </>
  )
}