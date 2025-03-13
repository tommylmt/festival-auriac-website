import {useEffect, useState} from "react";
import {BackendClient} from "@/utils/Client";

export default function Image({ source = '', alt = '', ...props}) {
    const [src, setSrc] = useState(BackendClient.apiUrl() + source);

    return (
        <span className='relative'>
            <img src={src} alt={alt} {...props} className='rounded-3xl shadow-lg' />
        </span>
    );
}