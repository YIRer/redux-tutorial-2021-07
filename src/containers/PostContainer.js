import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { getPost, goToHome } from "../modules/posts";

export default function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return (
    <div>
      <Post post={data} />
      <button
        onClick={() => {
          dispatch(goToHome());
        }}
      >
        홈으로
      </button>
    </div>
  );
}
