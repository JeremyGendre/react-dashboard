import React from "react";
import {BiLogOut, FaUserAlt, RiSettings4Fill } from "react-icons/all";
import HeaderProfileMenuLink from "./HeaderProfileMenuLink";

export default function HeaderProfile() {
    return (
        <div className="relative flex flex-col">
            <button className="material-btn m-auto">
                <img className="rounded-full w-12 transition duration-150 cursor-pointer border-2 border-transparent hover:border-gray-400 hover:shadow-lg" title="profil" src={ process.env.PUBLIC_URL + '/logo512.png' } alt="profile-avatar"/>
            </button>
            <div className="absolute top-0 right-0 flex flex-col transform translate-y-14 bg-gray-600 text-white shadow-md rounded p-1">
                <HeaderProfileMenuLink label="Profile" url="/profile" icon={<FaUserAlt/>}/>
                <HeaderProfileMenuLink label="Preferences" url="/preferences" icon={<RiSettings4Fill/>}/>
                <HeaderProfileMenuLink label="Log out" url="/logout" icon={<BiLogOut/>}/>
            </div>
        </div>
    );
}