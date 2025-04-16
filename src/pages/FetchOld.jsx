import { useEffect, useState } from "react";
import { getPosts } from "../api/FetchApiData";

export const FetchOld = () => {
  const [posts, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        if (res.status === 200) {
          setPost(res.data);
          setLoading(false);
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchPosts();
    return () => {};
  }, []);

  // Conditional rendering based on loading, error, and posts data
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <p>Error : Something went wrong!</p>;
  return (
    <ul className="section-accordion">
      {posts.map((curElem) => {
        const { id, title, body } = curElem;
        return (
          <li key={id}>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        );
      })}
    </ul>
  );
};
