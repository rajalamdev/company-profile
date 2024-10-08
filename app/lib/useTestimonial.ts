import useSWR from "swr"

export function useTesimonial (slug: string) {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, mutate, error, isLoading } = useSWR(`/api/testimonial/${slug}`, fetcher)

    // console.log(data)
   
    return {
      data: data?.data,
      mutate,
      isLoading,
      isError: error
    }
}