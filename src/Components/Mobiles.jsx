import React from 'react'
import { ele } from '../data/electronics'
import '../Components/Ele.css';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Mobiles(props) {
  // const {id} = useParams()
  // const product = ele.find((item)=>item.id===id)
  return (
    <>
    <div class="container">
    <div class="row">
        {
          ele.map((my)=>{
            return(          
                <div class="col">
                  <div class="card" style={{width:'18rem'}}>
                     <img src={my.image} class="card-img-top" alt="..."/>
                      <div class="card-body">
                        <h4 class="card-title">Price : {my.price} INR</h4>
                         <h6 class="card-title">{my.title}</h6>
                          <p class="card-text">{my.description}</p>
                          <button class="btn btn-primary" onClick={()=>props.funcname(my)}>ADD TO CART </button>
                      </div>
                  </div>
                </div>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Mobiles