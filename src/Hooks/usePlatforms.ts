import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

//const usePlatforms =() => ({data: platforms, isLoading:false, error:null})
const apiClient = new APIClient<Platform>('/platforms/parents');

const usePlatforms = () => 
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24hr stale time - it will refrash every 24hr
    initialData: platforms // provide initial static data 
  })

  

export default usePlatforms;