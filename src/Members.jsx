import { foundingMembersArray } from "./index.js"
import { additionalMembersArray } from "./index.js"
import { nanoid } from "nanoid"

export default function Members() {

    const foundingMembers = foundingMembersArray.map(member => {
            return (
                <div className="member" key={nanoid()}>
                    <img src={member.img} alt={member.name} />
                    <p>{member.desc}</p>
                </div>
            )
    })

    const additionalMembers = additionalMembersArray.map(member => {
            return (
                <div className="member" key={nanoid()}>
                    <img src={member.img} alt={member.name} />
                    <p>{member.desc}</p>
                </div>
            )
    })

    return (
        <>
            <div>
                <h1>Founding Members</h1>
                <section id="founding-members-container">
                    {foundingMembers}
                </section>
            </div>

            <div>
                <h1>Additional Members</h1>
                <section id="additional-members-container">
                    {additionalMembers}
                </section>
            </div>
        </>
    )
}