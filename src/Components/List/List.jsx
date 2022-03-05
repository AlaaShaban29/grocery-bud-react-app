import React from 'react'
import {FaEdit,FaTrash}from 'react-icons/fa'
import useGlobalContext from '../ContextData'

function List() {
    let {list,deleteItem,editItem}=useGlobalContext()
  
    return (
        <>
         <div className='grocery-list'>
{list.map((item,index)=>{
    const {title,id}=item
    return(
        <article className='grocery-item' key={index}>
              <p className='title'>{title}</p>
              <div className='btn-container'>
<button type='submit' className='edit-btn' onClick={()=>editItem(id)}> <FaEdit/></button>
<button type='submit' className='delete-btn' onClick={()=>deleteItem(id)}> <FaTrash/></button>

              </div>
            </article>

    )
})}
</div>   
        </>
    )
}

export default List
