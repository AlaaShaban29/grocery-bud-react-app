import React, { createContext, useContext, useState } from 'react'
let ContextData=createContext([])
function getLocalStorage(){
    let list=localStorage.getItem('myList') 
    if(list){
        return JSON.parse(localStorage.getItem('myList') )
    }
    else{
        return []
    }
}
export function ContextDataProvider(props) {
    const [list, setList] = useState(getLocalStorage())
    const [name, setName] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [editingID, setEditingID] = useState(null)

    const [alert, setAlert] = useState({show:false,type:'',msg:''})
  
    function showAlert(show=false,type='',msg=''){
        setAlert({show,type,msg})
    }
    function handleChange(e){
      
            let newItem={...name}
            newItem=e.target.value;
            setName(newItem)
        
     
        }
    function handleSubmit(e){
        e.preventDefault()        
        if(!name){
            showAlert(true,'danger','please enter value')
        }
        else if(name&&isEditing){
let myList=[...list]
myList=myList.map((item)=>{
    if(item.id===editingID){
        return({...item,title:name})
    }
    return item
})
setList(myList)
setName('')
setEditingID(null)
setIsEditing(false)
setAlert({show:true,type:'success',msg:'Value Changed'})

        }
        else{
            showAlert(true,'success','item added to list')
        let newItem={id : new Date().getTime().toString(),title:name}
        setList([...list,newItem])
setName('')

    }
}
    function deleteItem(id){
        let newList=[...list]
        newList=list.filter((item)=>item.id!==id)
setList(newList)
setAlert({show:true,type:'danger',msg:'item removed'})

    }
    function editItem(id){
      const  updateItem=list.find((item)=>item.id===id)
      setIsEditing(true)
      setEditingID(id)
      setName(updateItem.title)
setAlert({show:true,type:'success',msg:'Value Changed'})

    }
    function clearItems(){
        showAlert(true,'danger','empty list')

        setList([])
    }
  
    return (
        <>
            <ContextData.Provider value={{handleChange,handleSubmit,name,list,deleteItem,clearItems,alert,showAlert,editItem,isEditing}}>
                {props.children}
            </ContextData.Provider>
        </>
    )
}
function useGlobalContext(){
    return useContext(ContextData)
}
export default useGlobalContext
