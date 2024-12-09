import Product from "./productcard";
import "../style/style.css"

export default function FeaturedProduct() {
    return( 
        <div>
            <div className="products">
                <div>
                    <Product count={4}/>
                </div>
            </div>
        </div>
    )
}
