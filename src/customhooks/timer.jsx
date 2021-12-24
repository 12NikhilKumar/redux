import React from "react";
function UseTimer({initialValue = 0}){
    const [value,setValue] = React.useState(initialValue);
    const ref = React.useRef(null);
    const startTimer = ()=>{
        if(!ref.current){
            ref.current = setInterval(()=>{
                setValue((prev)=>{
                    if(prev - 1 === 0){
                        pauseTimer();
                    }
                    return prev - 1
                });
            },1000)
        }
    };
    const pauseTimer = ()=>{
        clearInterval(ref.current);
        ref.current = null;
    };
    const resetTimer = ()=>{
        pauseTimer();
        setValue(initialValue);
    };
    React.useEffect(()=>{
        return pauseTimer
    },[]);
    return {value,startTimer,pauseTimer,resetTimer}
}
export default UseTimer