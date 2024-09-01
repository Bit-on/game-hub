import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";



export interface Genre {
  id: number;
  name: string;
  image_background:string;
}

//const useGenres = () => ({data: genres, isLoading:false, error:null})
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr stale time - it will refrash every 24hr
    initialData: {count: genres.length, results: genres} // provide initial static data 
})

export default useGenres;
