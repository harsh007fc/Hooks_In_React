import React,{useState} from 'react'

function Us() {
    let [msgObj,setMessage] = useState({message:'',id:1})
    let handleChange = (e) =>{
        let val = e.target.value;
        // msgObj.message = val;
        // console.log(msgObj);
        // setMessage({message:val}); //iska yeh con ai ki agr multiple values hui toh update k baad sirf likhi hui value reh jayegi baaki saari gayab ho jjayegi isliyr hum h baar spread oprt use krte hain
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
