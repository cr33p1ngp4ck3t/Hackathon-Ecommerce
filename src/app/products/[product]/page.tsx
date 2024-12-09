/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FeaturedProduct from '../../components/featuredproducts';
import FooterProduct, { HeaderProduct } from '../../components/nav';
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
                            <div style={{ fontSize: '36px' }}>{productDetails.name}</div>
                            <div style={{ fontSize: '24px' }}>£{productDetails.price}</div>
                        </div>
                        <div>
                            <div>Description</div>
                            <div style={{ fontFamily: 'Satoshi, sans-serif' }}>
                                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                            </div>
                            <ul style={{ fontFamily: 'Satoshi, sans-serif', marginTop: '20px' }}>
                                <li style={{ fontFamily: 'Satoshi, sans-serif'}}>Premium material</li>
                                <li style={{ fontFamily: 'Satoshi, sans-serif'}}>Handmade upholstery</li>
                                <li style={{ fontFamily: 'Satoshi, sans-serif'}}>Quality timeless classic</li>
                            </ul>
                        </div>
                        <div style={{ width: '250px' }}>
                            <div style={{ padding: '10px 0' }}>Dimension</div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#2A254B' }}>Height</div>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#2A254B' }}>Width</div>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#2A254B' }}>Depth</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#505977' }}>110cm</div>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#505977' }}>75cm</div>
                                <div style={{ flex: '1', fontFamily: 'Satoshi, sans-serif', padding: '10px 0', color: '#505977' }}>50cm</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ flex: '1', display: 'flex', height: '46px', alignItems: 'center' }}>
                                Amount
                                <span style={{ background: '#F9F9F9', width: '122px', textAlign: 'center', height: '100%', alignContent: 'center' }}>1</span>
                            </div>
                            <div style={{ display: 'flex', flex: '1', height: '100%', width: '100%', justifyContent: 'flex-end' }}>
                                <button style={{ color: 'white', background: '#2A254B', width: '150px', height: '100%', border: 'none' }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ margin: '0 0 20px 60px', fontSize: '32px' }}>You Might Also Like</div>
                <FeaturedProduct />
            </div>
            <div style={{ marginTop: '60px' }}>
                <Proof />
            </div>
            <div>
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
