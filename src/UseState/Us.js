import React,{useState} from 'react'

function Us() {
    let [msgObj,setMessage] = useState({message:''})
    let handleChange = (e) =>{
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({message:val});
        setMessage({...msgObj,message:val});
    }
        return (
        <div>
            <input type="text" value={msgObj.message} onChange={handleChange} />
            <p>{msgObj.message}</p>
        </div>
    )
}

export default Us
