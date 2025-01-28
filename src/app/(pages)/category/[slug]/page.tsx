/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer, Header } from "@/app/components/ui/misc/nav"
import Link from "next/link";
import "../../../styles/globals.css"
import { client } from "@/sanity/lib/client";
import CategoryCard from "./card";
import { groq } from "next-sanity";

interface PageProps {
  params: Promise<{
    slug: string;
  }>
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
        try {
            const products = await client.fetch(CAT_Q, { slug });
            return products;
          } catch (error) {
            console.error("Failed to fetch products:", error);
            return [];
          }
      }

export default async function Category({ params}: PageProps) {
  const { slug } = await params;
    return (
        <CategoryContent slug={slug} />
    );
}

async function CategoryContent({ slug }: { slug: string }) {
    const products = await getPosts(slug);

    if (!products || products.length === 0) {
        return (
            <div>
                <Header />
                <div className="text-center mt-10">
                    <h1>No products found for the category {slug}.</h1>
                </div>
                <Footer />
            </div>
        );
    }
    const len = products.length;

    return (
        <div>
            <Header />
            <div>
                <div>
                    <div className='flex h-[200px] mb-8 ' style={{ background: "url('/product-hero.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="flex text-white items-end m-[50px] text-4xl   ">Products in {slug}</div>
                    </div>
                </div>
            </div>
            {
              len && (
                <div className={`flex justify-center items-center mx-auto max-w-[1444px]  `}>
                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 ">

                    {products.map((product: any) => (
                      <CategoryCard products={product} key={product._id}  />
                    ))
                  }
                  </div>
              </div>
              )
            }
            <div className="flex justify-center mt-10">
                <Link href="/products">
                    <button className="bg-[#F9F9F9] text-black px-5 py-7 rounded-md">See all products</button>
                </Link>
            </div>
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
}