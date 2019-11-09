import React from "react";
import { OMDbMovie } from "../types/omdbmovie";

type Props = {
    film: OMDbMovie,
}

const FilmCard: React.FC<Props> = (props: Props) => {
    return (
        <div className="FilmCard">
            {
                props.film.Plot
            }
            {

            }
        </div>
    )
}

export default FilmCard;