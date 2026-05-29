import tripleJawn from "/src/assets/triple-jawn.png"
export default function About() {
    return (
        <div className="about-page">
            <h1>Our Mission : Win One</h1>
            <section className="team-info">
                <p className="mission">
                    The Wisenbergs formed in Medford, NJ on March 15th, 2024. Twice a month we descend upon a New Jersey brewery in hopes of taking home the win. Our team's knowledge is diverse and each of our additional members bring something new to the table. We hope to meet and compete against you all sometime down the road....the KING's road.
                </p>
                <div className="photo-container">
                    <div className="team-img-container">
                        <img src="https://www.usatoday.com/gcdn/-mm-/30e2cff7a21c4e80a55cd9d10215272a2cebe16a/c=0-274-4890-3037/local/-/media/2018/01/17/USATODAY/USATODAY/636517817581542871-DSCF4206.JPG" alt="trivia bonus card"/>
                    </div>
                    <div className="team-img-container">
                        <img src="https://i2-prod.mirror.co.uk/article2323682.ece/ALTERNATES/s1200f/BreakingBadAfterparty.jpg" alt="trivia bonus card"/>
                    </div>
                    {/* <div className="team-img-container">
                        <img src="https://i.dailymail.co.uk/i/pix/2013/11/22/article-2512113-199662CA00000578-518_634x458.jpg" alt="trivia bonus card"/>
                    </div> */}
                    {/* <div className="team-img-container">
                        <img src="https://media.aintitcool.com/media/uploads/legacy/ckeditor_assets/pictures/9664/original/magnets1.jpg?1350328772" alt="trivia bonus card"/>
                    </div>
                    <div className="team-img-container">
                        <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2023/06/breaking-bad-3.jpg" alt="trivia bonus card"/>
                    </div> */}
                </div>
            </section>
            <h2>Team Stats</h2>
            <section className="team-stats">
                <div id="triple-jawn-container">
                    <img src={tripleJawn} alt="trivia bonus card"/>
                    <p>Awarded to the worst team of the night. Turns your double into a triple for the round it is played.</p>
                </div>
                <div className="stats">
                    <li>
                        <p className="stat-header">Highest Placing</p>
                        <p className="stat-body">2nd out of 10??? (King's Road Brewing Company, Medford NJ)</p>
                    </li>
                    <li>
                        <p className="stat-header">Lowest Placing</p>
                        <p className="stat-body">10th out of 10 (Bonesaw Brewery, Deptford NJ)</p>
                    </li>
                    <li>
                        <p className="stat-header">Podium Placings</p>
                        <p className="stat-body">6</p>
                    </li>
                    <li>
                        <p className="stat-header">Triple Jawns Earned</p>
                        <p className="stat-body">4</p>
                    </li>
                    <li>
                        <p className="stat-header">Favorite Venue</p>
                        <p className="stat-body">Neck of the Woods Brewing, Pitman NJ</p>
                    </li>
                    <li>
                        <p className="stat-header">Least-Favorite Venue</p>
                        <p className="stat-body">Merryman's Pub, Pitman NJ</p>
                    </li>
                    <li>
                        <p className="stat-header">Worst-Performing Venue</p>
                        <p className="stat-body">Bonesaw Brewery, Deptford NJ</p>
                    </li>
                    <li>
                        <p className="stat-header">Least Favorite Team</p>
                        <p className="stat-body">The Whistling Teachers Union (iykyk)</p>
                    </li>
                </div>
            </section>
        </div>
   )
}
















                    // <div className="team-img-cluster">
                    //     <div className="team-img-container">
                    //         <img src="https://i.dailymail.co.uk/i/pix/2013/11/22/article-2512113-199662CA00000578-518_634x458.jpg" alt="trivia bonus card"/>
                    //     </div>
                    //     <div className="team-img-container">
                    //         <img src="https://media.aintitcool.com/media/uploads/legacy/ckeditor_assets/pictures/9664/original/magnets1.jpg?1350328772" alt="trivia bonus card"/>
                    //     </div>
                    //     <div className="team-img-container">
                    //         <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2023/06/breaking-bad-3.jpg" alt="trivia bonus card"/>
                    //     </div>
                    // </div>




            {/* <section className="about-info">
                <p className="mission">
                    The Wisenbergs formed in Medford, NJ on March 15th 2024. Twice a month we descend upon a New Jersey brewery in hopes of taking home the win. Our team's knowledge is diverse and each of our additional members bring something new to the table. We hope to meet and compete against you all sometime down the road....the KING's road.
                </p>
                <div className="info-img-container">
                    <img src="https://i.dailymail.co.uk/i/pix/2013/11/22/article-2512113-199662CA00000578-518_634x458.jpg" />
                </div>
            </section>
            <section className="about-info flipped">
                <p className="mission">
                    If you haven't been able to tell by this point, our team is a fan of Breaking Bad. Our team name being inspired by the show's progtagonist, Heisenberg. Mix in a little "wise" to flex our mental prowess and you get "The Wisenberg's".
                </p>
                <div className="info-img-container">
                    <img src="https://media.aintitcool.com/media/uploads/legacy/ckeditor_assets/pictures/9664/original/magnets1.jpg?1350328772" />
                </div>
            </section>
            <section className="about-info">
                <p className="mission">
                    Our team has been less active as of late. It can be hard to find the time when dealing with all the responsibilities of life. Some of our members have even moved to other states. However the fun of playing trivia makes all of the roadblocks and travel worth it. We would encourage anyone looking to hang out with freinds and family to give trivia night's a try.
                </p>
                <div className="info-img-container">
                    <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2023/06/breaking-bad-3.jpg" />
                </div>
            </section>
            <div className="stats">
                <li>
                    <p className="stat-header">Highest Placing</p>
                    <p className="stat-body">2nd out of 10??? (King's Road Brewing Company, Medford NJ)</p>
                </li>
                <li>
                    <p className="stat-header">Lowest Placing</p>
                    <p className="stat-body">10th out of 10 (Bonesaw Brewery, Deptford NJ)</p>
                </li>
                <li>
                    <p className="stat-header">Podium Placings</p>
                    <p className="stat-body">4</p>
                </li>
                <li>
                    <p className="stat-header">Triple Jawns Earned</p>
                    <p className="stat-body">4</p>
                </li>
                <div id="triple-jawn-container">
                    <img src={tripleJawn} />
                </div>
                <li>
                    <p className="stat-header">Favorite Venue</p>
                    <p className="stat-body">King's Road Brewing Company, Medford NJ</p>
                </li>
                <li>
                    <p className="stat-header">Least-Favorite Venue</p>
                    <p className="stat-body">Merryman's Pub, Pitman NJ</p>
                </li>
                <li>
                    <p className="stat-header">Worst-Performing Venue</p>
                    <p className="stat-body">Bonesaw Brewery, Deptford NJ</p>
                </li>
                <li>
                    <p className="stat-header">Least Favorite Team</p>
                    <p className="stat-body">The Whistling Teachers Union (iykyk)</p>
                </li>
            </div> */}