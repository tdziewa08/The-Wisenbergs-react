import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"

export default function Layout() {
    return (
        <>
        {/* Might want to keep this layout, with the header spread 100vw */}
        <Header />
        <div className="page">
            <Outlet />
        </div>
        {/* add Footer here, i think it will frame the Home page better */}
        </>
        
    )
}