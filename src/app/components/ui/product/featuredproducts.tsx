import { client } from "@/sanity/lib/client";
import "@/app/styles/style.css"
import '@/app/styles/globals.css'
import ProductCard from "./productcard"

export default async function FeaturedProduct( ) {

    const QUERY = `
    *[_type == "product" ][0..3] {
        ...,
        "image_url": image.asset->url,
    }
  `
    const products = await client.fetch(QUERY);
    const randomProducts = products.sort(() => Math.random() - 0.5);
    return( 
        <div>
            <div className="products">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10" >
                    {randomProducts.map((product:any) => ( 
                        <div key={product._id}>
                            <ProductCard product={product} /> 
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
