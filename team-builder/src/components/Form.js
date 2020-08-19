import React, { useState } from "react"

function Form ({ teamList, setTeamList }) {
    const initialState = {name: "", email: "", role: ""}
    const [member, setMember] = useState(initialState)
    // console.log(member)
    const handleChanges = (event) => {
        setMember({...member, [event.target.name]: [event.target.value]})
        console.log(member)
    }
    const addNewMember = member => {
        const newMember = {
            id: Date.now(),
            name: member.name,
            email: member.email,
            role: member.role
        };
        setTeamList([...teamList, newMember])
    }
    const submitForm = event => {
        event.preventDefault();
        addNewMember(member);
        setMember(initialState);
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name:
                    <input id="name" type="text" placeholder="Type your favorite name here" onChange={handleChanges} value={member.name} name="name" />
                </label>
                <label htmlFor="email">Email:
                    <input id="email" type="text" placeholder="Share your most secret email here" onChange={handleChanges} value={member.email} name="email" />
                </label>
                <label htmlFor="role">Role:
                    <input id="role" type="text" placeholder="Fantasy programming title here" onChange={handleChanges} value={member.role} name="role" />
                </label>
                <button type="submit">Add Team Member</button>
            </form>
        </div>
    )
}

export default Form