import {createContext, useEffect, useReducer} from 'react';

import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: payload
            };
        default:
            break;
    }
};

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({type: 'SET_CURRENT_USER', payload: user});
    };

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