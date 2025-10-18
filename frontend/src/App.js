import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './pages/Login';
import Feed from './pages/Feed';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App(){
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(token){
      axios.get(`${API}/users/me`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => setUser(res.data))
        .catch(() => { setToken(''); localStorage.removeItem('token'); });
    }
  }, [token]);

  if(!token) return <Login onLogin={(t)=>{ setToken(t); localStorage.setItem('token', t); }} />;

  return <Feed token={token} user={user} />;
}

export default App;
