import { foundingMembersArray } from "../index.js"
import { additionalMembersArray } from "../index.js"
import { nanoid } from "nanoid"

export default function Members() {

    const foundingMembers = foundingMembersArray.map(member => {
            return (
                <div className="member" key={nanoid()}>
                    <div className="profile">
                        <div className="member-img-container">
                            <img src={member.img} alt={member.name} />
                        </div>
                        <p>{member.name}</p>
                    </div>
                    <p className="member-description">{member.desc}</p>
                </div>
            )
    })

    const additionalMembers = additionalMembersArray.map(member => {
            return (
                <div className="member" key={nanoid()}>
                    <div className="profile">
                        <div className="member-img-container">
                            <img src={member.img} alt={member.name} />
                        </div>
                        <p>{member.name}</p>
                    </div>
                    <p className="member-description">{member.desc}</p>
                </div>
            )
    })

    const additionalMembersNew = additionalMembersArray.map(member => {
        return (
            <div key={nanoid()} className="member">
                <div className="member-img-container">
                    <img src={member.img} alt={member.name} />
                </div>
                <p className="member-name">{member.name}</p>
                <p className="member-desc">{member.desc}</p>
            </div>
        )
    })

    const foundingMembersNew = foundingMembersArray.map(member => {
        return (
            <div key={nanoid()} className="member">
                <div className="member-img-container">
                    <img src={member.img} alt={member.name} />
                </div>
                <p className="member-name">{member.name}</p>
                <p className="member-desc">{member.desc}</p>
            </div>
        )
    })

    return (
        // <div className="members-page">
        //     <h1>Founding Members</h1>
        //     <section className="members-container">
        //         {foundingMembers}
        //     </section>
        //     <h2>Additional Members</h2>
        //     <section className="members-container additional">
        //         {additionalMembers}
        //     </section>
        // </div>

        <div className="members-page">
            <h1>Founding Members</h1>
            <section className="members-container">
                {foundingMembersNew}
            </section>
            <h2>Additional Members</h2>
            <section className="members-container additional">
                {additionalMembersNew}
            </section>
        </div>
    )
}