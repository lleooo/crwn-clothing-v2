import {createContext, useState, useEffect} from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const val = {currentUser, setCurrentUser};

    useEffect(() => {
        const unSubScribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unSubScribe;
    }, []);

    return (
        <UserContext.Provider value={val}>{children}</UserContext.Provider>
    );
};