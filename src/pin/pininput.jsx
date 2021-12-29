import React from 'react';
import PinItem from './pinitem';

function PinInput({noOfBoxes=4,length=4,onChange}){
    const [values,setValues] = React.useState(()=> 
    new Array(noOfBoxes).fill(0));
    const arr = new Array(noOfBoxes).fill(0);
    const ref = React.useRef([]);
    const handleChange = (val,index)=>{
        values[index] = val;
        setValues([...values]);
        if(val.length === length && index < noOfBoxes-1){
            ref.current[index + 1].focus();
        }
        onChange && onChange(values.join(""));
    };
    const handleBackspace =(val,index)=>{
        let tmp = values[index];
        values[index] = val;
        if(index>0 && tmp.length===0){
            ref.current[index-1].focus();
        }
        setValues([...values]);
        onChange(values.join(""));
    }
    React.useEffect(()=>{
        console.log(ref);
    },[values])
    return (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
            }}
        >

            {arr.map((_,i)=>(
                <PinItem
                    key={i}
                    ref={(el)=>(ref.current[i]=el)}
                    handleChange={(v)=>handleChange(v,i)}
                    handleBackspace={(v)=>handleBackspace(v,i)}
                    length={length}
                />
            ))}
        </div>
    )
}
export default PinInput;