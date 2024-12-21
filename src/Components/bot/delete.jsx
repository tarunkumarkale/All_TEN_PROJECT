import React from 'react'

const Delete = ({data,Delbtn,Editbtn}) => {
  return (
    <div>
      <ol>
        <li>{data}  <button onClick={Delbtn}>Del</button> <button onClick={Editbtn}>Editbtn</button></li>
      </ol>
    </div>
  )
}

export default Delete
