import React from "react";
import "./reuse.css"

const Input=({inputtype,inputvalue,setinputvalue})=> <input type={inputtype} 
inputvalue={inputvalue} 
setinputvalue={setinputvalue} 
onChange={(e)=>setinputvalue(e.target.value)}/>

 export default Input