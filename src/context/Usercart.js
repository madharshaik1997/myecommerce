import React from 'react'
import Navbar from '../Components/Navbar';


const Usercart = (props) => {
    console.log(props);
    var total = 0;

    props.cartitems.map((product)=>{
        return(
            total = total + product.item.price
        )
    })
  return (
   <>
   <Navbar cartitems={props.cartitems}></Navbar>
   {
    props.cartitems.map((item)=>{
        return(
            <div class="card mb-3" style={{maxWidth:'540px'}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={item.item.image} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.item.title}</h5>
                  <p class="card-text">{item.item.price}</p>
                  <button type="button" class="btn btn-danger" onClick={()=>props.funcname(item)} >Remove</button>
                </div>
              </div>
            </div>
          </div>

        )
    })
   }
  <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">TOTAL : {total} Buy</button>
</div>
   </>
  )
}

export default Usercart;