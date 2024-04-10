import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Login.css'


function Login() {
  return (
    <div className='login-container'>
     <Navbar />
     <div className="wrapper mx-auto my-[200px] ">
        <form action="">
            <h1 className='Lalezar'>ورود/ایجاد حساب</h1>
            <div className="input-box">
                <input  className='Lamia' type="text" placeholder="نام کاربری" required/>
                
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input  className='Lamia' type="password" placeholder="رمز عبور" required/>
                <i className='bx bxs-lock-alt' ></i>
            </div>
              <button type="button"  className="btn Lamia" >ورود</button>
           
        </form>
    </div>
    </div>
  )
}

export default Login
