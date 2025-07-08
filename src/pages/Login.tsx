import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [width, setWidth] = useState<string>('auto');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement authentication logic here (e.g., API call)
    console.log('Logging in with:', username, password);
    // On successful login, store token and redirect
  };

  useEffect(() => {
      const entryElements = document.getElementsByClassName('Entry');
  
      // This loop finds the set of inputs with the largest combined width
      let biggestWidth = 0;
      for (let i = 0; i < entryElements.length; i++) {
        const element = entryElements.item(i);
        if (element && element.children) {
          const label = element.children.item(0);
          const textBox = element.children.item(1);
          const labelWidth = label?.getBoundingClientRect().width || 0;
          const boxWidth = textBox?.getBoundingClientRect().width || 0;
  
          if (labelWidth + boxWidth > biggestWidth) {
            biggestWidth = labelWidth + boxWidth;
          }
          
        }
      }
  
      // Setting the input widths to be the biggest width, plus a 10 pixel gap
      setWidth(`${biggestWidth + 10}px`);
      
    }, []);

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
        <div className='Entry' style={{width: width}}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete='on'
          />
        </div>
        <div className='Entry' style={{width: width}}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='on'
          />
        </div>
        <button type="submit" className='Button' style={ { marginTop: '5px' } }>Login</button>
        <div style={{marginTop: '25px'}}>
            <Link to='/create-account' className='LinkButton' style={ { marginRight: '15%' } }>Create Account</Link>
            <Link to='/' className='LinkButton'>Forgot Login</Link>
        </div>
        
      </form>
    </div>
  );
};

export default Login;