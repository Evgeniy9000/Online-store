import React from "react";
import {useHistory, useLocation} from 'react-router-dom'

function ProductCard ({location}){
    const { id, title, description, price, image } = location.state.product
    const history = useHistory()  
    const store = useLocation()
    console.log(store)

    function backToHome(){
        history.push('/')
    }
    
    return(
        <>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={()=>{backToHome()}}>Назад</button>
       
        </>
    )
}

export default ProductCard