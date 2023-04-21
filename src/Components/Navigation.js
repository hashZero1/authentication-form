import React,{useContext} from 'react'

import { Outlet,Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { signOutUser } from '../Firebase/FirebaseUtils';
import './NavigationStyles.scss';

function NavigationBar(){
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
    return (
        <>
         <div className='navigation'>
            <div className='nav-container'>
            <Link className='logo-container' to='/'>
            <div>LOGO</div>
            </Link>
            <div className='nav-links-container'>
                {currentUser?  <Link className='nav-links' onClick={signOutUser} to='/auth'>
                    SignOut
                </Link> : <Link className='nav-links' to='/auth'>
                    SignIn
                </Link> }
            </div>
            </div>
            
          <Outlet/>
        </div> 
        </>
    )
}

export default NavigationBar;