import { Link } from "react-router-dom"
import CountdownClock from "./CountdownClock"

export default function Header() {

    const triviaDate = new Date('June 30, 2026 19:00:00');

    return (
        <>
            <header className="header">
                <Link to="/">Home</Link>
                <Link to="/members">Members</Link>
                <Link to="/stickers">Stickers</Link>
                <Link to="/about">About Us</Link>
            </header>
            <CountdownClock targetDate={triviaDate} />
        </>
    )
}
