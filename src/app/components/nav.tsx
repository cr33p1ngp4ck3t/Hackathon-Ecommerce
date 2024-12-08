"use client"

import Link from "next/link";
import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
export function Header() {
    return (
        <div className="header-container">
            <div className="header-container-1">
                <img src="/search.png" alt="" />
                <Link href={'/'} style={{textDecoration:"none"}}><div id="heading">Avion</div></Link>
                <div>
                    <img src="/shopcart.png" alt="" />
                    <img src="/user.png" alt="" />
                </div>
            </div>  
            <div style={{borderBottom:"1px solid lightgray", width:"100%"}}></div>
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
    )
}

export function Footer () {
    return (
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
                            <div>About us</div>
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
    )
}


export function HeaderProduct() {

    const [show, setShow] = useState(true);
    const Close = () => {
        setShow(false);
    }
    return (
        <div>
                {
                    show && (
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#2A254B", height:"40px"}}>
                        <div style={{display:"flex", color:"white", alignItems:"center", gap:"10px", flex:"2", justifyContent:"flex-end"}}>
                            <img src="/Deliveryx1.png" alt="" style={{filter:""}}/>
                            <div style={{fontSize:"14px", color:"white"}}>Free delivery on all orders over £50 with code easter checkout</div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end", flex:'1', cursor:"pointer"}}><img src="/Close.png" alt="" onClick={Close}/></div>
                    </div>
                    )
                }
            <div className="header-container-product">
                <Link href={'/'} style={{textDecoration:"none"}}><div id="heading">Avion</div></Link>
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
                <div style={{display:"flex", gap:"10px"}}>
                    <img src="/search.png" alt="" />
                    <img src="/shopcart.png" alt="" />
                    <img src="/user.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default function FooterProduct() {
    return( 
        <div>
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
                                <div>About us</div>
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
        </div>
    )
}