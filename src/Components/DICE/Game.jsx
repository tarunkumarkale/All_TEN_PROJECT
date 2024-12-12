import React from 'react'

const Game = () => {

const array=[1,2,3,4,5,6]

const ShareClickvalue=(getclickvalue)=>{
console.log(getclickvalue)
}


  return (
    <><div className=' w-full h-full flex flex-col '>
     <div className=' flex flex-row justify-around mx-11'>
<div className='text-left font-semibold text-2xl w-[30%] '><h1 className=' text-left font-extrabold text-9xl'>0</h1></div>

<div className='flex flex-row justify-end w-[70%] mx-5'>
     {array.map((ele,index)=>(<div className='border border-black p-5 bg-slate-500 active:bg-red-400  ' key={index} onClick={()=>ShareClickvalue(ele)}><h1></h1>{ele} </div>))}
</div>


     </div> 
     </div>
    </>
  )
}

export default Game
