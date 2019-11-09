import { OMDbMovie } from './omdbmovie';

export interface OMDbResponse {
  data?: OMDbMovie | OMDbMovie[],
  status: number,
  statusText: string
}