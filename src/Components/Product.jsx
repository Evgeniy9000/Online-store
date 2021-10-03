import React from "react";
import  {useHistory} from 'react-router-dom'


function Product({ product, addToCart }){
  const history = useHistory()

  function heandlerProductView(){
    history.push(`product/${product.id}`,{
      product
    })
    }

    return(
    <li className="catalog__item">
        <div className="catalog__item__img"><img src={product.image} alt={product.title}/></div>
        <div className="catalog__caption">
          <div className="catalog__caption__name" onClick={()=>{heandlerProductView()}}>{product.title}</div>
          <div className="catalog__caption__subname">{product.description}</div>
          <div className="catalog__caption__price">$ {product.price}</div>
          <button className="catalog__caption__btn" onClick={()=>{addToCart(product)}} id={product.id}>+</button>
        </div>
    </li>
    )
}

export default Product