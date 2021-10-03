import React, { useContext } from  'react'
import Context from './Context'

function Search(){

    const {setSearchValue} = useContext(Context)

    function getInputValue (e) {
        setSearchValue(e.target.value)
    }

    return(
        <input type='text' id='header__widget__value' placeholder='Serch' onChange={(event)=>{getInputValue(event)}}/>
    )
}

export default Search