import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

//AuthContext is a context object that is used to pass the data to the component tree without having to pass props down manually at every level.

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);



    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
