import { useState } from 'react';
import email from '../assets/email.png';
import person from '../assets/person.png';
import password from '../assets/password.png';
import './index.css';

export default function LoginSignup() {
  const [action, setAction] = useState('Sign Up')

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'> {action} </div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === 'Login'
          ? <div></div>
          : <div className='input'>
            <img src={person} alt='Person' />

            <input type='text' placeholder='Name' />
          </div>}

        <div className='input'>
          <img src={email} alt='Email' />

          <input type='email' placeholder='Email Id' />
        </div>
        
        <div className='input'>
          <img src={password} alt='Password' />

          <input type='password' placeholder='Password' />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click here!</span>
      </div>

      <div className="submit-container">
        <div 
          className={`
            submit 
            ${action === 'Login' ? 'gray' : ''}
          `}
          onClick={() => setAction('Sign Up')}
        > 
          Sign Up 
        </div>
        
        <div 
          className={`
            submit 
            ${action === 'Sign Up' ? 'gray' : ''}`
          }
          onClick={() => setAction('Login')}
        > 
          Login 
        </div>
      </div>
    </div>
  );
}