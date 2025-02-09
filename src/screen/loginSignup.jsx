import { useState } from 'react';
import emailImage from '../assets/email.png';
import personImage from '../assets/person.png';
import passwordImage from '../assets/password.png';
import Input from '../components/inputs';
import styles from '../styles/loginSignup.module.css';
import Button from '../components/button';

// Style Gray Submit Button
const btnGrayStyle = {
  backgroundColor: '#EAEAEA',
  color: '#676767',
};

export default function LoginSignup() {
  const [formVersion, setFormVersion] = useState('SignUp');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Actions
  const handleResetInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }
  const handleFormToLogin = (e) => {
    /**
     * Prevents Submit from being activated when changing form versions 
     * and clears values ​​previously placed in the input
     */
    formVersion !== 'Login' 
      && e.preventDefault() || handleResetInput();

    setFormVersion('Login');
  }
  const handleFormToSignUp = (e) => {
    /**
     * Prevents Submit from being activated when changing form versions 
     * and clears values ​​previously placed in the input
     */
    formVersion !== 'SignUp' 
      && e.preventDefault() || handleResetInput();
    
    setFormVersion('SignUp');
  }     
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prevents sending if the email and password are empty
    if(!email) return alert('Email must be completed');
    if(!password) return alert('Password must be completed');

    let dataForm = { email, password }
    
    if(formVersion === 'SignUp') {
      // Prevents sending if the username are empty
      if(!username) return alert('Name must be completed');

      return console.log({...dataForm, username})
    } 
                                              
    return console.log(dataForm)
  }

  // Styles
  const styleBtnGray = (cond) => formVersion === cond ? btnGrayStyle : null;

  // Render
  const renderInputName = () => formVersion === 'SignUp' && <Input
    iconURL={personImage}
    iconDescription='Person'
    placeholder='Name'
    required
    value={username}
    onChange={setUsername}
  />

  return (
    <form className={`${styles.container} flexCol`} onSubmit={handleFormSubmit}>
      <h2 className={styles.formTitle}> {formVersion} </h2>

      <div className={`${styles.inputs} flexCol`}>
        {renderInputName()}

        <Input
          iconURL={emailImage}
          iconDescription='Email'
          type='email'
          placeholder='Email'
          required
          value={email}
          onChange={setEmail}
        />

        <Input
          iconURL={passwordImage}
          iconDescription='Password locker'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className={styles.forgotPassword}>
        Lost Password? <a href='#forgot-password'>Click here!</a>
      </div>

      <div className={`${styles.submitContainer} flex`}>
        <Button
          type='submit' 
          customStyle={styleBtnGray('Login')} 
          onClick={handleFormToSignUp}>
          Sign Up
        </Button>
        
        <Button
          type='submit' 
          customStyle={styleBtnGray('SignUp')} 
          onClick={handleFormToLogin}>
          Login
        </Button>
      </div>
    </form>
  );
}