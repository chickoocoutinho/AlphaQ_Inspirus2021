import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import GoogleIcon from '../assets/google-icon.png';
import baseUrl from '../baseURL';
import axios from 'axios';

const GoogleLoginComponents = () => {
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const googleSuccess = async res => {
    if(localStorage.getItem("user_details")){
      history.push('/courses')
    }else{
      const { name, email, imageUrl, googleId } = await res.profileObj;
    setLoading(true);
    const token = await res.tokenId;
    const params = {
      name,
      email,
      imageUrl,
      token,
      googleId
    };
    
    //api to store user data
    localStorage.setItem("user_details", params);
    axios.post(`${baseUrl}user/signup`,params).then(()=>history.push('/courses')).catch(err=>console.log(err))
    }
  };

  const googleFailure = async error => {
    alert('Please enable allow cookies in chrome settings');
    console.log(error);
  };

    return (
        <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={renderProps => (
           <Button icon={<img src={GoogleIcon} style={{marginRight: 10}}/>} onClick={renderProps.onClick} disabled={renderProps.disabled} type="secondary" loading={loading}>Login With Google</Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy={'single_host_origin'}
      />
     
    )
}

export default GoogleLoginComponents
