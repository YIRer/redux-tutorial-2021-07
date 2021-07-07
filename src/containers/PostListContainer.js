import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";

export default function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      return;
    }
    dispatch(getPosts());
  }, [dispatch, data]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}