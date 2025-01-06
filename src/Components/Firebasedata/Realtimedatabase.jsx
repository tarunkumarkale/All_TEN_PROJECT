import React, { useState } from "react";
import { useFiresbaseAllContext } from "./AllAboutContext";


const RealtimeDatabase = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const { Realtimeupdate } = useFiresbaseAllContext();

  const handleNameChange = (e) => setName(e.target.value);
  const handleDataChange = (e) => setData(e.target.value);
  const handleSubmit = async() => {
    if(!data.trim().length>100){
alert('your issue should be less than 100 charater ')
return  ;
    }
    try{
await Realtimeupdate(name, data);
setName('');
setData('');
alert('you data is submit')
    }
    catch(error){
      console.log('error to submit data')
    }
    
   }

  return (
    <div className="mt-5 flex justify-center mx-[10%] items-center  flex-col w-[80%]">
      <input
        type="text"
        className="bg-slate-200 rounded-lg w-[40%] h-[20%] p-2 items-center justify-center my-2 "
        onChange={handleNameChange}
        placeholder="Enter your name...."
        value={name}
      />
      <input
        type="text"
        className="bg-slate-200 rounded-lg w-[100%]   h-[80%] items-center justify-center py-7 my-2"
        placeholder="Enter your issue within 200 charater..."
        onChange={handleDataChange}
        value={data}
      />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default RealtimeDatabase;
