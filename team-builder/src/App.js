import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const initialTeamList = {
    name: "sofie",
    email: "sofie@sofie.com",
    role: "mascot doggo"
  }
const [teamList, setTeamList] = useState([initialTeamList])

console.log(teamList)

return (
    <div className="App">

    </div>
  );
}

export default App;
