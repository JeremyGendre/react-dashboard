import React from "react";

type Props = {
    text: string
};

export default function FlexPage(props:Props) {
    const content:Array<null> = [];
    content.length = 50;
    return (
        <div>
            { content.map( () => {
                return <p>{props.text}</p>
            }) }
        </div>
    );
}