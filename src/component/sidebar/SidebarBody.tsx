import React from "react";
import SidebarLink from "./SidebarLink";
import {BiCalendar, BiMessageDetail, HiHome, ImStatsDots} from "react-icons/all";
import SidebarSubmenuContainer from "./SidebarSubmenuContainer";

const ICON_SIZE = 24;
const SUB_ICON_SIZE = 20;

export default function SidebarBody() {
    return (
        <div className="text-lg mt-4">
            <SidebarLink path='/' text='Home' icon={<HiHome size={ ICON_SIZE }/>}/>
            <SidebarLink path='/statistics' text='Statistics' icon={<ImStatsDots size={ ICON_SIZE }/>}/>
            <SidebarLink path='/agenda' text='Agenda' icon={<BiCalendar size={ ICON_SIZE }/>}/>
            <SidebarLink path='/messages' text='Messages' icon={<BiMessageDetail size={ ICON_SIZE }/>}/>
            <SidebarSubmenuContainer
                icon={<BiMessageDetail size={ ICON_SIZE }/>}
                text="ouais azy"
                subLinks={[
                    {text: 'tg', path: '/tg', icon: <HiHome size={ SUB_ICON_SIZE }/>},
                    {text: 'ouais re', path: '/ouais'},
                    {text: 'salut', path: '/salut', icon: <ImStatsDots size={ SUB_ICON_SIZE }/>},
                ]}
            />
        </div>
    );
}