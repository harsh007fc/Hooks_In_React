import React,{useState} from 'react'
import Demo from './Demo'
import myContext from './Context'
function Main() {
    console.log('render');
    let [count,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <myContext.Provider value={count}>
                <Demo/>
            </myContext.Provider>
        </div>
    )
}

export default Main
