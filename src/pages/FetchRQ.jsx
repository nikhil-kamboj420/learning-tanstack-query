import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { deletePost, fetchPosts, updatePost } from "../api/FetchApiData";

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

  const queryClient = useQueryClient();

  // delete from caches
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

    // Update from caches
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      queryClient.setQueryData(["posts", pageNumber], (postData) => {
        return postData.map((curPost)=>{
          return curPost.id === postId
          ? { ...curPost, title: apiData.data.title }
          : curPost;
        })
      });
    },
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
              <button onClick={() => deleteMutation.mutate(id) }>Delete</button>
              <button onClick={() => updateMutation.mutate(id) }>Update</button>
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
