import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';




function Navbar(props) {
  return (
    <div>
        <nav class="navbar" style={{backgroundColor : '#e3f2fd'}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ELERN MART</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <Link to="/"> <a class="nav-link active" aria-current="page" href="">Home</a></Link>
        
      </div>
    </div>
  </div>
</nav>
    
            <Link to="/cartitems">
            <div><i style={{fontSize:'40px'}}class="bi bi-cart-fill"> <span>{props.cartitems.length}</span></i>
            </div>
            </Link>
          
        </nav>
    </div>
  )
}

export default Navbar