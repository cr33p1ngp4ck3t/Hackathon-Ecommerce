/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import "../style/style.css"

type Product = {
    src: string;
    name: string;
    price: string;
};

export const productDesc: Product[] = [
    {
        src: 'https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0JIVdmQompVglHCoo3zf7cZDQgyaBMkljN7xWoh89e5IgxGAO5cIuvCFR08zlioiz8N04SkvA9NoVwkJ3yM~ZmOP3tyVBbkC0nlCfVPrxfavgEOAl1AtYVJ1bSMbrfR1ZV-Jd-DlnG9l5B7HUoXL9IqnVlJ7vGn70WjtZA9VPFlAmP7x5wzWZYSsJxTZmejJ3JDyzo5Sf9mvXDowO2CQHtBkJRrLpNdUQ81H4O1Tnq69Ux9U0SBGrWBk1kSjuSOFhB431tsEYMCse7~uouC2HYqli3CmGN0pgoKTl3bgwc~y0ZKSldSop-DSkRKbwKpUG0aRgDwV5R7AyHU7tFdrQ__',
        name: 'The Dandy Chair',
        price: '250',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOPS9qB-gWJFcpw3Z1Z-JtIqD1cd6j9yWUo1BAkoIz6sy5xjN6myFYaivh1MOOFyAVDn7914iVDF-wKTSKHBum2CKxwskXMJu~0ApkrIxuxnHaRESXKB2AKRXHODErXSPglyg9DNNsI9tvLE32MrGs55O2eWkj7kFAn~i6PwnCpZ2XTBIRmdTVFm~mlpqDLSims3ERwYQH50KxEzoUPyHyPH7G-FkC9Aue8KdYXP1mz0LMbyiaUc4XS88UMoX33gnI75GsJDOUkh6YX01IJVuh15P6DUq3mwPhN6gPSttZQZDr~vdsvy3-QQolI1S0DyxjqR0t34Cx0cHQDaKM1NjA__',
        name: 'Rustic Vase Set',
        price: '155',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__',
        name: 'The Silky Vase',
        price: '125',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfB9GzO2TovlEDG7wqyHIqOCEWizkroEPUFLt9wZZpnPTreM-s4vr~HCxS1yd7lRkxPsFH6IvoyoE-0Jntg7j1uXDHmbcJr1VdU1lEuM1NGRLigvZLThCisrP-FuIeSljKlil6Xyb~DqWf2hF12hchvkgInysG7C900vGxpUB4QJpRh93JA2-7k3xmSijfqzk1zIND~WAyAwTy2f5PUoLNRlpvwiN765E2bySTQZuVIpi7teA3~jYMWiUT2utItXG1eyZKYSQmzsK56Bvc5kbDqFLBMQUC2ApNAUeqGeF~mGwpYpnfgkzZtkIlTyVW~GG6-nomn-zz9xpleNa~CSUQ__',
        name: 'The Lucy Lamp',
        price: '399',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/018e/4cdd/6d3e79ab88d1c98f50ebfdfa751b9fc4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Og-mgAmwD2LRMGXW-3nrWLUVoOOyV3qfwaE9YsZv4W01o5u5vKbCTwJNeCQT5zsfPxwrLsZKJs~r74fIiCWi9jNRvpusaJ--asacI6Gc3ndTaExlwa3rhEPgp2dot0pYiy5TKMHTiVYxWA4~zFFZ7xJhdfhcO2ddqsXHXnMmNTnkwEvgyVjYWBUHpAd3xnUOMrJdzxQYJl88clL1KAR5Y9Dec9FGrXxr3leIudxjDnAVTnvbanxqPmAeDa0y8Bvn1fvTE4ORrUs2GwfAjT6oc7NfdZuUw0FErWpFZqgpwBHdpj9Xa~z1ca2NFVw0ll2sprjYsOeiGxm5WDbnqxdLRQ__',
        name: 'The Dandy Chair',
        price: '250',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/dc52/68d4/231f7eb9a05113b5d3b4e1d2d85066e1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CO3bornsIPvLImxJYM7dIOFqeZ38B3DuRRwhV~d7S87BbVVqhxwKCnK1cosTxJicQRseOWvmohPMBxoskGlA6pbNDChMnDY-oCgi7YfMCCypsMV8b7APZ0VP-6H33LCHnY0HC-dz3bKi7q-2Q5f~i54mVkHhM2D~hzdcabrbMlpQ4Zgeq6vNjlDFvccCn5bptYWf6oifdqONNmln4uxdcR2wEa-v8IxCX8r1xVF9uFAI6p7SmxokcMABdYlko3tCkNf51YJsbQq5FwaUGacFP-K9elttQOEu7W8ni-ywjLZPNhHxZCIqA6tiTbVxrp-OrsVYYJs6dIIQocq2vizcdg__',
        name: 'Rustic Vase Set',
        price: '155',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/d77e/f5f1/bb95242ccb90c53366119f4072df51bf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1k0dsba0cja36HJn65JR1hbtndapWuAlaJdr2brEv7yjcCYRDB4gH9gOICauJmnKVtN2qWlLfD1XkAodp37e97cnSZfP3N4dUpI0V0XGP-UiMp4MgL-3rACKGxnR4ttJJP8-twfpHhCdU1DoYnMB4oR5tlSktDQyiGkUQ0pl4aWkIJzcsWk91FeIkhMdQzOJhrpK9QTIht70BqSfhohhdHNF2215xgWj4qkcvzh0rtOFH8kQxnQK8U3-jfAm107pk2d4REqGsn8awhDduiKqPMnJi5xmLMgbjXPuwfkStdrZP3-GWz7EKR3OjVol3Ob~~WGep-7Azx07f2IrKyiXw__',
        name: 'The Silky Vase',
        price: '125',
    },
    {
        src:'https://s3-alpha-sig.figma.com/img/8d2d/f318/e1e2a6257a864ebdcfa65243fef17a60?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL24Gxxklk8zHdorbFt-ImHZDUFsidQoPZJVk~APee-wHAvYIs7YyOCBNj2jKGhCAz3s4bODX0oaFiJL8KzrANkXqmZiDN-xA6z6AUQogkjmcWWdkYkkcQ0kLV4JCtkP7I8gnOIpS6hj3gBOXPo9Tzy8-vCF4Nv7PY1t5qTVGu40wYRvOQxfui65cQAJZAksWg51tRZZe5a-J84hS7SQTcGb-WYFO9D1Oe5ZFkVWGVjtXlbfqI4WW6s9u0Y~33rsiLjiKGO9hC-I9Vq25ACBmrXv~3CvlmmsPXwyx08lli6xLMrxRPYrBmFwj8Xo12J2ovQrZ7RpTPhs2JxkMYBG4w__',
        name: 'The Lucy Lamp',
        price: '399',
    },{
        src: 'https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0JIVdmQompVglHCoo3zf7cZDQgyaBMkljN7xWoh89e5IgxGAO5cIuvCFR08zlioiz8N04SkvA9NoVwkJ3yM~ZmOP3tyVBbkC0nlCfVPrxfavgEOAl1AtYVJ1bSMbrfR1ZV-Jd-DlnG9l5B7HUoXL9IqnVlJ7vGn70WjtZA9VPFlAmP7x5wzWZYSsJxTZmejJ3JDyzo5Sf9mvXDowO2CQHtBkJRrLpNdUQ81H4O1Tnq69Ux9U0SBGrWBk1kSjuSOFhB431tsEYMCse7~uouC2HYqli3CmGN0pgoKTl3bgwc~y0ZKSldSop-DSkRKbwKpUG0aRgDwV5R7AyHU7tFdrQ__',
        name: 'The Dandy Chair',
        price: '250',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FOPS9qB-gWJFcpw3Z1Z-JtIqD1cd6j9yWUo1BAkoIz6sy5xjN6myFYaivh1MOOFyAVDn7914iVDF-wKTSKHBum2CKxwskXMJu~0ApkrIxuxnHaRESXKB2AKRXHODErXSPglyg9DNNsI9tvLE32MrGs55O2eWkj7kFAn~i6PwnCpZ2XTBIRmdTVFm~mlpqDLSims3ERwYQH50KxEzoUPyHyPH7G-FkC9Aue8KdYXP1mz0LMbyiaUc4XS88UMoX33gnI75GsJDOUkh6YX01IJVuh15P6DUq3mwPhN6gPSttZQZDr~vdsvy3-QQolI1S0DyxjqR0t34Cx0cHQDaKM1NjA__',
        name: 'Rustic Vase Set',
        price: '155',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnHaWAOMQ2rKD-IFu1rhjm4Tsb9P~v-e85dQSpJ6D2u7hCzd2R8ps0pjzUB4pleqUx1lgag9DE3GETuIG0IcLXRq03e8Pta4zk4VD4FKXbKEYXYrsej-knhg1APPekTNS2S75ZlwURRrfR1Hc0pCLY6c4vi20wv7-X4zOKUAk-IfpgLRNVbNfskcXwPT3SfpW5GOCDPF1Li1eoiHlLFyhvcI7AlliGETYSQX5fX4ivh3zy7Vx~hVBMC--h5LCeG5hEm6m1MlLoRESUqy09awWG8C2aihkh8FLJ2D~9PvXryDmHsTvqoIJGCy3huP6Eod-o7hVvYGQpcX12pQ8foWXg__',
        name: 'The Silky Vase',
        price: '125',
    },
    {
        src: 'https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfB9GzO2TovlEDG7wqyHIqOCEWizkroEPUFLt9wZZpnPTreM-s4vr~HCxS1yd7lRkxPsFH6IvoyoE-0Jntg7j1uXDHmbcJr1VdU1lEuM1NGRLigvZLThCisrP-FuIeSljKlil6Xyb~DqWf2hF12hchvkgInysG7C900vGxpUB4QJpRh93JA2-7k3xmSijfqzk1zIND~WAyAwTy2f5PUoLNRlpvwiN765E2bySTQZuVIpi7teA3~jYMWiUT2utItXG1eyZKYSQmzsK56Bvc5kbDqFLBMQUC2ApNAUeqGeF~mGwpYpnfgkzZtkIlTyVW~GG6-nomn-zz9xpleNa~CSUQ__',
        name: 'The Lucy Lamp',
        price: '399',
    },
];
type ProductProps = {
    products?: Product[]; 
    count?: number; 
}; 

export function ProductCard({ products = productDesc, count }: ProductProps) { 
    const displayedProducts = count ? products.slice(0, count) : products
    return ( 
        <div id="productlist"> 
            {displayedProducts.map((product, index) => ( 
            <div key={index}> 
                <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}> 
                    <div className="product-style"> 
                        <img src={product.src} alt="Image" /> 
                        <div id="product-desc"> 
                            <div id="product-name">{product.name}</div> 
                            <div id="product-price">£{product.price}</div> 
                        </div> 
                    </div> 
                </Link> 
            </div> 
            ))} 
        </div> 
    )
 } export default function Product({ products = productDesc, count }: ProductProps) { 
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"20px", justifyContent:"center"}}>
            <ProductCard products={products} count={count} />
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}><Link href={'/products'}><button className="content-button" style={{background:"#F9F9F9", color:""}}>View Collection</button></Link></div>
        </div>
        
    ) 
}
