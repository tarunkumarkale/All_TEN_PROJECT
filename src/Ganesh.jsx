import React, { useState } from 'react'

const Ganesh = () => {

const [task,settask]=useState()
const [dispalytask,setdisplaytask]=useState([])
const [editing,seteditingtask]=useState(null)

const Writingtask=(e)=>{
  settask(e.target.value)
}

const showtask=()=>{  

if(editing!==null){
  dispalytask((pre)=>pre.map((ele,index)=>index===editing?task:ele))
  seteditingtask(null)
}else{
  setdisplaytask((pre)=>[...pre,dispalytask])
}
 
}

const edit=(ele,index)=>{
  seteditingtask(index)
  settask(ele)
}

  return (
    <div>
<input type="text"  onChange={Writingtask} value={task} />
<button onClick={showtask}>ADD</button>      
{dispalytask.length===0? (<h1>task not </h1>): dispalytask.map((ele,index)=> <div>{ele} <button onClick={()=>edit(ele,index)} >edit</button></div>) }
    </div>
  )
}

export default Ganesh
