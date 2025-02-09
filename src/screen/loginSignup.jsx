import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailImage from '../imgs/email.png';
import personImage from '../imgs/person.png';
import passwordImage from '../imgs/password.png';
import loadingImage from '../imgs/loading.svg';
import Input from '../components/inputs';
import styles from '../styles/loginSignup.module.css';
import Button from '../components/button';

// Style Gray Submit Button
const btnGrayStyle = {
  backgroundColor: '#EAEAEA',
  color: '#676767',
};

export default function LoginSignup() {
  const [formVersion, setFormVersion] = useState('Login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Actions
  const handleResetInput = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }
  const handleSendDataForm = (formData) => {
    // Prevents sending if the email and password are empty
    if(!formData.email) return toast.error('Email must be completed');
    if(!formData.password) return toast.error('Password must be completed');
    
    if(formVersion === 'SignUp') {
      // Prevents sending if the username are empty
      if(!formData.username) return toast.error('Name must be completed');
    } 
    
    setLoading(true);

    setTimeout(() => {
      toast.success(`${formVersion === 'Login' 
        ? 'Connected successfully' 
        : 'Successfully registered'}`);

      setLoading(false);
      return console.log(formData);
    }, 800)
  }
  const handleFormToLogin = () => {
    formVersion === 'Login' && handleSendDataForm({ email, password });
    formVersion !== 'Login' && handleResetInput();

    setFormVersion('Login');
  }
  const handleFormToSignUp = () => {
    formVersion === 'SignUp' && handleSendDataForm({ username, email, password });
    formVersion !== 'SignUp' && handleResetInput();
    
    setFormVersion('SignUp');
  }     

  // Styles
  const styleBtnGray = (cond) => formVersion === cond ? btnGrayStyle : null;

  // Render
  const renderInputName = () => (formVersion === 'SignUp' && <Input
    iconURL={personImage}
    iconDescription='Person'
    placeholder='Name'
    required
    value={username}
    onChange={setUsername}
  />)
  const renderFormButtons = () => (loading
    ? <img
      src={loadingImage}
      alt='Loading'
      className={styles.loadingImage}
      height={40}
      width={40}
    />
    : <>
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
    </>)

  return (
    <form className={`${styles.container} flexCol`}>
      <Toaster position='top-right' />

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
        {renderFormButtons()}
      </div>
    </form>
  );
}