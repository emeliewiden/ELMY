// import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Funktion för att använda adressparametervärde
function ProductId() {
    const { id } = useParams()

    return (
        <div className="jobPage">
            <h2>{id}</h2>
        </div>
    )
}

export default ProductId
