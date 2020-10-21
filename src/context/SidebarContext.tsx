import React, { useContext, useState } from "react";

interface SidebarValue {
    isOpened: boolean,
    toggle(): void
}

const sibebarContext = React.createContext<SidebarValue | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(sibebarContext);
    if(context === undefined){
        throw new Error("Sidebar context must not be null to use it");
    }
    return context;
};

export default function SibebarProvider(props: any) {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
        setIsOpened(!isOpened);
    };

    return (
        <sibebarContext.Provider value={{ isOpened, toggle }}>
            {props.children}
        </sibebarContext.Provider>
    );
}