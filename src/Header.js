import React from 'react'

function Header() {
  return (
    <div style={{backgroundColor: "violet", color:"black", width:"100%", padding:"0.1rem 0"}}>
        <ul style={{display:"flex", alignItems: "center", justifyContent:"space-evenly"}}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header
