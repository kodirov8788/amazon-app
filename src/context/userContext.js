import { createContext } from "react"


export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const value = {
        name: "Abror"
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


