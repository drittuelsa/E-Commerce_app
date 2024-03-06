
import React,{useEffect,useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { BsTrashFill,BsStar,BsStarFill } from "react-icons/bs";
import { DeleteCart } from "./action";


export function Cart(){
    
    const[price,setPrice] = useState(0);


    const dispatch = useDispatch();

    const getcarts = useSelector((state) =>{
        return state.carts
    })

    const handleDel =(id)=>{
        dispatch(DeleteCart(id))
    }

    const total =()=>{
        var price = 0;
        getcarts.map((item,k) =>{
            price = item.price + price
        })
      setPrice(price);
      console.log(price);
      }
      
      useEffect(() =>{
      total()
      },[total])

    return(
        <div>
            <div className="container">
                <h2 className="text-center">Your Shopping Cart</h2>
                {
                            getcarts.map((item) =>{
                                return(
                                    <>
                <div className="container mt-3 ">
                    <div className="row align-items-center justify-content-center">
                    <div className="itemdetails d-flex col-8 border">
                    <div className="itemimage m-auto">
                                    <img src={item.image} style={{width:150,height:170}} alt="product"/> 
                                    </div>
                        <div className="details m-5">
                            <table className="table">
                                <tr>
                                    <td><p><b>Category</b> : In {item.category}</p></td>
                                    <td><p><b>Price </b>: ${item.price} </p></td>            
                                </tr>
                                <tr>
                                <td><p><b>Title</b> : {item.title}</p></td>  
                                  <td><p><b>Rating  </b> <span style={{backgroundColor:"green"}}>{item.rating && item.rating.rate}</span><br/>
                                  <span style={{color:"green"}}> <BsStarFill/><BsStarFill/><BsStarFill/><BsStar/> </span>
                     <span>({item.rating && item.rating.count})</span><br/> </p></td>  
                                    
                                </tr>
                                <tr>
                                    <td><p><b>Description</b> : {item.description}</p></td>
                                    <td onClick={()=>handleDel(item.id)}><b>Remove </b><p style={{fontSize:20, color:"red"}} >< BsTrashFill/></p></td>
                                </tr>   
                            </table>
                        </div>
                     </div>
                    </div>
                </div>
                </>
                                        )})}
                                        
                                <div className=" text-center mb-5 " style={{fontSize:25}}><b>Subtotal </b>  : ${price}<br/>
                                <button className="btn btn-primary ms-2"> Buy Now</button></div>
            </div>
        </div>
    )
}