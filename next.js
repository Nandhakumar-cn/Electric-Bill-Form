import React from "react";

const Next=({inputtype,inputvalue,setinputvalue})=> <input type={inputtype} 
inputvalue={inputvalue} 
setinputvalue={setinputvalue} 
onChange={(e)=>setinputvalue(e.target.value)}/>
 export default Next