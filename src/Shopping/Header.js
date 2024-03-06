import React from "react";
import { BsTelephone ,BsCart4,BsSearch, BsCartFill,BsTrashFill} from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import {VscAccount} from "react-icons/vsc"
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DeleteCart } from "./action";
import { NavLink } from "react-router-dom";

export function Header(){

    const dispatch = useDispatch();

    const getcarts = useSelector((state) =>{
      return state.carts
  })
  
  const handleDel =(id)=>{
    dispatch(DeleteCart(id))
  }

    return(
        <div>
            <header className="header-top-stripe ">
            <div className="container ">
                <div className="row d-flex justify-content-between ">

                    <div className="col-3 d-flex text-white small  pt-2">
                        <p><BsTelephone/></p>
                        <a href="tel:+001234567890" className="link">+001234567890</a>
                    </div>

                    <div className="col-3 d-flex small pt-2 ">
                    <div className="d-flex text-white">
                        <p>Get 50% Off on Selected items | <Link to='/' className="text-white">Shop Now</Link> </p>
                    </div>
                    </div>
            
                    <div className=" col d-flex">
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Eng 
                     </button>
                     <div className="dropdown-menu" >
                    <p class="dropdown-item">Eng</p>
                    <p class="dropdown-item">French</p>
                    <p class="dropdown-item">Spanish</p> 
                    </div> 
                    
                    <button  style={{cursor:"pointer"}} class="btn btn-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Location  
                     </button>
                     <div className="dropdown-menu" >
                    <p class="dropdown-item">India</p>
                    <p class="dropdown-item">US</p>
                    <p class="dropdown-item">UK</p>
                    </div> 

                </div>       
        
                </div>
             </div>  
            </header>
           
           <header className="header-top">
                <div className="container">
                    <div className="row">
                            <div className="col d-flex"><span style={{fontSize:30, color:"orange"}}><BsCart4/></span>
                             <NavLink to="/" className="logo py-1 ms-2" style={{color:"darkgreen"}}><b>Shopcart</b></NavLink>
                             </div>
                           
                            <div className="col py-2">
                            <button  style={{cursor:"pointer"}} class="btn btn-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <b>Categories</b>  </button>
                    <div className="dropdown-menu" >
                    <p class="dropdown-item">Fashion</p>
                    <p class="dropdown-item">Electronics</p>
                    <p class="dropdown-item">Kitchen</p>
                    </div> 
                            </div>

                            <div className="col py-3">
                                <p><b>Deals</b></p>
                            </div>

                            <div className="col py-3" ><p><b>What's New</b></p></div>

                            <div className="col py-3"><p><b>Delivery</b></p></div>

                            <div className="col py-3">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Product"/>
                             <span className="input-group-text"><BsSearch/></span>
                            </div>
                            </div>

                            <div className="col py-3">
                                <div><span><VscAccount/></span>
                                <Link to="/" className="account">Account</Link>
                                </div>
                            </div>

                            <div className="col py-2">
                            <div class="dropdown">
                            <button class="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <BsCartFill style={{fontSize:25, cursor:"pointer"}}/>
                             <span className="badge text-black">{getcarts.length} Cart</span> 
                            </button>
                            

                            
                             {
              getcarts.length ?
              <div className="dropdown-menu">
                <table className="table">
                  <tr className="text-center">
                    <th>Photo</th>
                    <th>Details</th>
                  </tr>
                  {
                      getcarts.map((item) =>{
                        return(
                          <>
                        <tr>
                          <td>
                            <NavLink to={`cart/${item.id}`}><img src={item.image} style={{width:50,height:70}} alt="product"/></NavLink></td>
                          <td>{item.category}<br/>
                          <p>Price : ${item.price}</p>
                           {/* <p style={{fontSize:20, color:"red"}}><BsTrash/></p>  */}
                          </td>
                          <td onClick={()=>handleDel(item.id)}><p style={{fontSize:20, color:"red"}}><BsTrashFill/></p></td>
                        </tr>
                        </>
                        )
                      })
                  }
                    {/* <p className="m-3">Total : ${price} </p>  */}
                     </table>
                     </div>:
                    <div className="dropdown-menu">
                    <GrClose style={{position:"absolute",right:8}}/>
                     <p className="m-2">Your cart is empty</p>
                     </div>
                     }
                            </div> 
                            </div>
            
                    </div>
                </div>
           </header>

           
          
        </div>
    )
}