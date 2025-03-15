'use client'

import {useEffect, useState} from "react";
import {BackendClient} from "@/utils/Client";
import Image from "@/components/utils/Image";

export default function Home() {
    const [events, setEvents] = useState([]);

    const fetchEvents = async (): Promise<void> => {
        setEvents(await BackendClient.request({ path: '/api/evenements?populate=visuel' }).then(res => res.json()).then(({data}) => data));
    }

    const getNextEventDates = () => {
        return 'Le 10 et 11 mai 2025' // TODO Change me, compute if there is a festival soon, else display a catchphrase
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <div className="text-center">
                <img src="/statics/img/logo.png" alt="Logo Auriac sur Vendinelle" className="m-auto w-36" />
                <h1 className='font-unique text-9xl text-slate-700'>Festival des ruelles d'Auriac</h1>
                <p className='font-unique text-5xl text-amber-500'>
                    {getNextEventDates()}
                    <span className='h-3 w-3 align-middle bg-amber-600 rounded-full inline-block mx-5'></span>
                    Auriac-Sur-Vendinelle
                </p>
            </div>

            <div className='mt-[100px]'>
                <h2 className="font-unique mb-5 text-amber-500 text-7xl">Programmation</h2>
                { events?.map(event =>
                    <div key={event.id}>
                        {event.titre}
                        <Image alt={event.titre} source={event.visuel.formats.medium.url} />
                    </div>
                ) }
            </div>
        </>
    );
}
