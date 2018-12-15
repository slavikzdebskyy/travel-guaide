import React from 'react';
import TextField from '@material-ui/core/TextField';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import './style.login.scss';

const responseFacebook = response => {
  console.log('facebook => ', response);
};

const responseGoogle = response => {
  console.log(response);
};

const LoginComponent = () => (
      <div className = 'login-container'>
        <div>
          <form className = 'login-form'>   
            <TextField
              label = 'Full name' 
              type = 'text'         
              margin = 'normal'
              required          
            /> 
            <TextField
              label = 'Email' 
              type = 'email'         
              margin = 'normal'
              required          
            />      
            <TextField
              label ='Password'          
              type = 'password'
              margin = 'normal'
              required
            />
            <button 
              className ='login-btn email'
              type = 'submit'
            >
              Sign Up
            </button>              
          </form>
          <span>OR</span>
          <div className ='login-social'>
            <FacebookLogin
              appId = '197070654556237'
              autoLoad = {true}
              fields = 'name,email,picture'
              callback = {responseFacebook}
              cssClass = 'login-btn fb'
            />
            <GoogleLogin
              clientId = '223535496927-ih6j586iut5vnq55tl7paobtdjv1hphm.apps.googleusercontent.com'
              buttonText = 'Login with Google+'
              onSuccess = {responseGoogle}
              onFailure = {responseGoogle}
             />,
            <button className ='twitter login-btn'>
              <i className ='fa fa-twitter fa-fw'></i> 
              Login with Twitter
            </button>
            <button className ='google login-btn'><i className ='fa fa-google fa-fw'>
              </i> Login with Google+
            </button>
          </div>
        </div>
     </div>
    );

export default LoginComponent;
