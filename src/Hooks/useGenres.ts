import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";
import  Genre  from "../entities/Genre";

//const useGenres = () => ({data: genres, isLoading:false, error:null})

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24hr stale time - it will refrash every 24hr
    initialData: genres, // provide initial static data 
})

export default useGenres;
