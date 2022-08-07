import { useState } from "react";
import React from 'react'
import { User } from "../services/auth/Models/User";

interface AppContext {
    userDetails: User,
    updateUserDetails: (userData: User) => void,
    clearUserSession: () => void
}

const AppCtx = React.createContext<AppContext | null>(null);

export function UserDetailsProvider(props: any) {
    const [userDetails, setUserDetails] = useState<User>({ user_id: '', email: '', phonenumber: '', channel_code: '', user_type: '' })

    function updateUserDetailsHandler(userDetails: User) {
        setUserDetails(userDetails);
    }

    function clearUserSession() {
        setUserDetails({ user_id: '', email: '', phonenumber: '', channel_code: '', user_type: '' });
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

