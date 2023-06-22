import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, SignInAuthUserWithEmailAndPassword } from '../Firebase/FirebaseUtils';
import './SignInComponentStyles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInComponent(){
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password} = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
//to check the auth whether user is exist or password match
    try{
        const response = await SignInAuthUserWithEmailAndPassword(email,password);
        console.log(response);
    }catch(err){
        if(err.code === 'auth/wrong-password'){
        alert("incorrect password");
        }
        if(err.code === 'auth/user-not-found'){
        alert("user not found");
        }
    }
  //to revert back to empty form
    setFormFields(defaultFormFields);
  };
//controlled input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form className='forms-container' onSubmit={handleSubmit}>
        <input
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Email'
        />
     
        <input
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          placeholder='Password'
        />
        <div className='signin-button'>
        <button type='submit'>Sign In</button>
        <button type='button' onClick={signInWithGoogle}>Sign in with google</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignInComponent;
