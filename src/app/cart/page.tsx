/* eslint-disable @next/next/no-img-element */
import { Footer, Header } from "../components/nav";

export default function CartPage() {
    return (
        <div >
                <Header />
            <div style={{background:"#F9F9F9"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"5vw 10vw", background:"#F9F9F9"}}>
                    <div style={{display:"flex", flexDirection:"column", flex:"1"}}>
                        <div style={{fontSize:"36px"}}>Your shopping cart</div>
                        <div style={{width:"100%"}}>
                            <div style={{display:"flex", margin:"30px 0 20px", borderBottom:"1px solid #F9F9F9"}}>
                                <div style={{flex:"1"}}>Product</div>
                                <div style={{flex:"1"}}>Quantity</div>
                                <div style={{flex:"1"}}>Total</div>
                            </div>
                            <div style={{display:"flex", flex:"1"}}>
                                <div style={{ display:"flex", flex:"1", gap:"10px"}}>
                                    <img style={{width:"109px", height:"134px"}} src="https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__" alt="" />
                                    <div style={{display:"flex", flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"start", width:"40%" }}>
                                        <div>Graystone vase</div>
                                        <div>A timeless ceramic vase with a tri color grey glaze.</div>
                                        <div>£85</div>
                                    </div>
                                </div>
                                
                                <div style={{ flex:"1"}}>
                                    <div style={{flex:"1"}}>1</div>
                                </div>
                                <div style={{flex:"1"}}>£85</div>
                            </div>
                            <div style={{display:"flex", flex:"1", }}>
                                <div style={{display:"flex", gap:"10px", flex:"1"}}>
                                    <img style={{width:"109px", height:"134px"}} src="https://s3-alpha-sig.figma.com/img/ba4f/4473/e71e7542b61ce7099f02357e30719cd7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8YqLbOOwiv2hCu-eBU~zm8XXPLfF1dkMP6PZPMvgnMZG9KfX-Avb2s2o4O0D6eGBfcOARtzq3KUaRMPoZXjMYnuu110XoHl07JDoaVHP8YXMUYkuHESNbiJsthsFm5BWbCAInsE1jvMRj2MAyHvfCW7K-giUVGKw1A7RfqmPooBTX~c~7LQ8T-mTc5lx-ltTddEnW0oGmoPIOpAt3S8OCWXsiFmsYHiG~EOM2U~EtDlLX76llTqo6DWp7PUqg6vs1Y26km4xlZFkdIUKlsZcWjadBzmkj2mbMgRludr27vFRxN2IfIavsq78eUJzQs8hRRIigc~GVK1qrGaG8ddDw__" alt="" />
                                    <div style={{display:"flex", flexDirection:"column", gap:"10px", justifyContent:"center", alignItems:"start", width:"40%" }}>
                                        <div>Basic white vase</div>
                                        <div>Beautiful and simple this is one for the classics</div>
                                        <div>£85</div>
                                    </div>
                                </div>
                                    <div style={{flex:"1"}}>1</div>
                                <div style={{flex:"1"}}>£85</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}