import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AdminPage from './components/Adminpage/adminpage';
import Bugbounty from './components/Bugbounty/bugbounty';
import Addblog from './components/AddBlog/addblog';
import Home from './components/Home/home';
import SignUpForm from './components/Signup/signup';
import LoginForm from './components/Login/loginform';



const App = () => {

    const user = localStorage.getItem('token');
    const usrnm= localStorage.getItem('username');
    let content;
    if(usrnm==='admin')
        content=<AdminPage/>
    else
        content=<Home/>
    return (
        <BrowserRouter>
            <Routes>    
                    {user && <Route path='/' exact element={content}/>}
                    {user && <Route path='/Addblog' exact element={<Addblog/>}/>} 
                    {user && <Route path='/Bugbounty' exact element={<Bugbounty/>}/>}
                    <Route path='/login' exact element={<LoginForm/>}/>
                    <Route path='/signup' exact element={<SignUpForm/>}/>

                    <Route path='/BugBounty' element={<Navigate replace to='/login'/>}/>
                    <Route path='/Addblog' element={<Navigate replace to='/login'/>}/>
                    <Route path='/' element={<Navigate replace to='/login'/>}/>
        
            </Routes>
        </BrowserRouter>
    )
}

export default App;