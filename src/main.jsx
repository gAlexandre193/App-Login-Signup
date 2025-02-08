import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginSignup from './screen/loginSignup';
import './styles/Global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='wrapper flexCol'>
      <LoginSignup />
    </div>
  </StrictMode>,
);