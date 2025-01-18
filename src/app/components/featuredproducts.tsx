import Product from "./productcard";
import "../style/style.css"

export default function FeaturedProduct() {
    return( 
        <div>
            <div className="products">
                <div>
                    <Product count={3} />
                </div>
            </div>
        </div>
    )
}
