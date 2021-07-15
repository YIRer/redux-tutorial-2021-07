import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

export const getPostById = async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
};
