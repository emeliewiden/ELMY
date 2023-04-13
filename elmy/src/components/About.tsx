import React, { useContext } from 'react'
import { UserContext } from '../pages/UserContext'

// Props med typeScript
interface Props {
    name: string
}

// Inlinestyling
const textHeading = {
    fontSize: '50px',
    color: 'red'
}

function About(props: Props) {
    const msg = useContext(UserContext)

    return (
        <div>
            <h1 style={textHeading}>{msg}</h1>
            <p>{props.name}</p>
            <h1 style={textHeading}>Trying InlineStyling</h1> 
        </div>
    )
}

export default About
