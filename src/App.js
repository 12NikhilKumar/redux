import logo from './logo.svg';
import './App.css';
import UseTimer from './customhooks/timer'
import UseFetch from './customhooks/fetch';
import React from 'react';
import Ready from './customhooks/ready';
import PinInput from './pin/pininput';
function App() {
  // const [query,setQuery] = React.useState("");
  // const [time,setTime] = React.useState(null);
  // const {value,startTimer,pauseTimer,resetTimer} = UseTimer({initialValue : 20})
  // const {loding,error,data} = UseFetch(`https://api.github.com/search/users?q=${query || 'masai'}`);
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
  return (
    <div className="App">
      <h1>Enter your Pin</h1>
      <PinInput/>
    </div>
  );
}

export default App;
