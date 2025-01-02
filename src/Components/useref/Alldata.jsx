// 👿 direct dom ko acces krne ka matlab  he  ki dom property ko use kr rahe hai jese foucs , value, curret yeh sab dom hai jiska use kreke direct actual dom ko update kr rahe hai


// import React, { useRef } from 'react';

// const Alldata = () => {

//     const inputRef = useRef(null); // Step 1: Create a reference for the input element

//     const handleFocus = () => {
//         inputRef.current.focus(); // Step 3: Focus the input element using ref
//     }
//   return (

//         <div>
//             <h1>Focus Input Example</h1>
//             <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
//             <button onClick={handleFocus}>Focus Input</button>

         
//         </div>
//     );
// }


// export default Alldata



import React, { useRef } from 'react';

function Alldata() {
    const inputRef = useRef(null); // Reference for the input element

    const updateValue = () => {
        console.log("Current Input Value:", inputRef.current.value); // Log current value
        inputRef.current.value = "Updated!"; // Update input value
    };

    return (
        <div>
            <h1>Update Input Value Example</h1>
            <input ref={inputRef} type="text" placeholder="Type something here..." />
            <button onClick={updateValue}>Update Value</button>
        </div>
    );
}

export default Alldata;
