import { useContext } from "react"
import Context from "./Context"
import Search from "./Search"
import {NavLink, useLocation} from 'react-router-dom'

function Header (){
  const {cart} = useContext(Context)
  const location = useLocation()

  function getCount(){
    let count = 0
    if(cart.length === 0){
      return count
    }else {
      cart.forEach((product) => {
        count += product.count
      })
    }
    return count
  }

    return(
    <header className='header'>
      {console.log(location)}
    <div className="header__logo">
      <NavLink to='/'>Ladies</NavLink>
    </div>
    {
      location.pathname !== '/cart' ? <div className="header__widget">
      <Search />     
      <NavLink to='/cart' className="header_cart">
        <img src='./image/cart.svg'/><span className="header_cart_count">{getCount()}</span>
      </NavLink>
    </div> : `В корзине: ${getCount()} единиц товара`
    }
    
  </header>
  )
}

export default Header