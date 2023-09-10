import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const apiURL = axios.create({
    baseURL: "http://localhost:3000/"
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig){
    const[data, setData] = useState<T | null>(null);
    const[error, setError] = useState<Error | null>(null);
    const[isFetching, setIsFetching] = useState(true);

    useEffect( () => {
        apiURL.get(url, options)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })
        .finally( () => {
            setIsFetching(false);
        })
    }, [url, options])
    return {data, error, isFetching}
}