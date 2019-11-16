import React from 'react'
import { useParams } from 'react-router'
import { useFetchFilmById } from '../hooks'

export const Film: React.FC = () => {
  const { filmId } = useParams<{ filmId: string }>()
  const [film, hasLoaded, isError] = useFetchFilmById(filmId)

  if (!hasLoaded)
    return <p>Loading...</p>

  // We cannot guarantee that the film exists even though we have loaded and
  // there are no errors. Supposedly, it should exist at this point, if not,
  // we treat it as any other error.
  if (isError || film == null)
    return <p>Error...</p>

  return (
    <div>
      <p>Film: {film.Title}</p>
      <p>{film.Actors}</p>
    </div>
  )
}