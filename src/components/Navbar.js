import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isOnline, serverAvailable }) {
    return (
        <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
            <div style={{ fontSize: "14px" }}>
                Network: {isOnline ? " Online" : " Offline"} &nbsp;|&nbsp;
                Server: {serverAvailable ? " Available" : " Down"}
            </div>
            <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Home</Link>
            <Link to="/add-tournament" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Add Tournament</Link>
            <Link to="/charts" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>
                Charts
            </Link>
            <Link to="/players" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>ViewPlayers</Link>


        </nav>
    );
}
