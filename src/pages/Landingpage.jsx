import React from 'react'
import Navbar from '../Components/Navbar'
import Mobiles  from '../Components/Mobiles'


function Landingpage(props) {
  console.log(props);
  return (
    <div>
    <Navbar cartitems={props.cartitems}/>
    <Mobiles  funcname={props.funcname}/>
    </div>
  )
}

export default Landingpage