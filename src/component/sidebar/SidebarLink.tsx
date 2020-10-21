import React, {ReactNode} from "react";
import { Link } from 'react-router-dom';

type Props = {
    path: string,
    text: string,
    icon: ReactNode
};

export default function SidebarLink(props: Props) {
    return (
        <Link to={props.path} className="flex content-center w-full p-2 pr-4 pl-4 hover:bg-gray-100 transition duration-150 md:my-2 lg:my-0">
            <div className="my-auto mx-0 mr-6 md:mx-auto md:mr-auto lg:mr-6 lg:mx-0">
                {props.icon}
            </div>
            <div className="my-auto block md:hidden lg:block">
                {props.text}
            </div>
        </Link>
    );
}