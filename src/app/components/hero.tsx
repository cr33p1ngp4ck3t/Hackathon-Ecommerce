"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import "../style/style.css";

const image = "https://s3-alpha-sig.figma.com/img/b062/f355/fa9b27255272d76e665cce4314b4aedb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DixWWrqsemtj3S8EoYUwoBDz6ewq6Q0wLdFNqKYZzrQ96nO4PM7p7h87oPMUCBe~arheyKeEZeO0uY9DIFxBcaibJ0IVldW49BZXQLR-1hUdaRKfUrDRmJCc~czCh3Mm8NWD4OieerNtXf75BsB3nsveXCt3KNuu~J1Oy1ydG-9lyYmufZXkhY0unxv0nBkkM7S5g4EpbRJmdY3nIBuW1v3aMA6uI467cvwvTXtKp1m0ZfRs6j--c4U8oMcgnhUgTAwfBQP2fSqmIpfmus9iotvC43YFCbXcRHjjWl4-~VuKQ6-j0GqdB~N41WcAV7ftMMrpKB9dNBSmiDzVOeRA8w__";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={isMobile ? "s-hero-mobile" : "s-hero"}>
            <div id="container" className={isMobile ? "container-mobile" : "container"}>
                <div className={isMobile ? "content-wrapper-mobile" : "content-wrapper"} style={{margin:'10%'}}>
                    <div id="content" className={isMobile ? "content-mobile" : "content"}>
                        <h1>Luxury homeware for people who love timeless design quality</h1>
                        <p>Shop the new Spring 2022 collection today</p>
                    </div>
                </div>
                <div className={isMobile ? "button-wrapper-mobile" : "button-wrapper"} style={{alignSelf:"start", margin:"10%"}}>
                    <Link href="/products" style={{flex:'1'}}><button id="content-button" className={isMobile ? "content-button-mobile" : "content-button"}>View Collection</button></Link>
                </div>
            </div>
            <img src={image} alt="Hero Image" />
        </div>
    );
}
