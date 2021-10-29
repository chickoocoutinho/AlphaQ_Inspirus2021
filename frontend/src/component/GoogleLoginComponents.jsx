import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Button } from "antd";
import GoogleIcon from "../assets/google-icon.png";
import baseUrl from "../baseURL";
import axios from "axios";

const init = async () => {
  await window.gapi.client.init({
    apiKey: process.env.REACT_APP_DOC_API_KEY,
    discoveryDocs: ["https://classroom.googleapis.com/$discovery/rest"],
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "https://www.googleapis.com/auth/classroom.courses.readonly",
  });
};

const GoogleLoginComponents = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const googleSuccess = async (res) => {
    await window.gapi.load("client:auth2", init);
    await new Promise((resolve)=>setTimeout(resolve,2000))
    console.log(window.gapi);
    if (localStorage.getItem("user_details")) {
      history.push("/courses");
    } else {
      const { name, email, imageUrl, googleId } = await res.profileObj;
      setLoading(true);
      const token = await res.tokenId;
      const params = {
        name,
        email,
        imageUrl,
        token,
        googleId,
      };

      //api to store user data
      localStorage.setItem("user_details", params);
      axios
        .post(`${baseUrl}user/signup`, params)
        .then(() => history.push("/courses"))
        .catch((err) => console.log(err));
    }
  };

  const googleFailure = async (error) => {
    alert("Please enable allow cookies in chrome settings");
    console.log(error);
  };

  const logout = () => {
    localStorage.removeItem("user_details")
    history.push("/")
    setLoading(false)
  }
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={(renderProps) => (<>
        {!localStorage.getItem("user_details")?
        <Button
        size="large"
          icon={
            <img
              alt="google icon"
              src={GoogleIcon}
              style={{ marginRight: 10 }}
            />
            
          }
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          type="secondary"
          loading={loading}
        >
          Login 
        </Button>:<Button size="large" onClick={logout}>Logout</Button>}</>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy={"single_host_origin"}
      discoveryDocs={["https://classroom.googleapis.com/$discovery/rest"]}
      scope="https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly"
    />
  );
};

export default GoogleLoginComponents;
