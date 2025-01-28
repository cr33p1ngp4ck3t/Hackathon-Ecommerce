"use client"
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../../styles/style.css'
  
export default function CategoryCard ({products}: {products: SanityDocument} ) {
    const [loader, setLoader] = useState(false)

    const handleLoader = () => {
        setLoader(true)
    }

    return (
        <>
        {
            loader && 
            <div className='flex justify-center items-center  bg-[#ffffff71] backdrop-blur-sm w-screen h-screen fixed z-40 top-0 left-0'>
                <Image src={'/ring-loader.svg'} alt='' width={80} height={80} className=' z-40 ' loading="lazy"/>
            </div>
        }
        <Link href={`/products/${products.slug.current}`} style={{ textDecoration: 'none' }} onClick={handleLoader} className="max-w-[305px] h-[457px] " key={products._id} >
            <div className="">
                <Image
                    src={products.image_url}
                    alt="Image"
                    width={305}
                    height={375}
                    className='object-center object-cover bg-no-repeat max-h-[375px] min-h-[375px] '
                    loading="lazy"
                />
                <div className="flex flex-col gap-3 pt-3 ">
                    <div id="product-name">{products.name}</div>
                    <div id="product-price">£{products.price}</div>
                </div>
            </div>
        </Link>
        </>
    )
}