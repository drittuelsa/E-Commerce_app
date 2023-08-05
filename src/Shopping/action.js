
export function GetProducts(){
    return(dispatch) =>{
        fetch('https://fakestoreapi.com/products')
        .then(response =>response.json())
        .then(json =>{
            dispatch(GetByName(json))
        })
    }
}

export function GetByName(product){
    return{
        type : "ByName",
        payload : product
    }
}

export function AddCart(carts){
    return{
        type : "Add",
        payload : carts
    }
}

export function DeleteCart(id){
    return{
        type : "Delete",
        payload : id
    }
}