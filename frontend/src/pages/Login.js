import React, { useState } from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function Login({ onLogin }){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [username,setUsername]=useState('');
  const [isRegister,setIsRegister]=useState(false);
  const [err,setErr]=useState('');

  const submit = async (e) => {
    e.preventDefault();
    try{
      if(isRegister){
        const res = await axios.post(`${API}/auth/register`, { name, username, email, password });
        onLogin(res.data.token);
      } else {
        const res = await axios.post(`${API}/auth/login`, { email, password });
        onLogin(res.data.token);
      }
    }catch(e){
      setErr(e.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="center">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={submit}>
        {isRegister && <>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} required />
        </>}
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">{isRegister ? 'Create account' : 'Login'}</button>
      </form>
      <p style={{color:'red'}}>{err}</p>
      <p onClick={()=>setIsRegister(!isRegister)} className="link">{isRegister ? 'Have an account? Login' : "Don't have account? Register"}</p>
    </div>
  );
}
