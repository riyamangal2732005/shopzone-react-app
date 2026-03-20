import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer/>
    </>
    
  );
}

export default App;