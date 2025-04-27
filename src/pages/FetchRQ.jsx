import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { fetchPosts } from "../api/FetchApiData";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);


  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts" , pageNumber],
    queryFn: ()=>fetchPosts(pageNumber),
    // gcTime : 30000,
    // staleTime : 7000,
    // refetchInterval : 1000,
    // refetchIntervalInBackground : true,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`} style={{ textDecoration: "none" }}>
                <p>{id}</p>
                <h2>{title}</h2>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="pagination-section container">
        <button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          Prev
        </button>
        <p>{pageNumber / 3 + 1}</p>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </>
  );
};
