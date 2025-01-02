import React, { createContext, useContext } from 'react'
export const FirebaseContext=createContext(null)
export const FirebaseGlobal = ({children}) => {

<FirebaseContext.Provider value={{}}>
{children}
</FirebaseContext.Provider>

}

export const SpdRed=()=>{

const firebasefullcontext= useContext(FirebaseContext)
if(!firebasefullcontext) console.log('kdsjfkjdakjfkjkdajsf')
    return firebasefullcontext
 
} 
