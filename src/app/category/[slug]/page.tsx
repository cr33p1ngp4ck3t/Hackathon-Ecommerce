/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer, Header } from "@/app/components/ui/misc/nav"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import "../../styles/globals.css"

export default async function Category({ params }: PageProps ) {
    
    return ( 
        <div>
            <Header />
            <div>
                <div>
                    <div className='flex h-[200px] mb-8 ' style={{ background: "url('/product-hero.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="flex text-white items-end m-[50px] text-4xl   ">Products in {(await params).slug}</div>
                    </div>
                </div>
            </div>
            <ProductCard params={params} />
            <div className="flex justify-center mt-10">
                <Link href="/products">
                    <button className="bg-[#F9F9F9] text-black px-5 py-7 rounded-md">See all products</button>
                </Link>
            </div>
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    )
}

async function getPosts(slug: string) {
    const CAT_Q = groq`
      *[_type == "product" && category->slug.current == $slug] {
        _id,
        name,
        price,
        slug,
        "image_url": image.asset->url
      }
    `;
    const products = await client.fetch(CAT_Q, { slug });
    return products;
  }
  
  interface PageProps {
    params: Promise<{
      slug: string;
    }>;
  }

  export async function ProductCard({ params }: PageProps) { 
    const { slug } = await params;
    const products = await getPosts(slug);
       
    return ( 
        <><div id="productlist">
            {
                products.map((products: any) => (
                    <div key={products._id}>
                        <Link href={`/products/${products.slug.current}`} style={{ textDecoration: 'none' }}>
                            <div className="product-style">
                                <Image
                                    src={products.image_url}
                                    alt="Image"
                                    width={305}
                                    height={375}
                                    className='object-center object-cover bg-no-repeat'
                                    priority
                                />
                                <div id="product-desc">
                                    <div id="product-name">{products.name}</div>
                                    <div id="product-price">£{products.price}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
    )
} 