'use client'

import { BackendClient } from "@/utils/Client";
import {useEffect, useState} from "react";

export default function About() {
    const [about, setAbout] = useState({contenu: '', titre: '', updatedAt: null});

    useEffect(() => {
        (async () => {
            const { data } = await BackendClient.request({path: '/api/about'}).then(res => res.json());

            setAbout(data);
        })();
    }, []);

    return (
        <>
            <h1>{about.titre}</h1>
            <h6>Dernière mise à jour : {about.updatedAt}</h6>
            <p>{about.contenu}</p>
        </>
    );
}