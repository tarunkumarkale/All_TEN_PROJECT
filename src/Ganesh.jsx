import React, { useState } from 'react'

const Ganesh = () => {

const data=[{fname:'taurn',lname:'kale'},{fname:'dee',lname:'kale'}]


const [task,settask]=useState({fname:'',lname:''})
const [dispalytask,setdisplaytask]=useState([])
const [editing,seteditingtask]=useState(null)
const [readymad,setreadymad]=useState(null)


const Writingtask=(e)=>{
  settask(e.target.value)
}

const showtask=()=>{  

if(editing!==null){
  dispalytask((pre)=>pre.map((ele,index)=>index===editing?{...task}:ele))
  seteditingtask(null)
}else{
  setreadymad(data)
  setdisplaytask((pre)=>[readymad,...pre,dispalytask])
}

 
}

const edit=(ele,index)=>{
  seteditingtask(index)
  settask(ele)
}

const trash=(getI)=>{
let tarun=dispalytask.filter((_,index)=>getI!==index)
setdisplaytask(tarun)
}

  return (
    <div>
<input type="text"  onChange={Writingtask} name='fname' value={task.fname} />
<input type="text"  onChange={Writingtask} name='lname' value={task.lname} />
<button onClick={showtask}>ADD</button>      
{dispalytask.length===0? (<h1>task not </h1>): dispalytask.map((ele,index)=> <div>{ele} <button onClick={()=>edit(ele,index)} >edit</button> <button onClick={()=>trash(index)}>del</button></div>) }
    </div>
  )
}

export default Ganesh
