import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Retrieves a list of posts from the API
export const getPosts = () => {
  return api.get("/posts");
};
