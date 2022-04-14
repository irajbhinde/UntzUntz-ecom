import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        authStatus : !!localStorage.getItem("AUTH_TOKEN"),
        authToken : localStorage.getItem("AUTH_TOKEN")
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}