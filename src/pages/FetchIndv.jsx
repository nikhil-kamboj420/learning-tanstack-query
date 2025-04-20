import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { FetchIndvPost } from "../api/FetchApiData";

export const FetchIndv = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => FetchIndvPost(id),
  });

  // Conditional rendering based on loading, error, and posts data
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message || "Something went wrong!"}</p>;

  return (
    <div className="section-accordion">
      <h1>Post ID Number - {id}</h1>
      <div>
        <p>ID: {data.id}</p>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
      </div>
      <NavLink to="/rq">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};
