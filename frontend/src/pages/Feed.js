import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function Feed({ token, user }){
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');

  useEffect(()=>{
    axios.get(`${API}/posts/feed`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setPosts(res.data))
      .catch(console.error);
  }, [token]);

  const create = async (e) => {
    e.preventDefault();
    if(!content) return;
    const res = await axios.post(`${API}/posts`, { content }, { headers: { Authorization: `Bearer ${token}` }});
    setPosts([res.data, ...posts]);
    setContent('');
  };

  const like = async (id) => {
    const res = await axios.post(`${API}/posts/${id}/like`, {}, { headers: { Authorization: `Bearer ${token}` }});
    setPosts(posts.map(p => p._id===id ? { ...p, likes: Array(res.data.likes).fill(null) } : p));
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Create post</h3>
        <form onSubmit={create}>
          <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Share something..." />
          <button type="submit">Post</button>
        </form>
      </div>
      <div>
        {posts.map(p => (
          <div key={p._id} className="post card">
            <div><strong>{p.author?.username || 'user'}</strong> · {new Date(p.createdAt).toLocaleString()}</div>
            <p>{p.content}</p>
            <div>
              <button onClick={()=>like(p._id)}>Like ({p.likes?.length || 0})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
