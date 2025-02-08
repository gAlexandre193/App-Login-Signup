import { useState } from 'react';
import email from '../assets/email.png';
import person from '../assets/person.png';
import password from '../assets/password.png';
import Input from '../components/inputs';
import styles from '../styles/loginSignup.module.css';
import Button from '../components/button';

// Style Gray Submit Button
const btnGrayStyle = {
  backgroundColor: '#EAEAEA',
  color: '#676767',
};

export default function LoginSignup() {
  const [formVersion, setFormVersion] = useState('SignUp')

  // Actions
  const handleFormToLogin = () => setFormVersion('Login');
  const handleFormToSignUp = () => setFormVersion('SignUp');

  // Styles
  const styleBtnGray = (cond) => formVersion === cond ? btnGrayStyle : null;

  // Render
  const renderInputName = () => formVersion === 'SignUp' && <Input
    iconURL={person}
    iconDescription='Person'
    placeholder='Name'
  />

  return (
    <form className={`${styles.container} flexCol`}>
      <h2 className={styles.formTitle}> {formVersion} </h2>

      <div className={`${styles.inputs} flexCol`}>
        {renderInputName()}

        <Input
          iconURL={email}
          iconDescription='Email'
          type='email'
          placeholder='Email'
        />

        <Input
          iconURL={password}
          iconDescription='Password locker'
          type='password'
          placeholder='Password'
        />
      </div>

      <div className={styles.forgotPassword}>
        Lost Password? <a href='#forgot-password'>Click here!</a>
      </div>

      <div className={`${styles.submitContainer} flex`}>
        <Button 
          customStyle={styleBtnGray('Login')} 
          onClick={handleFormToSignUp}>
          Sign Up
        </Button>
        
        <Button 
          customStyle={styleBtnGray('SignUp')} 
          onClick={handleFormToLogin}>
          Login
        </Button>
      </div>
    </form>
  );
}