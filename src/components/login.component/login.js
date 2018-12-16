import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
 
import SocialButton from './button';
import toggleLoginModalAction from '../../redux/actions/toggle.login.action';
import {GOOGLE_CLIENT_ID, FACEBOOK_APP_ID} from '../../social.config';

import './style.login.scss';
 
const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}

 
const LoginComponent = (props) => (
  <div className = 'login-container'>
    <div className = 'login-btn-container'>
      <FontAwesome 
        name = 'times'
        className = 'close-login-btn'     
        onClick = {props.toggleLogin}
      />
      <SocialButton
        provider = 'facebook'
        appId = {FACEBOOK_APP_ID}
        onLoginSuccess = {handleSocialLogin}
        onLoginFailure = {handleSocialLoginFailure}
        className = 'social-btn facebook'
      >
        <FontAwesome 
          name = 'facebook'
          className = 'social-logo'
        />
        Login with Facebook
      </SocialButton>
      <SocialButton
        provider = 'google'
        appId = {GOOGLE_CLIENT_ID}
        onLoginSuccess = {handleSocialLogin}
        onLoginFailure = {handleSocialLoginFailure}
        className = 'social-btn google'
      >
        <FontAwesome 
          name = 'google'
          className = 'social-logo'
        />
        Login with Google
      </SocialButton>
    </div>    
  </div>
)
const mapStateToProps = state => {
  return {    
    isVisibleLogin : state.isVisibleLogin
  };
};

const mapDispatchToProps = dispatch => ({ 
  toggleLogin: () => {
    dispatch(toggleLoginModalAction())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));