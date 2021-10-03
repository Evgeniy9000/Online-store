import Catalog from './Catalog.jsx'
import Cart from './Cart.jsx' 
import { Route } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'

function Main (){
    return(
    <main className="main">
      <Route path="/" exact component={Catalog} />
      <Route path="/cart" component={Cart}/>
      <Route path="/product/:id" component={ProductCard}/>
    </main>)
}

export default Main