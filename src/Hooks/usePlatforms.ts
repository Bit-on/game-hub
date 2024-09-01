import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id:number;
  name:string;
  slug:string;
}
//const usePlatforms =() => ({data: platforms, isLoading:false, error:null})
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
        .get<FetchResponse<Platform>>('/platforms/parents')
        .then(res=>res.data),
      staleTime: 24 * 60 * 60 * 1000, //24hr stale time - it will refrash every 24hr
      initialData: {count: platforms.length, results: platforms} // provide initial static data 
  })

export default usePlatforms;