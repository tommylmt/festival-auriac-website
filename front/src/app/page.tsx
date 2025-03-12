'use client'

import {useEffect, useState} from "react";
import {BackendClient} from "@/utils/Client";

export default function Home() {
    const [events, setEvents] = useState([]);

    const fetchEvents = async (): Promise<void> => {
        setEvents(await BackendClient.request({ path: '/api/evenements' }).then(res => res.json()).then(({data}) => data));
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <h1>HomePage</h1>
            <p>Salut ça va</p>

            {events?.map(event => <div key={event.id}>{event.titre}</div>)}
        </>
    );
}
