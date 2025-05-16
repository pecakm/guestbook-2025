'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ nickname, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); register(); }}>
      <input value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Nickname" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
