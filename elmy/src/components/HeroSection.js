import React from 'react'
import { Link } from 'react-router-dom'

const HeroText = 'MORE THAN JUST A BURGER...'

const HeroSection = () => {
    return (
        <div className="HeroImg">
            <wrap>
                <h1 className="title">{HeroText}</h1>
            </wrap>
            {/* <Link to="/products/1">Product 1</Link> */}
        </div>

    )
}
export default HeroSection
