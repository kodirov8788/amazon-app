import "./App.css";
import { SingInWithGoogle } from "./firebase/firebase"
import Products from "./pages/Products/Products";
// import Returns from "./pages/return/Returns";
function App() {


  return (


    <div className="App">
      <button onClick={SingInWithGoogle}>Login</button>
      {/* <Returns /> */}
      {/* <Products /> */}

      <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" />


    </div>
  );
}

export default App;
