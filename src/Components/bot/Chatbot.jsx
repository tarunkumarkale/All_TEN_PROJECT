import React, { useEffect, useState } from 'react'

const Chatbot = () => {

const currenthour=new Date().getHours()
const [currenthou,setcurrenthour]=useState(currenthour)
const [AmOrPm,setAmorPm]=useState('')
const [colur,setcolur]=useState('')
const [checkrealtime,setcheckrealtime]=useState('')
useEffect(()=>{
//    const display= currenthou>12? 'AM':'PM'
if(currenthour>=0 && currenthou<12){
setAmorPm('AM')
setcolur('text-red-400')
}
else if(currenthour>=12 && currenthou<20){
setAmorPm('AM')
setcolur('text-green-400')
}
else{
setAmorPm('AM')
setcolur('text-blue-400')
}

setInterval(T,1000);

},[currenthou])

const T=()=>setcheckrealtime(new Date().toLocaleTimeString())
 
  return (
    <div className={` ${colur} `}>
running time live      
<h1>{checkrealtime} {AmOrPm}</h1>
    </div>
  )
}

export default Chatbot
