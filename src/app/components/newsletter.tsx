/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"
/* eslint-disable @next/next/no-img-element */
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
export default function Newsletter () {
    const pathname = usePathname()
    const isPage = pathname === '/'
    const [show, setShow] = useState(false); 
    useEffect(() => { 
        setShow(isPage) 
    }, [isPage])
    return (
        <>
        <div style={{display:"flex", marginTop:""}}>
            <div className={ isPage ? "newsletter-container" : "newsletter-container-1" }>
                <div id="newsletter-content">
                    <div id="h">Join the club and get the benefits</div>
                    <div id="t">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</div>
                    {
                        show && (
                            <div id="c">
                                <div id="">
                                    <img src="/checkmark-filled.png" alt="" />
                                    <div>Exclusive offers</div>
                                </div>
                                <div id=""><img src="/checkmark-filled.png" alt="" /><div>Free events</div></div>
                                <div id=""><img src="/checkmark-filled.png" alt="" /><div>Large discounts</div></div>
                            </div>
                        )
                    }
                    <div><input type="text" id="input-field" placeholder="your@email.com"/><input type="submit" id="input-submit" value={"Sign up"}/></div>
                </div>
            </div>
            </div>
        </>
    )
}