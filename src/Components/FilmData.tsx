import React, {useState, useEffect} from "react"
import axios from "axios";
import FilmCard from "./FilmCard";
import {OMDbResponse} from "../types/omdbresponse";
import { OMDbMovie } from "../types/omdbmovie";

const FilmData: React.FC = () => {

    const [getFilm, setGetFilm] = useState<OMDbMovie>(); 

    useEffect(() => {
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=277debda")
            .then((response) => {
                setGetFilm(response.data)
                console.log(response.data);
            })
            .catch((error) => {
                console.log(`You've ran into a wall... ${error}`)
            })
    }, [])

    console.log(getFilm);

    if (getFilm == undefined) {
        return <p>ERror</p>
    }

    return (
        <div className="FilmData">
                    <FilmCard 
                        film={getFilm}
                    />
        </div>
    );
}

export default FilmData;