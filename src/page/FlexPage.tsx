import React from "react";

type Props = {
    text: string
};

export default function FlexPage(props: Props) {
    const elements = [];
    for(let i = 0; i < 50; i++){
        elements.push(i);
    }
    return (
        <div>
            { elements.map( () => {
                return <p>{ props.text }</p>
            }) }
        </div>
    );
}