import "./App.css";
// import { SingInWithGoogle } from "./firebase/firebase"
// import Products from "./pages/Products/Products";
// import Returns from "./pages/return/Returns";
import { Storage } from "./firebase/firebase"
import { ref, uploadBytesResumable } from "@firebase/storage"
import { onSnapshot } from "firebase/firestore";
import { useState, useContext } from "react";
import { UserContext } from "./context/userContext"
import { CartContext } from "./context/cartContext"



function App() {

  const { user, loading } = useContext(UserContext)
  const { item } = useContext(CartContext)
  console.log(user, loading);
  console.log(item);
  const [progress, setprogress] = useState(0)
  const myfunc = (e) => {
    e.preventDefault()
    const file = e.target[0].files[0]
    console.log(file);
  }
  const Upload = (file) => {
    if (!file) return;
    const storageref = ref(Storage, `file/${file.name}`)
    const UploadTask = uploadBytesResumable(storageref, file)

    UploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
      setprogress(prog)

    })

  }
  return (


    <div className="App">
      {/* <button onClick={SingInWithGoogle}>Login</button> */}
      {/* <Returns /> */}
      {/* <Products /> */}

      {/* <h1>{localStorage.getItem("Name")}</h1>
      <h1>{localStorage.getItem("Email")}</h1>
      <img src={localStorage.getItem("Photo")} alt="" /> */}

      <form onSubmit={myfunc}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>



    </div>
  );
}

export default App;
