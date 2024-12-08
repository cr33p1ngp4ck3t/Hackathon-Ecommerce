import { Footer, Header } from "../components/nav"
import Product from "../components/productcard"
import '../style/products-page.css'

export default function ProductPage() {
    return (
        <div>
            <Header />
            <div>
                <div className="products-page">
                    <div>All Products</div>
                </div>
                <div className="filter-container">
                    <div className="filter-content">
                        <div className="filter-content-1">
                            <select name="" id="">
                                <option value="">Category</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <select name="" id="">
                                <option value="">Prodcut Type</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <select name="" id="">
                                <option value="">Price</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <select name="" id="">
                                <option value="">Brand</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                        <div className="filter-content-2">
                            <div>Sorting by</div>
                            <select name="" id="">
                                <option value="">Date Added</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <Product />
                </div>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    )
}