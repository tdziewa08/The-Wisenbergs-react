import tripleJawn from "/src/assets/triple-jawn.png"

export default function About() {
    return (
        <>
            <h1>Our Mission : Win One</h1>
            <div>
                <section className="about-info">
                    <p className="mission">
                        The Wisenbergs formed in Medford, NJ on March XXth 2024. What started as an experimental leisure activity has now bolossomed into a weekly hang for all of our members. At least once per week we, The Wisenbergs, descend upon a New Jersey brewery in hopes to take home the win. But these breweries got handz and at the current time we are still in search of that elusive dub. Our team's knowledge is diverse and each of our additional members bring something new to the table. We hope to meet and compete against you all sometime down the road....the KING's road.
                    </p>
                    <div className="info-img-container">
                        <img src="https://i.dailymail.co.uk/i/pix/2013/11/22/article-2512113-199662CA00000578-518_634x458.jpg" />
                    </div>
                </section>
                <section className="about-info flipped">
                    <p className="mission">
                        The Wisenbergs formed in Medford, NJ on March XXth 2024. What started as an experimental leisure activity has now bolossomed into a weekly hang for all of our members. At least once per week we, The Wisenbergs, descend upon a New Jersey brewery in hopes to take home the win. But these breweries got handz and at the current time we are still in search of that elusive dub. Our team's knowledge is diverse and each of our additional members bring something new to the table. We hope to meet and compete against you all sometime down the road....the KING's road.
                    </p>
                    <div className="info-img-container">
                        <img src="https://media.aintitcool.com/media/uploads/legacy/ckeditor_assets/pictures/9664/original/magnets1.jpg?1350328772" />
                    </div>
                </section>
                <section className="about-info">
                    <p className="mission">
                        The Wisenbergs formed in Medford, NJ on March XXth 2024. What started as an experimental leisure activity has now bolossomed into a weekly hang for all of our members. At least once per week we, The Wisenbergs, descend upon a New Jersey brewery in hopes to take home the win. But these breweries got handz and at the current time we are still in search of that elusive dub. Our team's knowledge is diverse and each of our additional members bring something new to the table. We hope to meet and compete against you all sometime down the road....the KING's road.
                    </p>
                    <div className="info-img-container">
                        <img src="https://www.giantfreakinrobot.com/wp-content/uploads/2023/06/breaking-bad-3.jpg" />
                    </div>
                </section>
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
                    <p className="stat-body">2</p>
                </li>
                <li>
                    <p className="stat-header">Triple Jawns Earned</p>
                    <p className="stat-body">1</p>
                </li>
                <div id="triple-jawn-container">
                    <img src={tripleJawn} />
                </div>
                <li>
                    <p className="stat-header">Team Favorite Venue</p>
                    <p className="stat-body">King's Road Brewing Company, Medford NJ (may be different as of June 15th)</p>
                </li>
                <li>
                    <p className="stat-header">Team Least-Favorite Venue</p>
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
        </>
    )
}