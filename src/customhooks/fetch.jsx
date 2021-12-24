import React from 'react';
function UseFetch(url){
    const [loding,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [data,setData] = React.useState(null);
    React.useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        })
    },[url])
    return {loding,error,data};
}
export default UseFetch;