import React, { useState } from 'react'

const Chatbot = () => {

let data=[{fname:'tarun',lname:'kale'},{fname:'deep',lname:'kdsjafklja'}]

const [first,setfirst]= useState({fname:'',lname:''})
const [second,setsecond]= useState(data)

const check=(e)=>{
let {name,value}=e.target
setfirst((pre)=> ({...pre,[name]:value}))
}


const Hello=()=>{
setsecond((pre)=>([...pre,first]))
setfirst({fname:'',lname:''})
}



  return (
    <div>
<input type="text"  onChange={check}   value={first.fname} name='fname' placeholder='enter your fname '  />
<input type="text"  onChange={check}   value={first.lname} name='lname' placeholder='enter your lname '  />

{second.map((ele,i)=>( <div> {ele.fname}  {ele.lname}  </div>))}
<button onClick={Hello}>Add</button>
    </div>
  )
}

export default Chatbot
