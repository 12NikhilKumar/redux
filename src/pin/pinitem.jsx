import React from 'react';
const defaultStyle = {
    width:'2rem',
    height:'2rem',
    borderRadius:'0.25rem',
    padding:'0.5rem',
    border:'1px solid blue'
}
const PinItem = React.forwardRef(({length,handleChange,handleBackspace},ref)=>{
    const handleKeyup = (e)=>{
        switch (e.code) {
            case "Backspace":{
                handleBackspace && handleBackspace(e.target.value);
                break;
            }
            default:{
                handleChange(e.target.value);
            }
        }
    }
    return (
        <div>
            <input
                ref={ref}
                maxLength={length}
                style={defaultStyle}
                onChange={(e)=>handleChange(e.target.value)}
                onKeyUp={handleKeyup}
            />
        </div>
    )
})
export default PinItem;