import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AddCart, GetProducts } from "./action";
import { BsStar, BsStarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function Home(){
    const product = useSelector((state) =>{
        return state.product
    })

 
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(GetProducts(product))
    },[])

    const send = (e) =>{
    //    console.log(e)

    dispatch(AddCart(e))
    }
    return(
        <div>
            <div className="container ">
            <div className="row image">
                <div className=" col-5">
                <h1 className="heading1 mt-5"><b>Grab Upto 50% Off On Selected Headphone</b></h1>
                </div>
                <div className="key">
                    <button className="button">Buy Now</button>
                </div>
            </div>  
            {/* </div> */}

            {/* <div className="container">      */}
            <div className="row">             
                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>All</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Fashion</p>
                    <p class="dropdown-item">Home</p>
                    <p class="dropdown-item">Electronics</p>
                    </div> 
                    </div>

                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Fashion</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Men</p>
                    <p class="dropdown-item">Women</p>
                    <p class="dropdown-item">Kids</p>
                    </div> 
                    </div>

                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Home</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Furniture</p>
                    <p class="dropdown-item">Appliances</p>
                    <p class="dropdown-item">Cookware</p>
                    </div> 
                    </div>

                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Electronics</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Mobiles</p>
                    <p class="dropdown-item">Television</p>
                    <p class="dropdown-item">Headphone</p>
                    </div> 
                    </div>

                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Offer</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Kids</p>
                    <p class="dropdown-item">Television</p>
                    <p class="dropdown-item">Headphone</p>
                    </div> 
                    </div>

                    <div className="col py-2">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>All Filters</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Price</p>
                    <p class="dropdown-item">Review</p>
                    <p class="dropdown-item">Rating</p>
                    </div> 
                    </div> 
                  

                     {/* <div className=" col-2 py-2 justify-content-end">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <b>Sort By</b>  </button>
                    <div className="dropdown-menu" >
                    <p></p>
                    <p>Categories</p>
                    <p>Price</p>
                    <p>Rating</p>
                    </div>  
                     </div> */}           
            </div>          
            {/* </div> */}

            {/* <div className="container"> */}
            <div className="row d-flex align-items-center justify-content-center">
            {product.map((item) =>(
             
                <div className="p-3 col-lg-3 "> 
                <div className=" card1">
                 <img className="card-img-top  image1" src={item.image} alt="product"/>
                 
                 <div className="card-body py-4">
                 <span className="text-muted text-capitalize">in {item.category}</span>
                   <h5 className="card-title">{item.title}</h5>
                    {item.rating && item.rating.rate}
                     <span style={{color:"green"}}> <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/> </span>
                     <span>({item.rating && item.rating.count})</span><br/>
                    <big className="display-6"><b>${item.price}</b></big><br/>
                      {/* <span className="text-muted">Description</span><br/>  
                    <p className="text-muted">{item.description}</p>  */}
                   <button  className="btn btn-primary"  onClick={()=> send(item)}>Add to cart</button>
                   {/* <NavLink to={`/${item.id}`} ><button className="btn btn-primary ms-2"> Buy Now</button></NavLink> */}
                 </div> 
                 </div>      
                </div>
            
         
            ))}
           </div> 
           </div>

        </div>
    )
}