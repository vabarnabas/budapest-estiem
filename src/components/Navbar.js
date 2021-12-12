import React from 'react'
import estiemLogo from '../resources/ESTIEM_feher logo.png'
import { HiMenuAlt4, HiArrowSmUp } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid';

const Navbar = (props) => {
    const navbarItems = [
        {
            title: 'Kik vagyunk mi?',
            page: 'About Us',
            ref: 'about-us',
        },
        {
            title: 'Eseményeink',
            page: 'Events',
            ref: 'events',
        },
        {
            title: 'Galéria',
            page: 'Gallery',
            ref: 'gallery',
        },
        {
            title: 'Tagjaink',
            page: 'Our Team',
            ref: 'our-team',
        },
        {
            title: 'Víziónk',
            page: 'Our Vision',
            ref: '',
        },
        {
            title: 'Támogatók',
            page: 'Sponsors',
            ref: 'sponsors',
        },
    ]

    const [scrolled,setScrolled] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const setOpacity = () => {
        if (window.scrollY >= (props.smallWindow ? 60 : 160)) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', setOpacity)

    return (
        <div className="">
            {/* Jump to Top Button */}
            <Link to="cover" smooth={true} duration={900}>
                <div className={`group items-center justify-center fixed right-4 sm:right-6 bottom-6 z-30 ${scrolled ? "flex" : "hidden"}`}>
                    <p className="lg:group-hover:block hidden mr-2 text-xs bg-backgroundPrimary shadow-md px-2 py-1 rounded-md">Ugrás a tetejére</p>
                    <HiArrowSmUp  className=" text-white text-4xl p-1 bg-estiemGreen rounded-full shadow-lg "/>
                </div>
            </Link>
            {/* Navbar */}
            <div className={`fixed top-0 right-0 h-14 w-screen bg-estiemGreen z-30 ${scrolled || showDropdown ? "bg-opacity-100" : "bg-opacity-0"}`}>
                <div className="h-full absolute top-0 left-6 flex items-center justify-center">
                <Link to="cover" smooth={true} duration={900}>
                    <img src={estiemLogo} alt="estiemLogo" className="h-8"/>
                </Link>
                </div>
                <div className="h-full absolute top-0 right-6 hidden lg:flex items-center justify-center text-white font-semibold">
                    {navbarItems.map((items) => (
                        <div key={uuidv4()} className="cursor-pointer">
                            <Link to={items.ref} smooth={true} duration={900}>
                            <p className="mx-1.5 px-2 py-1 hover:bg-white hover:text-estiemGreen transition-all ease-in-out duration-100">{items.title}</p>
                            </Link>
                        </div>
                    ))}
                    {/* Login Button */}
                    <button className="hidden rounded-none mx-1.5 px-2 py-1 font-semibold bg-white hover:bg-gray-200 text-estiemGreen">Bejelentkezés</button>
                </div>
                {/* Mobile Menu */}
                {showDropdown ?
                    <div className={`fixed w-screen mt-14 py-4 flex flex-col justify-center items-center lg:hidden bg-estiemGreen`}>
                    {navbarItems.map((items) => (
                        <div key={uuidv4()} className="cursor-pointer text-white font-semibold">
                            <Link className="flex flex-col items-center justify-center" to={items.ref} smooth={true} duration={900}>
                            <p className="my-2 px-2 py-1 hover:bg-white hover:text-estiemGreen transition-all ease-in-out duration-100">{items.title}</p>
                            </Link>
                        </div>
                    ))}
                </div> : ''}
                <div className="h-full absolute top-0 right-6 flex items-center justify-center text-white">
                    <HiMenuAlt4 onClick={() => setShowDropdown(!showDropdown)} className="text-2xl lg:hidden"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
