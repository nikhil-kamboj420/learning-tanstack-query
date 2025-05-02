import { useEffect, useState } from "react";
import { getAllPost } from "../api/FetchApiData";

export const FetchOld = () => {
  const [posts, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await getAllPost();
        if (res.status === 200) {
          setPost(res.data);
          setLoading(false);
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    };
    fetchAllPosts();
    return () => {};
  }, []);

  // Conditional rendering based on loading, error, and posts data
  if (isLoading && posts.length === 0) return <h1>Loading...</h1>;
  if (isError) return <p>Error : Something went wrong!</p>;
  if (posts.length > 0)
    return (
      <ul className="section-accordion">
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
};
