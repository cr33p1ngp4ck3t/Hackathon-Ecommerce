"use client"
import Link from 'next/link';
import "@/app/styles/style.css"
import { type SanityDocument } from "next-sanity";
import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ product }: { product: SanityDocument }) {
    const [loader, setLoader] = useState(false)

    const handleLoader = () => {
        setLoader(true)
    }
    return ( 
        <> {
                loader && 
                <div className='flex justify-center items-center  bg-[#ffffff71] backdrop-blur-sm w-screen h-screen fixed z-40 top-0 left-0'>
                    <Image src={'/ring-loader.svg'} alt='' width={80} height={80} className=' z-40 ' loading="lazy" />
                </div>
            }
        <div className='flex justify-center items-center'>
            <div>           
                <Link href={`/products/${product.slug.current}`} style={{ textDecoration: 'none' }} onClick={handleLoader}>
                    <div className="product-style">
                        <Image
                            src={product.image_url}
                            alt="Image"
                            width={305}
                            height={375}
                            className='object-center object-cover bg-no-repeat h-[375px] min-w-[305px] max-w-[305px] w-auto '
                            loading='lazy'
                            />
                        <div id="product-desc">
                            <div id="product-name">{product.name}</div>
                            <div id="product-price">£{product.price}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
} 
