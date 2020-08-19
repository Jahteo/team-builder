import React from "react"

function Form ({ teamList, setTeamList }) {


    return (
        <div>
            <form>
                <label htmlFor="name">Name:
                    <input id="name" type="text" placeholder="Type your favorite name here" />
                </label>
                <label htmlFor="email">Email:
                    <input id="email" type="text" placeholder="Share your most secret email here" />
                </label>
                <label htmlFor="role">Role:
                    <input id="role" type="text" placeholder="Fantasy programming title here" />
                </label>
            </form>
        </div>
    )
}

export default Form