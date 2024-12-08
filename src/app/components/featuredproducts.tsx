import Link from "next/link";
import Product from "./productcard";
import "../style/style.css"

export default function FeaturedProduct() {
    return( 
        <div>
            <div className="products">
                <div>
                    <Product count={4}/>
                </div>
                <div>
                    <Link href=""><button id="content-button">View Collection</button></Link>
                </div>
            </div>
        </div>
    )
}
