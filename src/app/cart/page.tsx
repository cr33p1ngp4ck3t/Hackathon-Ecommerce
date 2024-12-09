/* eslint-disable @next/next/no-img-element */
import { Footer, Header } from "../components/nav";
import "../style/shop-cart.css";
import "../style/style.css"

export default function CartPage() {
    return (
        <div>
            <Header />
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-content">
                        <div className="cart-title">Your shopping cart</div>
                        <div className="cart-items">
                            <div className="cart-header">
                                <div className="cart-header-item">Product</div>
                                <div className="cart-header-item">Quantity</div>
                                <div className="cart-header-item">Total</div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-item-details">
                                    <img className="cart-item-image" src="https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__" alt="Graystone vase" />
                                    <div className="cart-item-info">
                                        <div className="item-name">Graystone vase</div>
                                        <div className="item-description">A timeless ceramic vase with a tri color grey glaze.</div>
                                        <div className="item-price">£85</div>
                                    </div>
                                </div>
                                <div className="cart-item-quantity">1</div>
                                <div className="cart-item-total">£85</div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-item-details">
                                    <img className="cart-item-image" src="https://s3-alpha-sig.figma.com/img/ba4f/4473/e71e7542b61ce7099f02357e30719cd7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8YqLbOOwiv2hCu-eBU~zm8XXPLfF1dkMP6PZPMvgnMZG9KfX-Avb2s2o4O0D6eGBfcOARtzq3KUaRMPoZXjMYnuu110XoHl07JDoaVHP8YXMUYkuHESNbiJsthsFm5BWbCAInsE1jvMRj2MAyHvfCW7K-giUVGKw1A7RfqmPooBTX~c~7LQ8T-mTc5lx-ltTddEnW0oGmoPIOpAt3S8OCWXsiFmsYHiG~EOM2U~EtDlLX76llTqo6DWp7PUqg6vs1Y26km4xlZFkdIUKlsZcWjadBzmkj2mbMgRludr27vFRxN2IfIavsq78eUJzQs8hRRIigc~GVK1qrGaG8ddDw__" alt="Basic white vase" />
                                    <div className="cart-item-info">
                                        <div className="item-name">Basic white vase</div>
                                        <div className="item-description">Beautiful and simple, this is one for the classics</div>
                                        <div className="item-price">£85</div>
                                    </div>
                                </div>
                                <div className="cart-item-quantity">1</div>
                                <div className="cart-item-total">£85</div>
                            </div>
                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end", borderTop:"1px solid lightgray", margin:"10px 0"}}>
                            <div style={{margin:"10px 0", display:"flex", flexDirection:"column", gap:"10px", alignItems:"flex-end"}}>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"flex-end", gap:"20px"}}>
                                    <div style={{fontSize:"20px", display:"inline", gap:"10px", color:"#4E4D93"}}>Subtotal</div><span style={{fontSize:"24px"}}>£170</span>
                                </div>
                                <div style={{color:"#4E4D93", fontSize:"14px"}}>Taxes and shipping are calculated at checkout</div>
                                <button id="input-checkout">Go To Checkout</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}
