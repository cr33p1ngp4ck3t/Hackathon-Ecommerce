'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */


export default function Menu({ category }: { category: any }) {
    const [menu, setMenu] = useState (false);
    const [loader, setLoader] = useState(false)

    const handleLoader = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    }

    const handleMenu= () => {
        setMenu(!menu)
    }

    return (
        <>
        
        <div>
            
            <Image src={'/menu.svg'} width={30} height={30} alt="Menu" onClick={handleMenu} loading="lazy"/>
            {
                menu && (
                    <>
                        {
                            loader && 
                            <div className='flex justify-center items-center  bg-[#ffffff71] backdrop-blur-sm w-screen h-screen fixed z-50 top-0 left-0'>
                                <Image src={'/ring-loader.svg'} alt='' width={80} height={80} className=' z-50 '  loading="lazy"/>
                            </div>
                        }
                    <div style={{width:"100%", height:"100vh", background:"white", zIndex:"100", position:"fixed", left:"0", top:"0"}}>
                        <div style={{margin:"70px"}}>
                            <div style={{textAlign:"center",}}>
                                <Link href={'/'} style={{textDecoration:"none"}} onClick={handleLoader}><div style={{fontSize:"32px"}}>Avion</div></Link>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                <div style={{fontWeight:"bolder", fontSize:"20px"}} onClick={handleMenu}>X</div>
                                <Image src="/user.svg" alt="User" width={25} height={25} loading="lazy" />
                            </div>
                            <div style={{margin:" 30px 0"}}>
                                <div style={{display:"flex", flexDirection:'column', gap:"20px", fontSize:"24px", cursor:"pointer"}}>
                                {
                                    category.map((item: any) => (
                                        <div key={item._id}>
                                            <Link href={`/category/${item.slug.current}`} style={{textDecoration:"none", color:"inherit"}} onClick={handleLoader}>{item.name}</Link>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
        </div>
        </>
    )
}
