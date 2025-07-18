import React, { useState, useEffect } from 'react';
import { Validator } from '../code/Validator';
import { UsersDAO } from '../code';

function CreateAccount() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [width, setWidth] = useState<string>('auto');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation
    setErrorMsg(Validator.validateCreateAccount(username, email, password, confirmPassword));
    if (errorMsg.length > 0) {
      return;
    }

    const region = process.env.AWS_REGION;

    if (!region) {
      console.log('No region environment variable found')
      return;
    }

    const userDAO = new UsersDAO();
    userDAO.createUser(region, username, email, password).catch(e => {
      console.error('Error creating user: ', e)
    });
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
        <h2>Create Account</h2>
        <div className='Entry' style={{width: width}}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='Entry' style={{width: width}}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
          />
        </div>
        <div className='Entry' style={{width: width}}>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='Button' style={ { marginTop: '5px' } }>Create Account</button>
        <div className='ErrorMessage'>
          <h3>{errorMsg}</h3>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;