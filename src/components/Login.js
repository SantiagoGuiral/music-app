import React from 'react'
import Logo from "../resources/images/logo.png"

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=78e9a4af26e24576825ad5914863a087&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
  return (
    <div className='login-page'>
        <img className='login-img' src={Logo} alt="spotify_logo"/>
        <h1 className='login-title'>My Music App</h1>
        <a className='login-button' href={AUTH_URL}>LOGIN</a>
    </div>
  )
}

export default Login
