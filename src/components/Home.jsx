import CountdownClock from './CountdownClock.jsx';
import theTeam from "../assets/new-member-images/team.jpg"

export default function Home() {

    const triviaDate = new Date('May 19, 2026 19:00:00');
 
    return (
        <div className="home-container">
            <div className="home-text">
                <h1>We are The Wisenberg's!</h1>
                <p>
                    We are The Wisenberg's! We compete in trivia contests, twice a month, throughout Gloucester County.
                </p>
            </div>
                <div className="team-img-container">
                    {/* <img src="https://www.iwastesomuchtime.com/wp-content/uploads/sites/68/2021/12/9272013181733-22268.jpg" alt="The Wisenberg's team photo"/> */ }
                    <img src={theTeam} alt="The Wisenberg's team photo"/>
                </div>
            
        </div>
    )
}

//new app incoming