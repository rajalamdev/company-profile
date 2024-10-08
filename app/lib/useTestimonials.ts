"use client"
import useSWR from "swr"

export function useTestimonials () {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error, isLoading, mutate} = useSWR(`/api/testimonial`, fetcher)
   
    return {
      data: data?.data,
      isLoading,
      isError: error,
      mutate
    }
}