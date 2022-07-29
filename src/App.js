import "./App.css";
import { SingInWithGoogle } from "./firebase/firebase"
import Products from "./pages/Products/Products";
// import Returns from "./pages/return/Returns";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext"



function App() {

  const { name } = useContext(UserContext)
  console.log(name);

  return (


    <div className="App">
      <button onClick={SingInWithGoogle}>Login</button>
      {/* <Returns /> */}
      {/* <Products  /> */}
      {/* 
      <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" /> */}







    </div>
  );
}

export default App;
