import axios from 'axios';
import React from 'react';
function Usesearch(q){
    const [loding,setLoading] = React.useState(true);
    const [data,setData] = React.useState(null);
    const config = {
        method: 'GET',
        url: q
    }
    React.useEffect(() => {
        axios(config)
        .then((res) => {
            setLoading(false)
            setData(res.data)
            console.log(res.data)
        })
    },[q]);
    return {loding,data};
}
export default Usesearch