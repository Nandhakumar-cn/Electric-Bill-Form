import React,{useState} from 'react'
import Input from './reuse'
import Next from './next'
import "./App.css"
import "./getvalue"



export default function App() {
  const  [first,setfirst] = useState("")
  const  [second,setsecont] = useState("")
  // const  [thirt,setthirt] = useState("")
  const  [next,setnext] = useState("")
  const  [next1,setnext1] = useState("")
  const  [display,setdisplay] = useState(true)
 



  return (
    <div>
      {
      display?
    <div className='main'>
      
      <h1 className='head'><u>TAMILNADU ELECTRIC BOARD </u></h1>


      <label className='l1'>Holder Name :</label>
      <Input inputtype="text" 
      inputvalue={first}
       setinputvalue={setfirst}/>
      <br></br>

      <label className='l2'>Enter Service Connection Number :</label>
      <Next inputtype="number" 
      inputvalue={next} 
      setinputvalue={setnext}/>
<br></br>

      <label className='l3'>Unit of Current Usage :</label>
      <Input inputtype="number" 
      inputvalue={second} 
      setinputvalue={setsecont}/>
      <br></br>


      
      {/* <Getvalue 
      //  inputvalue={second*2} 
      //  setinputvalue={setthirt} />
      <br></br> */}
     

     <label className='l4'>Upload File :</label>

      <Next inputtype="file" 
      inputvalue={next1} 
      setinputvalue={setnext1}/>
<br></br>
<br></br>

<button className='butt' onClick={()=>setdisplay(false)}>Submit</button>
</div>:
      <div className='p'>
        <h1 className='check'><u>Check Your Current Bill Status</u></h1>
      <p className='to1'><span className='p1'>Holder Name &nbsp;:</span><span className='s1'>{first}</span></p>
      <p className='to2'><span className='p2'> Service Connection Number&nbsp;:</span><span className='s2'>{next}</span></p>
      <p className='to3'><span className='p3'>Unit of Current Usage &nbsp;:</span><span className='s3'>{`${second} unit`}</span></p>
      <p className='to4'><span className='p4'>Total Amount &nbsp;:</span><span className='s4'>{`${second*2} Rupees`}</span></p>
      <p className='to5'><span className='p5'>Updated Bill File &nbsp;:</span><span className='s5'>{next1}</span></p>
      {/* <h2>your bill  amount is {amount}</h2> */}
      <button  className="back" onClick={()=>setdisplay(true)}>Back</button>

     </div> 
}

    </div>
    
  )
}
