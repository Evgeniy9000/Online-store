import {useContext, useEffect, useRef, useState} from 'react'
import Product from './Product';
import Context from './Context';
import Filter from './Filter';

function Catalog(){
    const ul = useRef()
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const {cart, setCart, searchValue, filter, setFilter, filterStatus} = useContext(Context)
  

    useEffect(()=>{
      if(!localStorage.getItem('products')){
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              localStorage.setItem('products',JSON.stringify(json))
              setProducts(json)
            }
          )
    }},[])


    useEffect(()=>{    
      if(filterStatus === "height"){
        products.sort((a,b)=>{
          return a.price - b.price
        })
        setProducts([...products])
      }else if(filterStatus === "low"){
        products.sort((a,b)=>{
          return b.price -a.price
        })
        setProducts([...products])
      }else{
        setProducts(JSON.parse(localStorage.getItem('products')))
      }      

    },[filterStatus])

    function heandlerNextPrev(diraction)
    {
      const ulWidth = ul.current.offsetWidth
      const li = [...ul.current.getElementsByTagName('li')];
      const liFirst = li[0];
      const liFirstWidth = liFirst.offsetWidth;
      const liFirst_mr = parseInt(window.getComputedStyle(liFirst).getPropertyValue('margin-right'))
      const liFirstFullWidth = liFirstWidth + liFirst_mr
      const liFirst_ml = Math.abs(parseInt(window.getComputedStyle(liFirst).getPropertyValue('margin-left')));

      const breakPoint = li.length* liFirstFullWidth - ulWidth

      let ml = 0

      if(liFirst_ml < breakPoint + liFirstFullWidth ){ ml = liFirst_ml + liFirstFullWidth*(diraction === "prev" ? 1 : -1)}

      liFirst.style.marginLeft = `-${ml}px`

      console.log(ulWidth)
    }

    function checkAddToCart (product){
      const productSatatus = cart.findIndex((item)=> item.id === product.id)
      return productSatatus
    }

    function addToCart(product){
      if(cart.length === 0){
        product.count = 1
        cart.push(product)
      }else if(checkAddToCart(product) !== -1){
        cart[checkAddToCart(product)].count +=1
      } else {
        product.count = 1
        cart.push(product)
      }
      setCart([...cart])
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
    }
    function filterClick(){
      setFilter(true)
    }

    return(
    <>
      <div className="main__nav">
      <div className="main__filter">
        <div className="main__filter__name">Best Sellers</div>
        <button className="main__filter__btn" onClick={()=>filterClick()}></button>
        {filter ? <Filter />: ''}
      </div>
      <div className="main__setting__btn">            
        <button className="main__setting__btn-prev" onClick={()=>heandlerNextPrev('prev')}>&#8592;</button>
        <button className="main__setting__btn-next" onClick={()=>heandlerNextPrev('next')}>&#8594;</button>
      </div>
    </div> 
      <div className="catalog">
          <ul ref={ul} className="catalog__items">
            {products.filter((item)=> {
              if(searchValue.length === 0){
                return item
              }else if(item.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return item
              }
            }).map((product, index)=>{              
              return <Product
                    product={product}
                    addToCart={addToCart}
                    key={index}         
              />
            })}            
          </ul>
        </div>
  </>
  )
}

export default Catalog