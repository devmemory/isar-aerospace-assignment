import { QueryFunction, QueryKey, useQuery } from "react-query";

const useStatusQuery = <T>(
  key: string,
  callback: QueryFunction<T, QueryKey>,
  enabled?: boolean
) => {
  const { isLoading, error, data, refetch } = useQuery<T>(key, callback, {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled,
  });

  return { isLoading, error, data, refetch };
};

export default useStatusQuery;
