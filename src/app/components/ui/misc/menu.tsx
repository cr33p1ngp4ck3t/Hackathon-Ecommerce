import Link from "next/link";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */

export default function Menu({ category }: { category: any }) {
    const [menu, setMenu] = useState (false);
    const handleMenu= () => {
        setMenu(!menu)
    }

    return (
        <div>
            <img src="/menu.png" alt="Menu" onClick={handleMenu}/>
            {
                menu && (
                    <div style={{width:"100%", height:"100vh", background:"white", zIndex:"100", position:"fixed", left:"0", top:"0"}}>
                        <div style={{margin:"70px"}}>
                            <div style={{textAlign:"center",}}>
                                <Link href={'/'} style={{textDecoration:"none"}}><div style={{fontSize:"32px"}}>Avion</div></Link>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <div style={{fontWeight:"bolder", fontSize:"20px"}}onClick={handleMenu}>X</div>
                                <img src="/user.png" alt="User"/>
                            </div>
                            <div style={{margin:" 30px 0"}}>
                                <div style={{display:"flex", flexDirection:'column', gap:"20px", fontSize:"24px", cursor:"pointer"}}>
                                {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} className="" style={{textDecoration:"none", color:"inherit"}}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
