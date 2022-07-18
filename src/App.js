import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
// import Returns from "./pages/return/Returns";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* <Returns /> */}
      <Products />


    </div>
  );
}

export default App;
