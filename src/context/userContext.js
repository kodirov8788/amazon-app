<<<<<<< HEAD
import { createContext, useState, useEffect} from 'react'

 
export const UserContext = createContext()

// console.log(Admin)

export const Admin =  localStorage.getItem("Name")?.includes("Shahboziddin")
 
export const UserContextProvider = ({children}) => {
   const [user, setUser] = useState(null)

    useEffect(() =>{

        setUser({
            name: localStorage.getItem("Name")?localStorage.getItem("Name"):"Ro'yxadtan o'ting",
            email: localStorage.getItem("Email")?localStorage.getItem("Email"): "",
            url: localStorage.getItem("Photo")?localStorage.getItem("Photo"): ""
        })

    }, [])

   const value={
    user
   }
   
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
=======
import { createContext } from "react"


export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const value = {
        name: "Abror"
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


>>>>>>> e2e2ab67ab677bb4fa62b30b6c1ba462fe1cbaa6
