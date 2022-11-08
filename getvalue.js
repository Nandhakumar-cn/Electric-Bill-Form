import React from "react";

const Getvalue=({inputtype,inputvalue,setinputvalue})=> <input type={inputtype} 
inputvalue={inputvalue} 
setinputvalue={setinputvalue} 
onChange={(e)=>setinputvalue(e.target.value)}/>

 export default Getvalue;