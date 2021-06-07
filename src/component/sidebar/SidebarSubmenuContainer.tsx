import React, {PropsWithChildren, ReactNode, useState} from "react";
import { Link } from "react-router-dom";

type LinkType = {
    text: string,
    path: string
};

type Props = {
    text: string,
    active?: boolean,
    icon: ReactNode,
    subLinks: Array<LinkType>
};

export default function SidebarSubmenuContainer(props: PropsWithChildren<Props>){
    const [isActive, setIsActive] = useState(props.active ?? false);
    const handleClick = () => {
        setIsActive(prev => !prev);
    };
    return (
        <div className={`${isActive ? 'bg-gray-100' : ''}`}>
            <button
                onClick={handleClick}
                className={"material-large-btn overflow-hidden flex content-center w-full p-2 pr-4 pl-4 hover:bg-white transition duration-150 md:my-2 lg:my-0 cursor-pointer " + (isActive && ' bg-gray-100')}
            >
                <div className="my-auto mx-0 mr-6 md:mx-auto md:mr-auto lg:mr-6 lg:mx-0">
                    {props.icon}
                </div>
                <div className="my-auto block md:hidden lg:block">
                    {props.text}
                </div>
            </button>
            <div className={`sidebar-link-submenu text-left ${isActive ? '' : 'hidden'}`}>
                {props.subLinks.map((link, index) => (
                    <Link to={link.path} key={index} className={`block hover:bg-white`}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}