import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Usercart from "./context/Usercart";


function App() {
  const [cartitems, setcartitems]= React.useState([])

const addToCart=(product)=>{
  setcartitems((cartitems)=>[...cartitems,{item:product, quantity:1}])
  console.log(cartitems);
}

const removeCartItem=(item)=>{
  var newCart = cartitems.filter((product)=>product!==item);
  console.log(newCart);
  setcartitems(newCart);
}


 
// }

  return (
    <BrowserRouter>
   
<Routes>
<Route path="/" element={<Landingpage funcname={addToCart} cartitems={cartitems}/>}/>
<Route path="/cartitems" element={<Usercart  funcname={removeCartItem} cartitems={cartitems}/>}/>

</Routes>
    
    </BrowserRouter>
  );
}

export default App;
