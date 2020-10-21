import React from 'react';
import HeaderProfile from "./HeaderProfile";
import {useSidebar} from "../../context/SidebarContext";
import { GrClose, AiOutlineMenu, FaBell } from 'react-icons/all';

export default function Header(){
    const sidebar = useSidebar();

    const handleMenuClick = () => {
        sidebar.toggle();
    };

    return (
        <div className="sticky top-0 bg-gray-200 shadow-md w-full flex p-1">
            <button onClick={handleMenuClick} className="mr-auto my-auto ml-4 w-10 h-10 rounded-full hover:text-gray-600 md:hidden flex material-btn">
                {sidebar.isOpened ? <GrClose size={ 24 } className="m-auto cursor-pointer"/> : <AiOutlineMenu size={ 24 } className="m-auto cursor-pointer"/>}
            </button>
            <div className="flex ml-auto mr-4">
                <button className="rounded-full border-2 w-10 h-10 flex cursor-pointer my-auto border-transparent mx-2 hover:text-gray-600 transition duration-150 material-btn">
                    <FaBell size={ 24 } className="m-auto"/>
                </button>
                <HeaderProfile/>
            </div>
        </div>
    );
}