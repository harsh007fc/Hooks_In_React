import React,{useEffect,useState} from 'react'

function Infinite() {
    console.log('render');
    useEffect(()=>{
        console.log('useEffect');
        let num = Math.random() * 100;
        setCount(num);
        // document.title=`clicked ${count} times`
    },[]) //ag yeh array na lagaya toh infinitly chalega isliye iske andr state hange krte huye dhyaan rakhna hai
    let [count,setCount] = useState(0);
    console.log("pehle");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Infinite
