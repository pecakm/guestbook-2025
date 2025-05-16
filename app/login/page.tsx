'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ nickname, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) router.push('/');
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); login(); }}>
      <input value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Nickname" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
