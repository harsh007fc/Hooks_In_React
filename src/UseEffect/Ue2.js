import React,{useEffect,useState} from 'react'


//2nd variation of useeffect
//component did mount
//here dependency array is present
//empty dependency array
function Ue2() {
    console.log('render');
    useEffect(()=>{
        console.log('useEffect');
        document.title=`clicked ${count} times`
        //empty array se useeffect sirf first time chalega
        //isiliye title mein koi change nhi ayega kyunki useeffect render wale function k baad chalta hai toh jab chalega tb state 0 hogi doosri baar kbhi chalega hi nhi bs isliye title mein number change hi nhi hoga
    },[])
    let [count,setCount] = useState(0);
    console.log("pehle");
    return (
        <div>
            <div>
            <p>You Clicked the button {count} number of times</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
        </div>
    )
}

export default Ue2
