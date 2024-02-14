import React from 'react'
import {FaTrashAlt} from "react-icons/fa"


const LineItem = ({item,handleCheck,handleDelete}) => {
    return (
        <li className='item'   key={item.id}>                  
                    <input
                        type='checkbox'
                        onChange={()=>handleCheck(item.id)}
                        checked={item.checked}                        
                     />
                    <label
                        onDoubleClick={()=>handleCheck(item.id)}
                        checked={item.checked}  
                        style={item.checked?{textDecoration:"line-through"}:null}
                    >{item.item}</label>
                    <FaTrashAlt
                    role='button'
                    tabIndex="0"
                    onClick={()=>handleDelete(item.id)}/>

                </li>
    )
}

export default LineItem
