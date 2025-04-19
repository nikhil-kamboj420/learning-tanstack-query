import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});


// Retrieves a list of posts from the API
export const getPosts = () => {
  return api.get("/posts");
};

// to fetch the indv. data
export const FetchIndvPost= async(id) => {
  try{
    const res = await api.get(`/posts/${id}`);
   return  res.status === 200 ?  res.data :[];
  }catch(e){
    console.log(e);
  }
}


