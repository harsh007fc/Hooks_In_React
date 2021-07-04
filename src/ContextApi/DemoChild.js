import React,{useContext} from 'react'

import myContext from './Context';
function DemoChild() {
    console.log('demo child render');
    let val = useContext(myContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default DemoChild
