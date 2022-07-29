import "./App.css";
import Products from "./pages/Products/Products";
import {SingInWithGoogle} from './firebase/firebase'
import{useState, useContext} from 'react'
// import { UserContext } from "./context/userContext";
import {UserContext} from './context/userContext'
function App() {

  const{user}=useContext(UserContext)

  console.log(user);

  return (


    <div className="App">
      <button onClick={SingInWithGoogle}>Login</button>
      {/* <Returns /> */}
      {/* <Products /> */}

      {/* <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" /> */}


    </div>  
  );
}

export default App;