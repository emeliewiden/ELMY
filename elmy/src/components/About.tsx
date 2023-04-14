import React, { useContext } from 'react'
import { UserContext } from '../pages/UserContext'
import { Link } from 'react-router-dom'

// Props med typeScript
interface Props {
    name: string
}

// Inlinestyling
const textHeading = {
    fontSize: '30px',
    color: 'goldenrod'
    // margin: '150px 0 0 0'
}

function About(props: Props) {
    const msg = useContext(UserContext) //UserContext som skapades i App.js hämtas in här och sparas i msg

    return (
        <div className="aboutInfo">
            <h1 style={textHeading}>{msg}</h1>
            <p style={textHeading}>{props.name}</p>
            <h1 style={textHeading}>info@elmy.com</h1>
            {/* komponent anpassas efter ett adressparametervärde nedan */}
            <Link className="jobLink" to="/products/jobs">
                Work with us? (click here)
            </Link>
        </div>
    )
}

export default About
