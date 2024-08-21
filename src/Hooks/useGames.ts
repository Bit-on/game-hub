import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic:number;
  }

 export interface Platform {
    id:number;
    name:string;
    slug:string;
  }
interface FetchGamesresponse {
    count: number;
    results: Game[];
  }
const useGames =() =>
{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, SetLoadading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetLoadading(true);
    apiClient
      .get<FetchGamesresponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        SetLoadading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        SetLoadading(false);
      })

      return controller.abort();
  }, []);

   return {games, error, isLoading};
}

export default useGames;