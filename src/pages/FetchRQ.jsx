import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/FetchApiData";

export const FetchRQ = () => {
    const fetchPosts = async () => {
        const res = await getPosts();
        if (res.status === 200) {
            return res.data;
        }
        throw new Error('Failed to fetch posts');
    }
    
    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        gcTime : 30000,
        staleTime : 7000,
    })
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    
    if (isError) {
        return <p>Error: {error.message}</p>
    }
    
    return (
        <ul className="section-accordion">
            {data.map((curElem) => {
                const { id, title, body } = curElem;
                return (
                    <li key={id}>
                        <p>{id}</p>
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </li>
                )
            })}
        </ul>
    )
}