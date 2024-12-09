"use client";
import { useState, useEffect } from "react";
import { Footer, Header } from "../components/nav";
import Product from "../components/productcard";
import '../style/products-page.css';

export default function ProductPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Header />
            <div>
                <div className="products-page">
                    <div>All Products</div>
                </div>
                {!isMobile ? (
                    <div className="filter-container">
                        <div className="filter-content">
                            <div className="filter-content-1">
                                <select>
                                    <option value="">Category</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                                <select>
                                    <option value="">Product Type</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                                <select>
                                    <option value="">Price</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                                <select>
                                    <option value="">Brand</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="filter-content-2">
                                <div>Sorting by</div>
                                <select>
                                    <option value="">Date Added</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="filter-container-mobile">
                        <div className="filter-content">
                            <select>
                                <option value="">Filters</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <select>
                                <option value="">Sorting</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>
                )}
                <br />
                <br />
                <br />
                <div>
                    <Product />
                </div>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    );
}
