import React, {useRef, useState} from "react";
import {BiLogOut, FaUserAlt, RiSettings4Fill } from "react-icons/all";
import HeaderProfileMenuLink from "./HeaderProfileMenuLink";
import {useDocumentClick} from "../../helpers/useDocumentClick";

export default function HeaderProfile() {
    const [showMenu, setShowMenu] = useState(false);
    const menu = useRef(null);

    useDocumentClick(() => {
        if(showMenu){
            setShowMenu(false);
        }
    });

    return (
        <div className="relative flex flex-col">
            <button onClick={() => setShowMenu(prevState => !prevState)} className="material-btn m-auto">
                <img className="rounded-full w-12 transition duration-150 cursor-pointer border-2 border-transparent hover:border-gray-400 hover:shadow-lg" title="profil" src={ process.env.PUBLIC_URL + '/logo512.png' } alt="profile-avatar"/>
            </button>
            <div ref={menu} className={(showMenu ? 'flex flex-col' : 'hidden') + " absolute top-0 right-0 transform translate-y-14 bg-gray-600 text-white shadow-md rounded p-1"}>
                <HeaderProfileMenuLink label="Profile" url="/" icon={<FaUserAlt/>}/>
                <HeaderProfileMenuLink label="Preferences" url="/" icon={<RiSettings4Fill/>}/>
                <HeaderProfileMenuLink label="Log out" url="/" icon={<BiLogOut/>}/>
            </div>
        </div>
    );
}