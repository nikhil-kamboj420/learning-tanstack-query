import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllPost =async()=>{
  return api.get("/posts");
}

// to fetch the data
export const fetchPosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
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


// to delete the post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
// to Update the post
export const updatePost = (id) => {
  return api.patch(`/posts/${id}`, { title: "I have updated" });
};
