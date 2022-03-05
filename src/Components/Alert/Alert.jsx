import React, { useEffect } from 'react'
import useGlobalContext from '../ContextData'

function Alert() {
    let {alert,showAlert,list}=useGlobalContext()
    let {type,msg,show}=alert
    useEffect(() => {
        let timeOut= setInterval(() => {
            showAlert()
         }, 3000);
         return ()=> clearInterval(timeOut)
        }, [list])
        
    return (
        <>
       {show&&
          <>
            <div className={`alert alert-${type} d-flex align-items-center justify-content-center`}>
         {msg}
</div>
          </>   }
        </>
    )
}

export default Alert
