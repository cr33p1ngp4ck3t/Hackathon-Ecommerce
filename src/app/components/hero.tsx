/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const image ="https://s3-alpha-sig.figma.com/img/b062/f355/fa9b27255272d76e665cce4314b4aedb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DixWWrqsemtj3S8EoYUwoBDz6ewq6Q0wLdFNqKYZzrQ96nO4PM7p7h87oPMUCBe~arheyKeEZeO0uY9DIFxBcaibJ0IVldW49BZXQLR-1hUdaRKfUrDRmJCc~czCh3Mm8NWD4OieerNtXf75BsB3nsveXCt3KNuu~J1Oy1ydG-9lyYmufZXkhY0unxv0nBkkM7S5g4EpbRJmdY3nIBuW1v3aMA6uI467cvwvTXtKp1m0ZfRs6j--c4U8oMcgnhUgTAwfBQP2fSqmIpfmus9iotvC43YFCbXcRHjjWl4-~VuKQ6-j0GqdB~N41WcAV7ftMMrpKB9dNBSmiDzVOeRA8w__"

export default function Hero() {
    return( 
        <div className="s-hero">
                <img src={image} alt="" />
                <div id="container">
                    <div style={{margin:'10%'}}>
                        <div id="content">
                            <h1>Luxury homeware for people who love timeless design quality</h1>
                            <p>Shop the new Spring 2022 collection today</p>
                        </div>
                    </div>
                        <div style={{alignSelf:"start", margin:"10%"}}>
                            <Link href="/products" style={{flex:'1'}}><button id="content-button">View Collection</button></Link>
                        </div>
                </div>
            </div>
    )
}