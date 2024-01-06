"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"
import Image from "next/image";

    const navLinks = [{
            title: "About",
            path: "#about"
        }, 
        {
            title: "Projects",
            path: "#projects"
        },
        {
            title: "Contact",
            path: "#contact"
        },
    ]
    
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] text- opacity-80">
            <div className="flex container  flex-wrap items-center justify-between mx-auto px-2 py-2 ">
            
                <Link href={"#home"} className="text-2xl md:text-5xl text-white font-semibold p-4">
                <p className="hover:text-purple-500 ease-in-out duration-300" >PR</p>
                    
                </Link>
                
                <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(PrevState => !PrevState)} 
                            className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white">
                            <Bars3Icon className="w-5 h-5" />
                            </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(PrevState => !PrevState)} 
                            className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white">
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    )

                }

                </div>
                <div className="menu hidden md:block md:w-auto id='navbar'">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }    
                    
                    </ul>
                </div>
            </div>
                       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}     

        </nav>
    )
}

export default Navbar;