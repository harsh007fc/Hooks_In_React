import React,{useState,useEffect} from 'react'

function UeWc() {
    let [count,setCount] = useState(0);
    console.log('rrender');
    useEffect(()=>{
        console.log('useeffect');
        document.title = `clicked ${count} number of times`;
        //cleanup
        return()=>{
            alert(`i will be called before the next useEffect ${count} is called`)
        }
    },[])
    //{//yeh componentwillunmount ki trh behave krega isme array empty pass kiya hai}
    console.log('pehle');

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Clicked</button>        
        </div>
    )
}

export default UeWc
