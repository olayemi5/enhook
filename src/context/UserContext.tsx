import { useState } from "react";
import React from 'react'

interface AppContext {
    userDetails: any,
    updateUserDetails: (userData: any) => void,
    clearUserSession: () => void
}

const AppCtx = React.createContext<AppContext | null>(null);

export function UserDetailsProvider(props: any) {
    const [userDetails, setUserDetails] = useState<any>()

    function updateUserDetailsHandler(userDetails: any) {
        setUserDetails(userDetails);
    }

    function clearUserSession() {
        setUserDetails(null);
        window.localStorage.setItem("token","");
    }

    const context: AppContext = {
        userDetails: userDetails,
        updateUserDetails: updateUserDetailsHandler,
        clearUserSession: clearUserSession
    };

     return (
        <AppCtx.Provider value={context}>
            {props.children}
        </AppCtx.Provider>
    )
}

export default AppCtx;

