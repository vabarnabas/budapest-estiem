import React from 'react'
import groupCover from '../resources/group_cover.jpeg'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

const Cover = () => {
    
    return (
        <div className="relative flex items-center justify-center w-screen sm:h-screen h-halfScreen" id="cover">
            <p className="absolute top-0 left-0 h-full w-full bg-opacity-70 bg-estiemGreen"></p>
            <div className="w-4/5 sm:w-2/5 absolute sm:left-6 text-white flex flex-col text-center sm:text-left">
                <p className="font-extrabold text-3xl sm:text-5xl">Üdv az <span className="px-1">ESTIEM</span> Budapest BME oldalán!</p>
                <p className="">Szervezetünk nagyon izgalmas és naon naon fincsike.</p>
            </div>
            <div className="h-full sm:overflow-hidden flex justify-center items-center">
            <img src={groupCover} alt="" className="object-cover w-screen h-full" />
            </div>
            <div className="absolute bottom-4 sm:left-6 text-white flex justify-center items-center text-lg sm:text-2xl transition-all ease-in-out">
                <button onClick={() => window.open('https://www.facebook.com/estiembudapestbme','_blank')} className="mr-4"><FaFacebookSquare className="hover:text-gray-200"/></button>
                <button onClick={() => window.open('https://www.instagram.com/estiembudapestbme','_blank')} className="mr-4"><FaInstagram className="hover:text-gray-200"/></button>
            </div>
        </div>
    )
}

export default Cover
