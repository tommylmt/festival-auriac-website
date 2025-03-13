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
        return 'Le 10 et 11 mai 2025' // Change me
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <div className="text-center">
                <img src="/statics/img/logo.png" alt="Logo Auriac sur Vendinelle" className="m-auto w-36" />
                <h1>Festival des ruelles d'Auriac</h1>
                <p>{getNextEventDates()}</p>
                <p>Auriac-Sur-Vendinelle</p>
            </div>

            <div className='mt-10'>
                <h2>Programmation</h2>
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
