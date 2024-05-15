import Image from "next/image"
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Counter client side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'Pokemons list'
    },
    {
        path: '/dashboard/favoritos',
        icon: <IoHeart size={40} />,
        title: 'favoritos',
        subTitle: 'favorites list'
    }
]

export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ">
            <div id="logo" className="my-4 px-6">
                <h1 className=" items-center justify-center flex text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className=" size-20" />
                </h1>
                <p className="text-slate-500 text-sm text-center">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500 text-center">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center ps-6 justify-center">
                    <span>
                        <Image width={50} height={50} className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt=""></Image>
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Yoiner Pertuz
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item =>
                        <SidebarMenuItem
                            key={item.path}
                            {...item}
                        />
                    )
                }
            </div>
        </div>
    )
}
