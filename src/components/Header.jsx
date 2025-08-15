import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
			<Link to="/">Home</Link>
            <Link to="/members">Members</Link>
            <Link to="/stickers">Stickers</Link>
			<Link to="/about">About Us</Link>
		</header>
    )
}