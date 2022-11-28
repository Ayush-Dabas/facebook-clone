import React from 'react'
import "./Login.css"
import Button from '@mui/material/Button';
import {auth, provider} from "./fireBase.js";

export default function Login() {

    const signIn =() =>{
        auth.signInWithPopup(provider).then(result => {
          console.log(result.user)
        }).catch(error => alert(error.message));
    };

  return (
    <div className='login'>
        <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png" alt="" />

            <img src="https://www.freeiconspng.com/uploads/facebook-text-logo-transparent-10.png" alt=""/>
        </div>
        <Button variant="contained" type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}
