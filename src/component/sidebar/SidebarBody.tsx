import React from "react";
import SidebarLink from "./SidebarLink";
import {BiCalendar, BiMessageDetail, HiHome, ImStatsDots} from "react-icons/all";

const ICON_SIZE = 24;

export default function SidebarBody() {
    return (
        <div className="text-lg mt-4">
            <SidebarLink path='/' text='Home' icon={<HiHome size={ ICON_SIZE }/>}/>
            <SidebarLink path='/statistics' text='Statistics' icon={<ImStatsDots size={ ICON_SIZE }/>}/>
            <SidebarLink path='/agenda' text='Agenda' icon={<BiCalendar size={ ICON_SIZE }/>}/>
            <SidebarLink path='/messages' text='Messages' icon={<BiMessageDetail size={ ICON_SIZE }/>}/>
            <div>
                <button className="material-large-btn overflow-hidden flex content-center w-full p-2 pr-4 pl-4 hover:bg-white transition duration-150 md:my-2 lg:my-0 cursor-pointer">
                    <div className="my-auto mx-0 mr-6 md:mx-auto md:mr-auto lg:mr-6 lg:mx-0">
                        <BiMessageDetail size={ ICON_SIZE }/>
                    </div>
                    <div className="my-auto block md:hidden lg:block">
                        Tg ouais
                    </div>
                </button>
                <div className="sidebar-link-submenu hidden">
                    <div>tg</div>
                    <div>ouais re</div>
                    <div>salut</div>
                </div>
            </div>
        </div>
    );
}