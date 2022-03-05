import React, { useEffect } from 'react'
import useGlobalContext from '../ContextData'
import List from '../List/List'
import Alert from '../Alert/Alert'

function Crud() {
    let {handleChange,handleSubmit,name,list,clearItems,isEditing}=useGlobalContext()
    useEffect(() => {
        localStorage.setItem('myList',JSON.stringify(list))
  }, [list])
    return (
        <>
           <main>
               <div className="container h-75 d-flex justify-content-center  align-items-center">

                   <div className="crud-container m-auto text-center">
                   <Alert/>

                       <h3>grocery bud</h3>
 <form onSubmit={handleSubmit}>
 <div className="input-group my-4">
  <input type="text" value={name} onChange={handleChange} className="form-control grocery " placeholder="e.g.eggs"  />
  <button className="submit-btn" type="submit" >{isEditing?'Edit':'Submit'}</button>
</div>
 </form>
{list.length>0 &&<>
    <List/>

    <div className='grocery-container'>
<button className='clear-btn'onClick={clearItems} >clear Items</button>
            </div>
</>}

                   </div>
               </div>
               </main> 
        </>
    )
}

export default Crud
