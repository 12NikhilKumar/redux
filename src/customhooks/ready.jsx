import React from 'react';
function Ready(time){
    const [ready,setReady] = React.useState(false);
    if(time){
    setInterval(() =>{
        setReady(true);
    }, time*1000)
    }
    return {ready}
}
export default Ready