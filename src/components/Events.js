import React from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';


const Events = (props) => {
    
    const eventDetails = [
        {
            title: 'TIMES',
            description: 'A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.',
        },
        {
            title: 'Activity Week',
            description: 'A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.',
        },
        {
            title: 'TIMES',
            description: 'A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.',
        },
        {
            title: 'Test',
            description: 'A TIMES egy esettanulmányi verseny, ahol az ESTIEMerek és barátaik egyaránt versenyezhetnek hasonlóan kvalifikált társaikkal. A verseny angolul folyik és semmilyen elektronikai eszköz nem használható hozzá, a résztvevőknek így a leghasznosabb eszközük a korábban megszerzett tudásuk. A helyi Local Qualification után a nyertes csapat továbbjut a Semi Finalre, majd a Final-re, ahol már a külföldi csapatokkal kell összemérniük a tudásukat.',
        },
    ]

    const incPage = () => {
        if (props.eventPage < (Math.ceil(eventDetails.length/((props.smallWindow) ? 1 : (props.largeWindow ? 2 : 3)))-1)) {
            props.setEventPage(props.eventPage+1)
        }
    }

    const decPage = () => {
        if (props.eventPage > 0) {
            props.setEventPage(props.eventPage-1)
        }
    }

    return (
        <div className="screen-container" id="events">
            <p className="text-4xl mb-12 sm:mb-16 font-bold text-textPrimary">Eseményeink</p>
            <div className="flex justify-center items-center">
            {props.eventPage > 0 &&
                    <HiArrowSmLeft onClick={decPage} className="text-textPrimary absolute left-4 sm:left-6 text-4xl hover:bg-backgroundPrimary rounded-full"/>
            }
            {props.eventPage < (Math.ceil(eventDetails.length/((props.smallWindow) ? 1 : (props.largeWindow ? 2 : 3)))-1) &&
                    <HiArrowSmRight onClick={incPage} className="text-textPrimary absolute right-4 sm:right-6 text-4xl hover:bg-backgroundPrimary rounded-full"/>
            }
            {eventDetails.slice(((props.smallWindow) ? 0 + props.eventPage*1 : 0 + props.eventPage*(props.largeWindow ? 2 : 3)),((props.smallWindow) ? 1 + props.eventPage*1 : (props.largeWindow ? 2 : 3) + props.eventPage*(props.largeWindow ? 2 : 3))).map((items) => (
                <div key={uuidv4()} className=" mx-6 flex flex-col relative items-center justify-center w-2/3 md:w-1/3 xl:w-1/4 py-6 text-center bg-backgroundPrimary rounded-md text-textPrimary">
                    <p className="font-bold text-2xl">{items.title}</p>
                    <p className="mt-2 px-6 text-xs sm:text-sm">{items.description}</p>
                </div>
            ))}
            
            </div>
        </div>
    )
}

export default Events
