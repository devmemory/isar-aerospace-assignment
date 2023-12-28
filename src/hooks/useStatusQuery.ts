import { QueryFunction, QueryKey, useQuery } from "react-query";

const useStatusQuery = <T>(
  key: string,
  callback: QueryFunction<T, QueryKey>,
  enabled?: boolean,
  onError?: (err: unknown) => void,
  onSettled?: (data: T | undefined, err: unknown) => void
) => {
  const { isLoading, error, data, refetch } = useQuery<T>(key, callback, {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled,
    onError,
    onSettled,
  });

  return { isLoading, error, data, refetch };
};

export default useStatusQuery;
