import React,{useEffect,useState} from 'react'

import  './Ue3.css'
function Ue3() {
    console.log('render');
    let [count,setCount] = useState(0);
    let [darkMode,setDarkMode] = useState(false);
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    },[count])//array mein count pass kr fiya ab yeh useeffect tbhi chalga jb   count change hoga nhi toh nhi chalega
    return (
        //conditional in class
        <div className={darkMode ? 'view dark-mode' : 'view light-mode'}>
            <label>DarkMode</label>
            <input type="checkbox" checked={darkMode} onChange={()=>{setDarkMode(!darkMode)}} />
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Ue3
