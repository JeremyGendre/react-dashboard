import React from "react";
import SidebarLink from "./SidebarLink";
import {BiCalendar, BiMessageDetail, HiHome, ImStatsDots} from "react-icons/all";

const ICON_SIZE = 24;

export default function SidebarBody() {
    return (
        <div className="text-lg mt-2">
            <SidebarLink path='/' text='Home' icon={<HiHome size={ ICON_SIZE }/>}/>
            <SidebarLink path='/statistics' text='Statistics' icon={<ImStatsDots size={ ICON_SIZE }/>}/>
            <SidebarLink path='/agenda' text='Agenda' icon={<BiCalendar size={ ICON_SIZE }/>}/>
            <SidebarLink path='/messages' text='Messages' icon={<BiMessageDetail size={ ICON_SIZE }/>}/>
        </div>
    );
}