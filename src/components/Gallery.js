import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Gallery = (props) => {
    const photos = [
        {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'LG Meeting (2021.04.20.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'AW (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
        {
            src: 'https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'TIMES (2021.12.17.)',
        },
    ]

    return (
        <div className="screen-container" id="gallery">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4 xl:gap-6 mx-6">
            {photos.slice(0,(props.mediumWindow ? 6 : 8)).map((photos) => (
                <div key={uuidv4()} className="relative group aspect-square xl:w-64 w-56 cursor-pointer rounded overflow-hidden">
                    <div className="transition ease-in-out duration-100 flex justify-center items-center absolute top-0 left-0 group-hover:bg-opacity-60 bg-opacity-0 bg-black w-full h-full">
                    <p className="absolute text-white group-hover:opacity-80 opacity-0">{photos.title}</p>
                    </div>
                    <img src={photos.src} alt="" className="object-cover h-full w-full" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery
