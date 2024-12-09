"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
export function Header() {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);
    return (
        <div>
                <div className="header-container">
                    <div className="header-container-1">
                        <Link href={'/'} style={{textDecoration:"none"}}><div id="heading">Avion</div></Link>
            {
                !isMobile ? (
                    <><div style={{ borderBottom: "1px solid lightgray", width: "100%" }}></div><div className="header-container-2">
                            <div className="header-container-items">
                                <div>Plant Pots</div>
                                <div>Ceramics</div>
                                <div>Tables</div>
                                <div>Chairs</div>
                                <div>Crockery</div>
                                <div>Tableware</div>
                                <div>Cutlery</div>
                            </div>
                        </div></>
                ) :
                (
                    <div className="hamburger-menu">
                        <div className="hamburger-icon">
                <img src="/search.png" alt="" />

                            <img src="/menu.png" alt="Menu" />
                        </div>
                    </div>
                )
            }
            </div>  
            </div>
        </div>
    )
}

export function Footer () {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return (
        <div>
            {
                !isMobile ? (

            <div style={{ background:"rgba(42, 37, 75, 1)"}} className="footer">
                <div style={{padding:"50px 70px 0",}} className="footer-container">
                    <div className="footer-content">
                        <div id="footer-content-1">
                            <div>
                                <div id="h">Menu</div>
                                <div id="h">Categories</div>
                                <div id="h">Our Company</div>
                                <div style={{fontSize:"16px", flex:"2"}}>Join our mailing list</div>
                            </div>
                        <div id="footer-content-2">
                            <div className="x">
                                <div>New arrivals</div>
                                <div>Best sellers</div>
                                <div>Recently viewed</div>
                                <div>Popular this week</div>
                                <div>all product</div>
                            </div>
                            <div className="x">
                                <div>Crockery</div>
                                <div>furniture</div>
                                <div>Homeware</div>
                                <div>Plant pot</div>
                                <div>Chair</div>
                                <div>Crockery</div>

                            </div>
                            <div className="x">
                            <Link href={'/about'}><div>About us</div></Link>
                            <div>contact us</div>
                                <div>vacancies</div>
                                <div>Privacy</div>
                                <div>return policy</div>
                            </div>
                            <div className="x">
                                <input type="text" id="input-field" placeholder="your@email.com"/>
                                <input type="submit" id="input-submit" value={"Sign up"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div style={{fontSize:"14px", alignContent:"center"}}>Copyright 2022 Avion LTD</div>
                        <div>
                            <div style={{width:"40%", display:'flex', gap:"20px", cursor:"pointer"}}>
                                <img src="/Logo-linkedin.png" alt="" />
                                <img src="/Logo-facebook.png" alt="" />
                                <img src="/Logo-instagram.png" alt="" />
                                <img src="/Logo-skype.png" alt="" />
                                <img src="/Logo-twitter.png" alt="" />
                                <img src="/Logo-pinterest.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
                ) : (
                    <div style={{background:"#2A254B", height:"100%", width:"100%", color:"white"}}>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", textTransform:"capitalize", margin:"0 20px 20px", paddingTop:"30px"}}>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"10px 0 ", color:"white"}}>Category</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Crockery</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>furniture</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Homeware</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Plant pot</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Chair</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Crockery</div>
                            </div>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"10px 0",color:"white"}}>Menu</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New arrivals</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Best sellers</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Recently viewed</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Popular this week</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>all product</div>
                           </div>
                            <div>
                                <div style={{fontSize:"16px", color:"white", padding:"10px 0"}} >Our Company</div>
                                <Link href={'/about'}><div style={{fontSize:"14px", color:"white", padding:"10px 0"}}>About us</div></Link>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>contact us</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>vacancies</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>Privacy</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>return policy</div>
                            </div>
                        </div>
                        <div>
                        <div className="x" style={{ display:'flex', margin:"0 20px"}}>
                            <input type="text" id="input-field" style={{height:"56px", background:"#FFFFFF26", width:"100%", maxWidth:"254px",  border:"none"}} placeholder="your@email.com"/>
                            <input type="submit" id="input-submit" style={{height:"56px",  border:"none", width:"120px"}} value={"Sign up"}/>
                        </div>
                        </div>
                        <div style={{padding:"20px 20px 0", textAlign:'center'}}>
                            <div style={{fontSize:"14px", alignContent:"center",color:"white", padding:"20px 0", borderTop:"1px solid #4E4D93"}}>Copyright 2022 Avion LTD</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export function HeaderProduct() {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);
    const Close = () => {
        setShow(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return (
        <div>
            {show && (
                <div className="promo-bar">
                    <div className="promo-content">
                        <img src="/Deliveryx1.png" alt="Delivery" className="promo-image"/>
                        <div className="promo-text">Free delivery on all orders over £50 with code easter checkout</div>
                    </div>
                    <div className="close-icon" onClick={Close}>
                        <img src="/Close.png" alt="Close" />
                    </div>
                </div>
            )}
            <div className="header-container-product">
                <Link href={'/'} style={{ textDecoration:'none' }}><div id="heading">Avion</div></Link>

                {!isMobile ? (
                    <>
                        <div className="header-container-1">
                            <div className="header-container-items">
                                <div>Plant Pots</div>
                                <div>Ceramics</div>
                                <div>Tables</div>
                                <div>Chairs</div>
                                <div>Crockery</div>
                                <div>Tableware</div>
                                <div>Cutlery</div>
                            </div>
                        </div>
                        <div className="header-icons">
                            <img src="/search.png" alt="Search" />
                            <Link href={'/cart'}><img src="/shopcart.png" alt="Cart" /></Link>
                            <img src="/user.png" alt="User" />
                        </div>
                    </>
                ) : 
                (
                    <div className="hamburger-menu">
                        <div className="hamburger-icon">
                            <img src="/search.png" alt="Search" />
                            <img src="/menu.png" alt="Menu" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



export function FooterProduct() {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return( 
        <div>
            {
                !isMobile ?
                (
                    
                <div className="product-footer">
                    <div className="product-footer-container">
                        <div>
                            <Link href={'/'} style={{textDecoration:"none"}}><div id="h">Avion</div></Link>
                            <div id="t">
                                <div>21 New York Street</div>
                                <div>New York City</div>
                                <div>United States of America</div>
                                <div>432 34</div>
                            </div>
                        </div>
                        <div style={{flex:'1', marginLeft:"50px"}}>
                            <div className="product-footer-header">
                                <div id="h">Social Links</div>
                                <div id="h">Menu</div>
                                <div id="h">Categories</div>
                                <div id="h">Our Company</div>
                            </div>
                            <div className="product-footer-text">
                                <div id="t">
                                    <div style={{width:"40%", display:'flex', gap:"30px", cursor:"pointer"}}>
                                        <img src="/Logo-linkedin.png" alt="" />
                                        <img src="/Logo-facebook.png" alt="" />
                                        <img src="/Logo-instagram.png" alt="" />
                                        <img src="/Logo-skype.png" alt="" />
                                        <img src="/Logo-twitter.png" alt="" />
                                        <img src="/Logo-pinterest.png" alt="" />
                                    </div>
                                </div>
                                <div id="t">
                                    <div>New arrivals</div>
                                    <div>Best sellers</div>
                                    <div>Recently viewed</div>
                                    <div>Popular this week</div>
                                    <div>all product</div>
                                </div>
                                <div id="t">
                                    <div>Crockery</div>
                                    <div>furniture</div>
                                    <div>Homeware</div>
                                    <div>Plant pot</div>
                                    <div>Chair</div>
                                    <div>Crockery</div>
                                </div>
                                <div id="t">
                                <Link href={'/about'}><div>About us</div></Link>
                                <div>contact us</div>
                                    <div>vacancies</div>
                                    <div>Privacy</div>
                                    <div>return policy</div>
                                </div>
                            </div>
                    <br /> 
                    <br /> 
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div style={{fontSize:"14px", alignContent:"center"}}>Copyright 2022 Avion LTD</div>
                    </div>
                </div>
                ) : (
                    <div style={{background:"#2A254B", height:"100%", width:"100%", color:"white"}}>
                        <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", textTransform:"capitalize", margin:"0 20px 20px", paddingTop:"30px"}}>
                            <div>
                                <Link href={'/'} style={{textDecoration:"none"}}><div style={{fontSize:"36px", color:"white", padding:"5px"}}>Avion</div></Link>
                                <div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>21 New York Street</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New York City</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>United States of America</div>
                                    <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>432 34</div>
                                </div>
                            </div>
                            <div style={{padding:"10px 0"}}>
                                <div style={{fontSize:"16px", padding:"15px 0 ", color:"white"}}>Social Links</div>
                                <div style={{width:"40%", display:'grid', gridTemplateColumns:"repeat(3, 1fr)", gap:"30px", cursor:"pointer"}}>
                                    <img src="/Logo-linkedin.png" alt="" />
                                    <img src="/Logo-facebook.png" alt="" />
                                    <img src="/Logo-instagram.png" alt="" />
                                    <img src="/Logo-skype.png" alt="" />
                                    <img src="/Logo-twitter.png" alt="" />
                                    <img src="/Logo-pinterest.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div style={{fontSize:"16px", padding:"10px 0",color:"white"}}>Menu</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>New arrivals</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Best sellers</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Recently viewed</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>Popular this week</div>
                                <div style={{fontSize:"14px", padding:"10px 0",fontFamily:"Satoshi, sans-serif", color:"white"}}>all product</div>
                           </div>
                            <div>
                                <div style={{fontSize:"16px", color:"white", padding:"10px 0"}} >Our Company</div>
                                <Link href={'/about'}><div style={{fontSize:"14px", color:"white", padding:"10px 0"}}>About us</div></Link>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>contact us</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>vacancies</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>Privacy</div>
                                <div style={{fontSize:"14px", fontFamily:"Satoshi, sans-serif", color:"white", padding:"10px 0"}}>return policy</div>
                            </div>
                        </div>
                        <div style={{padding:"20px 20px 0"}}>
                            <div style={{fontSize:"14px", alignContent:"center", color:"white", padding:"20px 0", borderTop:"1px solid #4E4D93"}}>Copyright 2022 Avion LTD</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export function AboutHeader() {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);
    const Close = () => {
        setShow(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    return(
            <div>
                <div>
                    <div>
                    {show && (
                        <div className="promo-bar">
                            <div className="promo-content">
                                <img src="/Deliveryx1.png" alt="Delivery" className="promo-image"/>
                                <div className="promo-text">Free delivery on all orders over £50 with code easter checkout</div>
                            </div>
                            <div className="close-icon" onClick={Close}>
                                <img src="/Close.png" alt="Close" />
                            </div>
                        </div>
                    )}
                    <div className="header-container-about">
                        <div className="header-container-1">
                            <Link href={'/'} style={{ textDecoration:'none' }}><div id="heading">Avion</div></Link>
                            {
                                !isMobile ? (
                                    <>
                                    <div>


                                        <div className="header-icons-about">
                                            <div id="about-links">
                                                <Link href={'/about'}><div>About us</div></Link>
                                                <div>Contact</div>
                                                <div>Blog</div>
                                            </div>
                                            <img src="/search.png" alt="Search" />
                                            <Link href={'/cart'}><img src="/shopcart.png" alt="Cart" /></Link>
                                            <img src="/user.png" alt="User" />
                                        </div>
                                        <div className="header-container-2">
                                            <div className="header-container-items">
                                                <div>Plant Pots</div>
                                                <div>Ceramics</div>
                                                <div>Tables</div>
                                                <div>Chairs</div>
                                                <div>Crockery</div>
                                                <div>Tableware</div>
                                                <div>Cutlery</div>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                ) : (
                                    
                                    <div className="hamburger-menu">
                                        <div className="hamburger-icon">
                                            <img src="/menu.png" alt="Menu" />
                                        </div>
                                    </div>
                                    
                                )
                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}