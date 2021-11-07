import {useContext, useEffect, useState} from "react";
import {Context} from "../store";
import {addPost, updatePosts} from "../store/actions";
import {PostsTable} from "../components/PostsTable";
import {PostForm} from "../components/PostForm";
import api from '../api';

function Posts() {
  const [editingPost, setEditingPost] = useState(null);
  const [state, dispatch] = useContext(Context);

  const loadPosts = async () => {
    const posts = await api.posts.loadPosts(state.auth.token);
    dispatch(updatePosts(posts))
  };

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const addNewPost = async (post) => {
    const result = await api.posts.createPost(post, state.auth.token);
    dispatch(addPost(result));
  };

  const editPost = async (post) => {
    setEditingPost(post);
  };

  const updatePost = async (post) => {
    await api.posts.updatePost(post, state.auth.token);
    await loadPosts();
    setEditingPost(null);
  }

  const deletePost = async (post) => {
    await api.posts.deletePost(post, state.auth.token);
    await loadPosts();
  }

  const handleSubmit = (post) => {
    if (editingPost && editingPost._id === post._id)
      return updatePost(post);
    return addNewPost(post);
  };

  useEffect(async () => {
    if(state.auth.token) {
      await loadPosts();
    }
  }, []);

  if(!state.auth.user) {
    return <>
      <h1>Please log in</h1>
    </>
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Posts</h1>
      <PostForm edit={editingPost} onSubmit={handleSubmit}/>

      <PostsTable
        posts={state.posts.data}
        onEdit={editPost}
        onDelete={deletePost}
      />
    </div>
  );
}

export default Posts;
