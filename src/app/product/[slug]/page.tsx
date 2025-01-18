import FeaturedProduct from '../../components/featuredproducts'
import { FooterProduct, HeaderProduct } from '../../components/nav'
import Newsletter from '../../components/newsletter'
import Proof from '../../components/proof'
import '../../style/page-product.css'
import '../../style/style.css'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'

export const dynamic = "force-dynamic"

async function getPost(slug: string) {
    const PRODUCT_QUERY = groq`
        *[_type == "product" && slug.current == $slug][0] {
            ...,
            "image": image.asset->url,
        }`
    const product = await client.fetch(PRODUCT_QUERY, { slug })
    return product
}

interface PageProps {
    params: {
        slug: string
    }
}

const ProductPage = async ({ params }: PageProps) => {
    const awaitedParams = await params
    const product = await getPost(awaitedParams.slug)

    return (
        <div>
            <HeaderProduct />
            <div className="product-hero" >
                <div className="container-1">
                    <Image src={product.image} alt={product.name} width={721} height={759} />
                </div>
                <div className="container-2">
                    <div className="container-desc">
                        <div>
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">£{product.price}</div>
                        </div>
                        <div>
                            <div>Description</div>
                            <div className="product-desc">
                                {product.description}
                            </div>
                            <ul className="product-features">
                                {product.features.map((feature: string, index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
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
                                <div className="dimension-value">{product.dimensions.height}</div>
                                <div className="dimension-value">{product.dimensions.width}</div>
                                <div className="dimension-value">{product.dimensions.depth}</div>
                            </div>
                        </div>
                        <div className="product-actions">
                            <div className="product-amount">
                                Amount
                                <span className="amount-value">{product.quantity}</span>
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
    )
}

export const metadata = {
    title: 'Product Page',
    description: 'Dynamic product description page',
}

export default ProductPage
