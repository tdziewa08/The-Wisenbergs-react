import React from "react"
import CountdownClock from './CountdownClock.jsx';

export default function Home() {

    const triviaDate = new Date('August 20, 2025 19:00:00');
 
    return (
        <div className="home-container">
            <h1>Welcome to The Wisenberg's team website!</h1>
            <div className="team-img-container">
                <img src="https://www.iwastesomuchtime.com/wp-content/uploads/sites/68/2021/12/9272013181733-22268.jpg" alt="The Wisenberg's team photo"/>
            </div>
            <CountdownClock targetDate={triviaDate} />
            <p>
                We are The Wisenberg's! We compete in trivia contests, twice a month, throughout Gloucester County.
            </p>
            <p>
                Total Wins: 0
            </p>
        </div>
    )
}