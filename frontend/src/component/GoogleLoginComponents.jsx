import React,{useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import GoogleIcon from '../assets/google-icon.png';

const GoogleLoginComponents = () => {
  const [loading,setLoading] = useState(false);
  const googleSuccess = async res => {
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
    console.log(params)
    //api to store user data
    localStorage.setItem("user_details", params);
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
