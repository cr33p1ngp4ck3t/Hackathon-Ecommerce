
export const metadata = {
    title: 'Product Page',
    description: 'Dynamic product description page',
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
