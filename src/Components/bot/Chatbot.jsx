import React, { useState } from 'react'

const Chatbot = () => {

const [inp,setinp]=useState({
    fname:'',
    lname:'',
    email:''
})
const [display,setdisplay]=useState()

const fun=(e)=>{
let {name,value}=e.target
console.log(name)
console.log(value)
setinp((pre)=>( {...pre,[name]:value}))  // eska matlab hai pre intialy khali hai  uske unde data dalo bss  
}


const Displaytext=(e)=>{

    e.preventDefault()
    let displayname=inp.fname
    let displaylname=inp.lname
    let displayemail=inp.email
setdisplay( `first name is ${displayname}  and my last name  is ${displaylname}  and my email is ${displayemail}`)




}

  return (
    <div>

    <form onSubmit={display}>
<input type="text" className='bg-green-300' name='fname' onChange={fun} value={inp.fname} placeholder='enter you fname' />
<input type="text" className='bg-green-300' name='lname' onChange={fun} value={inp.lname}  placeholder='enter your lname'/>
<input type="text" className='bg-green-300' name='email' onChange={fun} value={inp.email}  placeholder='enter your email'/>
 <p>{display}</p>
<button onClick={Displaytext}>click</button>
</form>
    </div>
  )
}

export default Chatbot
