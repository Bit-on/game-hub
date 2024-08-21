import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T>{
  count: number;
  results: T[];
}
const useData =<T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, SetLoadading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetLoadading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        SetLoadading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        SetLoadading(false);
      });

    return controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
