import React from 'react';
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/all";
import SidebarBody from "./SidebarBody";
import {useSidebar} from "../../context/SidebarContext";

export default function Sidebar(){
    const sidebar = useSidebar();

    return (
        <div className={ (sidebar.isOpened ? 'block' : 'hidden') + " md:block transition duration-200 sticky top-0 bg-gray-300 shadow-md h-screen w-80 md:w-20 lg:w-64 text-center"}>
            <div className="p-1 flex border-b-1 border-gray-200">
                <div className="h-12 m-auto flex">
                    <Link to='/' className="m-auto text-xl font-bold block md:hidden lg:block">React Dashboard</Link>
                    <Link to='/' className="m-auto text-xl font-bold hidden md:block lg:hidden"><HiHome size={24}/></Link>
                </div>
            </div>
            <SidebarBody/>
        </div>
    );
}