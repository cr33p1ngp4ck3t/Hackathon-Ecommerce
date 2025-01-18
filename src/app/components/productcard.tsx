// @typescript-eslint/no-unused-expressions
"use client"
import Link from 'next/link';
import "../style/style.css"
import { client } from '@/sanity/lib/client';
import { type SanityDocument } from "next-sanity";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function ProductCard({ count }: {count : number}) { 
    const PRODUCT_QUERY = `
        *[_type == 'product' && defined(slug.current)][0..${count}] {
            _id,
            name,
            slug,
            price,
            "image_url": image.asset -> url
        }`
    
    async function fetchProducts() {
        const result = await client.fetch<SanityDocument[]>(PRODUCT_QUERY);
        return result;
        }
    const [products, setProducts] = useState<SanityDocument[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchProducts();
            setProducts(result);
        };
        fetchData();
    }, []);
    


    return ( 
        <><div id="productlist">
            {products?.map((product) => (
                <div key={product._id}>
                    <Link href={`/products/${product.slug.current}`} style={{ textDecoration: 'none' }}>
                        <div className="product-style">
                            <Image
                                src={product.image_url}
                                alt="Image"
                                width={305}
                                height={375}
                                className=""
                                priority
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/305x375";
                                } } />
                            <div id="product-desc">
                                <div id="product-name">{product.name}</div>
                                <div id="product-price">£{product.price}</div>
                            </div>
                        </div>
                    </Link>
                </div>
        ))}
        </div>
    </>
    )
} 

export default function Product({ count }: {count : number}) { 

    const [increase, setIncrease] = useState(0);

  const handleIncrease = () => {
    setIncrease((prev) => prev + 4);
    if (increase < 12) {
        popup
        }
        else alert("Max number of Posts Reached");
  };
    const popup = () => {
        alert("loading");
    };

    return(
        <div style={{display:"flex", flexDirection:"column", gap:"20px", justifyContent:"center"}}>
            <ProductCard count={count+increase} />
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <Link href="/products" style={{ textDecoration: "none" }}>
                  <button className="content-button" style={{background:"#F9F9F9", color:""}} onClick={handleIncrease}>View Collection</button>
                </Link>
            </div>
        </div>
    ) 
}
