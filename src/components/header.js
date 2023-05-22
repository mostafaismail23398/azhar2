import React from 'react'
import './header.css'
import axios, { Axios } from 'axios'
// import { useState, useRef, useEffect } from 'react'


const Header = ()=> {


  return (
   <div>
   <div className='main'>
    <div className='sub-main'>
      
        <form  action="action_page.php" method="post">

  <div className='logincontainer'> تسجيل الدخول</div>
  <div class="container">
    <label for="uname"><b>الكود الالكتروني</b></label>
    <input type="text"  id="name"  placeholder="الكود الالكتروني" name="uname" required/>

    <label for="psw"><b>كلمة السر</b></label>
    <input type="password" id="date"  placeholder="كلمة السر" name="psw" required/>

    <button  type="submit">تسجيل دخول</button>
    
    
  </div>


    
  
</form>
        </div>
      </div>
    </div>

    
  )
}

export default Header