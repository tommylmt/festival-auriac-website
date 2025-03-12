'use client'

import {useEffect, useState} from "react";
import {BackendClient} from "@/utils/Client";

export default function Join() {
    const [join, setJoin] = useState({description: '', titre: '', updatedAt: null});

    useEffect(() => {
        (async () => {
            const { data } = await BackendClient.request({path: '/api/join'}).then(res => res.json());

            setJoin(data);
        })();
    }, []);

    return (
        <>
            <h1>{join.titre}</h1>
            <h6>Dernière mise à jour : {join.updatedAt}</h6>
            <p>{join.description}</p>
        </>
    );
}