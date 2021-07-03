import React,{useEffect,useState} from 'react'
//useEffect ka pehla variation
// yeh without array wala useEffect ka variation hr render k baad chalta hai 
function Ue1() {
    console.log('render');
    useEffect(()=>{
        console.log('useEffect');
        document.title=`clicked ${count} times`
    })
    let [count,setCount] = useState(0);
    console.log("pehle");
    return (
        <div>
            <p>You Clicked the button {count} number of times</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Ue1
