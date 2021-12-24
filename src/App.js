import logo from './logo.svg';
import './App.css';
import UseTimer from './customhooks/timer'
import UseFetch from './customhooks/fetch';
import React from 'react';
function App() {
  const [query,setQuery] = React.useState("");
  const {value,startTimer,pauseTimer,resetTimer} = UseTimer({initialValue : 20})
  const {loding,error,data} = UseFetch(`https://api.github.com/search/users?q=${query || 'masai'}`);
  console.log(loding,error,data)
  console.log(query)
  return (
    <div className="App">
      <h1>Time</h1>
      <h2>{value}</h2>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>reset</button>
      <input type='text' placeholder='Enter your qurey' value={query} onChange={e => setQuery(e.target.value)} />
      {data.items.map((item)=>(
        <div key={item.id}>{item.login}</div>
      ))}
    </div>
  );
}

export default App;
