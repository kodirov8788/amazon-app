import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setUser({
                name: "Abror",
                email: "abror@gmail.com",
                isActive: true
            })
            setLoading(false)
        })

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const updateUserName = (name) => {
        setUser((prevState) => {
            return { ...prevState, name }
        })
    }
    const value = {
        setUser,
        user,
        loading,
        setLoading,
        updateUserName
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}