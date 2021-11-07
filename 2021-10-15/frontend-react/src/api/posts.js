import {authorization} from "./_utils";

export async function loadPosts(token) {
  const res = await fetch('http://localhost:8081/api/posts', {
    headers: authorization(token)
  });
  return await res.json();
}

export async function createPost({title, text}, token) {
  const res = await fetch('http://localhost:8081/api/posts/create', {
    method: 'POST',
    body: JSON.stringify({title, text}),
    headers: {
      'Content-Type': 'application/json',
      ...authorization(token)
    }
  });
  return await res.json();
}

export async function updatePost({_id, title, text}, token) {
  await fetch(`http://localhost:8081/api/posts/update/${_id}`, {
    method: 'PUT',
    body: JSON.stringify({title, text}),
    headers: {
      'Content-Type': 'application/json',
      ...authorization(token)
    }
  });
}

export async function deletePost({_id}, token) {
  await fetch(`http://localhost:8081/api/posts/delete/${_id}`, {
    method: 'DELETE',
    headers: authorization(token)
  });
}