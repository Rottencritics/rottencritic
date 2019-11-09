import React from 'react'
import { useParams } from 'react-router'

export const Film: React.FC = () => {
    const { filmId } = useParams()
    return (
        <div>
            <p>Film {filmId}</p>
        </div>
    )
}