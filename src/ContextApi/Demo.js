import React,{useContext} from 'react'
import DemoChild from './DemoChild';
import myContext from './Context';
function Demo() {
    console.log('demo render');
    // let val = useContext(myContext);
    // console.log(val);
    return (
        <div>
            <DemoChild></DemoChild>
        </div>
    )
}

export default React.memo(Demo)
