import React from 'react'
import SignInForm from '../Components/SignInForm';
import SignInComponent from '../Components/SignInComponent';
import './AuthStyles.scss'
export default function AuthComponent() {
    return (
        <div className='container'>
        <h1>Sign In Page</h1>
        <div className='forms'>
          <SignInComponent />
          <SignInForm/>
        </div>
       
      </div>
    )
} 