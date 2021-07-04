import React,{useState,useEffect} from 'react'

function UeWc1() {
    let [count,setCount] = useState(0);
    console.log('rrender');
    useEffect(()=>{
        console.log('useeffect');
        document.title = `clicked ${count} number of times`;
        //cleanup optional
        return()=>{
            alert(`i will be called before the next useEffect ${count} is called`)
        }
    })
    // {//yeh compomnetdidupdate ki trh behave krega} aur pichle wala chalta hai mtlb jab count 1 hoga toh yeh 0 show krega aur jab count 2 hoga yeh 1 show krega
    console.log('pehle');

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Clicked</button>        
        </div>
    )
}

export default UeWc1
