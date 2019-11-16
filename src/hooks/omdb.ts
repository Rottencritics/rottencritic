import { useEffect, useState } from "react";
import axios from 'axios'
import { Film, OMDbResponse } from '../types'

const API_KEY = process.env.REACT_APP_OMDB_API_KEY
const OMDB_BASE_URI = `http://omdbapi.com/?apikey=${API_KEY}`

export function useFetchFilmById(
  filmId: string
): [Film | undefined, boolean, boolean] {
  const [film, setFilm] = useState<Film>()
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchFilm = async () => {
      setHasLoaded(false)
      setIsError(false)

      try {
        const result = await axios(`${OMDB_BASE_URI}&i=${filmId}`)
        console.debug(result)

        if ((result.data as OMDbResponse).Response === "True") {
          setFilm(result.data)
        } else {
          setIsError(true)
        }

      } catch (error) {
        setIsError(true)
      }

      setHasLoaded(true)
    }

    fetchFilm()
  }, [filmId])

  return [film, hasLoaded, isError]
}