import logo from './logo.svg';
import './App.css';
import UseTimer from './customhooks/timer'
import UseFetch from './customhooks/fetch';
import React from 'react';
import Ready from './customhooks/ready';
function App() {
  // const [query,setQuery] = React.useState("");
  const [time,setTime] = React.useState(null);
  // const {value,startTimer,pauseTimer,resetTimer} = UseTimer({initialValue : 20})
  // const {loding,error,data} = UseFetch(`https://api.github.com/search/users?q=${query || 'masai'}`);
  const {ready} = Ready(time);
  const handleChange = (e) => {
    setTime(e.target.value)
  }
  return (
    <div className="App">
      {/* <h1>Time</h1>
      <h2>{value}</h2>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>reset</button>
      <input type='text' placeholder='Enter your qurey' value={query} onChange={e => setQuery(e.target.value)} />
      {/* {data.items.map((item)=>(
        <div key={item.id}>{item.login}</div>
      ))} */}
      <input type="text" placeholder="Enter your time" value={time} onChange={(e)=>handleChange(e)} />
      {/* <h3>{`${ready}`}</h3> */}
      {ready?(<h1>Ready</h1>):(<h1>not Ready</h1>)}
    </div>
  );
}

export default App;
