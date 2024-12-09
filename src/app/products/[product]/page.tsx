/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FeaturedProduct from '../../components/featuredproducts';
import { FooterProduct,  HeaderProduct } from '../../components/nav';
import Newsletter from '../../components/newsletter';
import Proof from '../../components/proof';
import { productDesc } from '../../components/productcard';
import '../../style/page-product.css';
import '../../style/style.css';

type ProductProps = {
    params: any;
}

const ProductPage = async ({ params }: ProductProps) => {
    const { product } = await params;
    const productDetails = productDesc.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, '-') === product
    );

    if (!productDetails) return <p>Product not found</p>;

    return (
        <div>
            <HeaderProduct />
            <div className="product-hero">
                <div className="container-1">
                    <img src={productDetails.src} alt={productDetails.name} />
                </div>
                <div className="container-2">
                    <div className="container-desc">
                        <div>
                            <div className="product-name">{productDetails.name}</div>
                            <div className="product-price">£{productDetails.price}</div>
                        </div>
                        <div>
                            <div>Description</div>
                            <div className="product-desc">
                                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                            </div>
                            <ul className="product-features">
                                <li>Premium material</li>
                                <li>Handmade upholstery</li>
                                <li>Quality timeless classic</li>
                            </ul>
                        </div>
                        <div className="product-dimensions">
                            <div>Dimension</div>
                            <div className="dimensions-row">
                                <div className="dimension-label">Height</div>
                                <div className="dimension-label">Width</div>
                                <div className="dimension-label">Depth</div>
                            </div>
                            <div className="dimensions-row">
                                <div className="dimension-value">110cm</div>
                                <div className="dimension-value">75cm</div>
                                <div className="dimension-value">50cm</div>
                            </div>
                        </div>
                        <div className="product-actions">
                            <div className="product-amount">
                                Amount
                                <span className="amount-value">1</span>
                            </div>
                            <div className="add-to-cart">
                                <button className="cart-button">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="related-products">
                <div className="related-title">You Might Also Like</div>
                <FeaturedProduct />
            </div>
            <div className="proof-section">
                <Proof />
            </div>
            <div className="newsletter-section">
                <Newsletter />
            </div>
            <FooterProduct />
        </div>
    );
};

export async function generateStaticParams() {
    return productDesc.map((product) => ({
        params: {
            product: product.name.toLowerCase().replace(/\s+/g, '-'),
        },
    }));
}

export const metadata = {
    title: 'Product Page',
    description: 'Dynamic product description page',
};

export default ProductPage;
