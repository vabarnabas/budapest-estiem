import React from 'react'
import groupCover from '../resources/group_cover.jpeg'

const About = (props) => {

    return (
        <div className="screen-container" id="about-us">
            <p className="text-4xl mb-12 sm:mb-16 font-bold text-textPrimary">Kik vagyunk mi?</p>
            <div className="mx-6 flex flex-col sm:flex-row relative items-center justify-center w-2/3 sm:w-3/5 py-6 text-center bg-backgroundPrimary rounded-md text-textPrimary">
                <img src={groupCover} alt="" className="xl:flex items-center justify-center hidden ml-6 mr-4 object-cover h-5/6 w-2/5 rounded-md" />
                <p className="px-6 text-xs sm:text-sm">Az ESTIEM Budapest BME jelenlegi formájában a 2012-es év elején alakult újjá, a BME HKT ernyőszervezete alatt. Az újjáalakulás célja olyan diákszervezet létrehozása volt, amely az egyetem támogatásával képes a mérnök és gazdasági hallgatókkal megismertetni a menedzsment világát; elősegíti a többi Local Group-pal, emellett versenyszféra képviselőivel való aktívabb együttműködést Európában; a mérnökhallgatók angol nyelvi kompetenciáinak (az ESTIEM hivatalos nyelve angol), illetve prezentációs technikájának fejlesztését. Mindezen célját esettanulmányi versenyek és workshopok/kurzusok; diákcserék, nemzetközi konferenciák, szemináriumok; nyelvtanulási lehetőségek útján éri el. Bár úgy tűnhet, hogy a mindezekbe fektetett munka mellett eltörpül a vele járó haszon, az ESTIEM mégis jóval több, mint egy jó pont az ember életrajzában: országhatárokon átívelő barátságok, Európa kulturális sokszínűségének íze, felelősségvállalás, értékes élmények és hasznos szakmai tapasztalatok. – És mellesleg rengeteg szórakozás!</p>
            </div>
        </div>
    )
}

export default About
