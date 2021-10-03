import React, { useContext } from "react";
import Context from "./Context";

function Filter (){
    const {setFilter, filterStatus, setFilterStatus} = useContext(Context)
    
    function closeFilter(){
        setFilter(false)
    }

    function getFilterValue(params){
        setFilterStatus(params)
    }

    return(
        <div className="filter__modal" onClick={()=>{closeFilter()}}>
            <div className="filter__body" onClick={(e)=>e.stopPropagation()}>
                <h3>Фильтр</h3>
                <label><input type="radio" defaultChecked={filterStatus === 'default' ? true : false} onClick={()=>{getFilterValue('default')}} name="filter-name"/>По умолчанию</label>
                <label><input type="radio" defaultChecked={filterStatus === 'height' ? true : false} onClick={()=>{getFilterValue( 'height')}} name="filter-name"/>По возрастанию</label>
                <label><input type="radio" defaultChecked={filterStatus === 'low' ? true : false} onClick={()=>{getFilterValue( 'low')}}  name="filter-name"/>По убыванию</label>
            </div>
        </div>
    )
}

export default Filter

