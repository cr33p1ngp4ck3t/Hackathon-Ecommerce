/* eslint-disable @next/next/no-img-element */
import { AboutHeader, FooterProduct } from "../components/nav"
import "../style/page-product.css"
import "../style/page-about.css"
import Link from "next/link"
import Features from "../components/features"
import Proof from "../components/proof"
import Newsletter from "../components/newsletter"

export default function AboutPage() {
    return (
        <div>
            <AboutHeader />
            <div>
                <div className="about-features">
                    <div >A brand built on the love of craftmanship,
                    quality and outstanding customer service</div>
                    <Link href={'/products'} style={{ display:"flex", justifyContent:"center"}}><button className="content-button" style={{background:"#F9F9F9", color:""}}>View Collection</button></Link>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Features />
                </div>
                <br />
                <br />
                <br />
                <div>
                    <div className="about-services">
                        <div className="about-services-1"></div>
                        <div className="about-services-2"> 
                            <div className="service-content">
                                <div className="h">{`Our service isn’t just personal, it’s actually
                                hyper personally exquisite`}</div>
                                <div className="t">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
                                    <br /><br />Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</div>
                                <div style={{}}><Link href={''}><button className="content-button" style={{background:"white", color:""}}>Get in Touch</button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div style={{margin:"10px 0"}}>
                    <Proof />
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Newsletter />
                </div>
            </div>
            <FooterProduct />
        </div>
    )
}