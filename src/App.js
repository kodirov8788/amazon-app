import "./App.css";
<<<<<<< HEAD
import Products from "./pages/Products/Products";
import {SingInWithGoogle} from './firebase/firebase'
import{useState, useContext} from 'react'
// import { UserContext } from "./context/userContext";
import {UserContext} from './context/userContext'
function App() {

  const{user}=useContext(UserContext)

  console.log(user);
=======
import { SingInWithGoogle } from "./firebase/firebase"
import Products from "./pages/Products/Products";
// import Returns from "./pages/return/Returns";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext"



function App() {

  const { name } = useContext(UserContext)
  console.log(name);
>>>>>>> e2e2ab67ab677bb4fa62b30b6c1ba462fe1cbaa6

  return (


    <div className="App">
      <button onClick={SingInWithGoogle}>Login</button>
      {/* <Returns /> */}
<<<<<<< HEAD
      {/* <Products /> */}

      {/* <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" /> */}
=======
      {/* <Products  /> */}
      {/* 
      <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" /> */}





>>>>>>> e2e2ab67ab677bb4fa62b30b6c1ba462fe1cbaa6


    </div>  
  );
}

export default App;