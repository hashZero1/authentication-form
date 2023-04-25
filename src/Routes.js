import {Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react'
import NavigationBar from './Components/Navigation';
import HomeRoute from './routes/HomeRoute';
import AuthComponent from './routes/AuthComponent'
import { UserContext } from './UserContext';
export default function Routers(){
    const {currentUser} = useContext(UserContext);
    return (
        <Routes>
            <Route path='/' element={<NavigationBar/>}>
            <Route index element={!currentUser? <AuthComponent/>: <Navigate to='/home'/> }/>
            <Route path='home' element={currentUser? <HomeRoute/> : <Navigate to='/'/> }/>
           
        </Route>
     </Routes>
    )
}