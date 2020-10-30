import React, {ReactNode} from "react";
import { Link } from "react-router-dom";

type Props = {
    label: string,
    url?: string,
    icon: ReactNode
};

export default function HeaderProfileMenuLink(props: Props) {
    return (
        <Link to={props.url ? props.url : '#'} className="px-4 py-2 flex hover:bg-gray-200 hover:text-gray-800 rounded transition duration-150 cursor-pointer">
            <div className="my-auto mr-2">
                {props.icon}
            </div>
            <div className="my-auto">
                {props.label}
            </div>
        </Link>
    );
}