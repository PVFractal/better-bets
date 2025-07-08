import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement authentication logic here (e.g., API call)
    console.log('Logging in with:', username, password);
    // On successful login, store token and redirect
  };

  return (
    <div className='App'>
      <header className="Main-header">
        <div>
          {/* placeholder div */}
        </div>
        <div className='Title'>
          <h1>Better Betting</h1>
        </div>
        <div>
          {/* placeholder div */}
        </div>
      </header>
      <form onSubmit={handleSubmit} className='Login'>
        <h2>Login</h2>
        <div className='Entry'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='Entry'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='Button' style={ { marginTop: '5px' } }>Login</button>
        <div style={{marginTop: '25px'}}>
            <Link to='/' className='LinkButton' style={ { marginRight: '15%' } }>Create Account</Link>
            <Link to='/' className='LinkButton'>Forgot Login</Link>
        </div>
        
      </form>
    </div>
  );
};

export default Login;