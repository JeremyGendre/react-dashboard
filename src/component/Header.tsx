import React from 'react';
import {FaBell} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import HeaderProfile from "./HeaderProfile";

export default function Header(){
    return (
        <div className="sticky top-0 bg-gray-200 shadow-md w-full flex p-1">
            <div className="mr-auto ml-4 flex md:hidden">
                <AiOutlineMenu size={24} className="my-auto"/>
            </div>
            <div className="flex ml-auto mr-4">
                <div className="rounded-full border-2 w-10 h-10 flex cursor-pointer my-auto border-transparent mx-2 hover:text-gray-600 transition duration-150">
                    <FaBell size={24} className="m-auto"/>
                </div>
                <HeaderProfile/>
            </div>
        </div>
    );
}