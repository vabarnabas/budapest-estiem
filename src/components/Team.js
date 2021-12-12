import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const Team = () => {

    const board = [
        {
            name: 'Bucsi György Ferenc',
            position: 'Local President',
            email: '',
            src: 'https://drive.google.com/uc?id=1ppCGaTcrLJHyrvsuzhuB19mmcthfP0YJ',
        },
        {
            name: 'Szabó Georgina',
            position: 'Local Responsible',
            email: '',
            src: 'https://drive.google.com/uc?id=1mw2dt3wUxofh6b5E8o2RQ9f0i68th000',
        },
        {
            name: 'Varga Jázmin',
            position: 'Local Vice President of Administration',
            email: 'jazmin.varga@estiem.org',
            src: 'https://drive.google.com/uc?id=1vs7xFvnadHlC16i8Ej7bpZkc4ut4SO8Q',
        },
        {
            name: 'Takács Nóra',
            position: 'Local Vice President of Education',
            email: '',
            src: 'https://drive.google.com/uc?id=1zOkX2MayZrFQUaIBAou-gRGurTBRbeOd',
        },
        {
            name: 'Agócs Dávid',
            position: 'Local Vice President of Public Relations',
            src: 'https://drive.google.com/uc?id=1v5Ijk0PjHVUtPL5Wgsicfby082uJH3gs',
        },
        {
            name: 'Ferenczi Ágnes',
            position: 'Local Vice President of Human Resources',
            email: '',
            src: 'https://drive.google.com/uc?id=1ZjVoRhI_2jfamGbFAerMhTs5VSOXtaje',
        },
        {
            name: 'Bakos Benjámin',
            position: 'Local Vice President of Corporate Relations',
            email: '',
            src: 'https://drive.google.com/uc?id=1tdE7zzJeDhdPdReDOid69I8M0Caqs4rr',
        },
    ]

    return (
        <div className="screen-container" id="our-team">
            <p className="text-4xl mb-1 font-bold text-textPrimary">Tagjaink</p>
            <p className="text-xl mb-16 sm:mb-8 font-semibold text-textPrimary">Elnökség</p>
            <div className="flex sm:flex-row flex-wrap justify-center items-start mx-6">
                {board.map((boardie) => (
                    <div key={uuidv4()} className="my-4 mx-1 xl:mx-4 flex flex-col items-center justify-center text-center leading-snug">
                        <img src={boardie.src} alt="" className="rounded object-cover xl:h-32 xl:w-32 w-24 h-24" />
                        <p className="leading-snug mt-2 w-32 xl:w-36 text-lg md:text-base xl:text-lg font-semibold">{boardie.name}</p>
                        <p className="leading-snug text-sm md:text-xs xl:text-sm w-32 sm:w-36">{boardie.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
