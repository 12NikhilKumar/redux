import logo from './logo.svg';
import './App.css';
import UseTimer from './customhooks/timer'
import UseFetch from './customhooks/fetch';
import React from 'react';
import Ready from './customhooks/ready';
import PinInput from './pin/pininput';
import Usesearch from './customhooks/seacrhbar';
function App() {
  const [query,setQuery] = React.useState("");
  // const [time,setTime] = React.useState(null);
  // const {value,startTimer,pauseTimer,resetTimer} = UseTimer({initialValue : 20})
  const {loding,data} = Usesearch(`https://api.github.com/search/users?q=${query}&per_page=5`);
  // const {ready} = Ready(time);
  // const handleChange = (e) => {
  //   setTime(e.target.value)
  // }
  // const [state,setState] = React.useState({
  //   username : '',
  //   emailid : '',
  //   passcode : ''
  // })
  // const handleChange = (e) => {
  //   setState({...state,[e.target.name]: e.target.value})
  // }
  // console.log({data})
  return (
    <div className="App">
      <input placeholder="Enter your qurey" value={query} type="text" onChange={(e)=>{setQuery(e.target.value)}}/>
      {loding?(<h1>loding</h1>):(<h3>got it</h3>)}
      {data?.items?.map((item)=>(
        <div style={{width:'250px',display: 'flex',gap:'irem',padding:'1rem',backgroundColor:'black',color:'white',border:'1px solid white',margin:'auto'}}>
          <div style={{width:'30%',padding:'1rem'}}>{item.login}</div>
          <div style={{width:'60%'}}><img style={{width:'90%',padding:'1rem'}} src={item.avatar_url}/></div>
        </div>
      ))}
    </div>
  );
}

export default App;
