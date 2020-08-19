import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"

function App() {
  const initialTeamList = {
    name: "sofie",
    email: "sofie@grumpiestdoggo.com",
    role: "mascot doggo"

  }
  const [teamList, setTeamList] = useState([initialTeamList])

  // console.log(teamList)

  return (
    <div className="App">
      {teamList.map((member) => {
        return(
          <div>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}
      <Form teamList={teamList} setTeamList={setTeamList} />
    </div>
  );
}

export default App;
