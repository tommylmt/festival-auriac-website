import Link from "next/link";

interface MenuItem {
    name: string,
    path: string,
    key: number
}

export default function Menu() {
    const routes: MenuItem[] = [
        { name: 'Accueil', path: '/', key: 1 },
        { name: 'À propos', path: '/a-propos', key: 2 },
        { name: 'Adhérez', path: '/adherez', key: 3 }
    ];

    return (
        <nav className='fixed bg-white/60 backdrop-blur-sm shadow-lg px-8 py-5 top-5 right-5 rounded-[50px]'>
            <ul className='flex gap-5'>
                { routes.map(route => (
                    <li key={route.key} className='text-sm font-medium'>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                )) }
            </ul>
        </nav>
    )
}