// src/app/products/[product]/page.tsx

import { Metadata } from 'next';
import { ProductPage } from '../../components/productpage';
import { productDesc } from '@/app/components/productcard';

export async function generateStaticParams() {
    const paths = productDesc.map((product) => ({
        product: product.name.toLowerCase().replace(/\s+/g, '-'),
    }));
    return paths;
}

export const metadata: Metadata = {
    title: 'Product Page',
    description: 'Dynamic product description page',
};

export default ProductPage;
