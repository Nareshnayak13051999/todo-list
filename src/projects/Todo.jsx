import React, { useEffect } from "react";
import { useState } from "react"
import "./todo.css";

let Todo=()=>{
    let [B,setB]=useState([])
let [val,setVal]=useState("")


    let submiting=(e)=>{
e.preventDefault()

    setVal(e.target[0].value)




e.target[0].value=""
}
console.log(val);

   useEffect(()=>{
    if(val!==''){
    
      setB([...B,val])
    }
      
   },[val])
   console.log(B)
   let dis=B.map((x,y,z)=>{
return(
    <div>
    <p>
        {x}
    </p>
    <button onClick={()=>{
        let aa=prompt(`edit your value ${x}`)
          B.splice(y,1,aa)
          setB([...B])
          
        
    }} style={{padding:"2px"}}>edit</button>


    <button onClick={()=>{
        B.splice(y,1)
        setB([...B])
        
    }}style={{marginLeft:"5px",padding:"2px"}}>delete</button>
    
</div>
)
   })
    return(
        <div style={{padding:"20px",fontSize:"20px"}}>
<form  action="" onSubmit={submiting}>
  
        <input type="text" id="input" />
        <input type="submit" value="submit" style={{marginLeft:"5px"}}/>
        
</form>
{dis}
</div>
    )
    }
export default Todo;