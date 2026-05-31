import CountdownClock from './CountdownClock.jsx';
import theTeam from "../assets/new-member-images/team.jpg"

export default function Home() { 
    return (
        <div className="home-page">
            <h1>We are The Wisenberg's!</h1>
            <p>We are The Wisenberg's! We compete in trivia contests, twice a month, throughout Gloucester County.</p>
            <div className="main-img-container">
                <img src={theTeam} alt="Thw Wisenberg's team photo" />
            </div>
        </div>
    )
}

{/* <div className="sub-img-container">
    <img src="https://i.dailymail.co.uk/i/pix/2013/11/22/article-2512113-199662CA00000578-518_634x458.jpg" />
</div> */}

//new app incoming